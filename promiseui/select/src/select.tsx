import { defineComponent, nextTick, ref, SetupContext, watch, shallowRef, computed } from 'vue'
import { selectProps, SelectProps, ISelectOption } from './select-types'

import './index.scss'
import { Overlay } from '../../overlay'
import { useNamespace } from '../../shared/hooks/use-namespace'

import { RenderItemProps, VirtualScroll } from '../../virtualScroll'
import useOption from './hooks/use-option'
import useMemoScrollTop from './hooks/use-memo-scrollTop'
import { Tag } from '../../tag'
import useInput from './hooks/use-input'
import useDefaultValue from './hooks/use-defaultValue'

import { Icon } from '../../icon'
import { ChevronDownSharp, CloseCircleOutline } from '@vicons/ionicons5'
import { Dropdown } from '../../dropdown'
import Wave from '../../shared/components/wave'
import useFormValidate from './hooks/use-form-validate'
import useFormSize from '../../form/src/hooks/use-form-size'

const ITEM_HEIGHT = 32

export default defineComponent({
  name: 'PSelect',
  props: selectProps,
  emits: ['update:modelValue', 'change', 'inputChange'],
  setup(props: SelectProps, ctx) {
    const ns = useNamespace('select')
    const selectRef = ref<HTMLDivElement | null>(null)
    const overlayRef = ref()
    const virtualListRef = ref()
    const selectInputRef = ref<HTMLInputElement>()
    const tagDropdownRef = ref<HTMLElement>()
    const optionListShow = ref(false)
    const inputValue = ref('')

    const onOutsideClick = () => {
      optionListShow.value = false
      inputValue.value = ''
    }
    useFormValidate(props, optionListShow)
    useMemoScrollTop(optionListShow, virtualListRef)
    const { defaultSingleActiveItem, defaultMultipleActiveItems } = useDefaultValue(props)
    const singleActiveItem = ref<ISelectOption>(defaultSingleActiveItem)
    const multipleActiveItems = ref<ISelectOption[]>(defaultMultipleActiveItems)

    const { selectOptionClick, selectOptionClass, options, onClearOpiton } = useOption(
      props,
      ctx as SetupContext,
      singleActiveItem,
      multipleActiveItems,
      optionListShow,
      inputValue,
      ns
    )

    const { onAddTag, onTagClose } = useInput(
      props,
      inputValue,
      multipleActiveItems,
      options,
      optionListShow
    )

    const handleSelectOptionClick = (e: Event, itemProps: RenderItemProps<ISelectOption>) => {
      selectOptionClick(e, itemProps)
      const needScroll = inputValue.value.length !== 0
      inputValue.value = ''
      if (needScroll) {
        nextTick(() => {
          virtualListRef.value?.setScrollTop(0)
        })
      }
    }
    const selectClick = () => {
      if (props.disabled) return

      optionListShow.value = !optionListShow.value
      if (optionListShow.value) {
        nextTick(() => {
          selectInputRef.value?.focus()
        })
      }
    }
    watch(
      () => multipleActiveItems.value.length,
      () => {
        ctx.emit(
          'update:modelValue',
          multipleActiveItems.value.map((item) => item.value)
        )
        ctx.emit('change', multipleActiveItems.value)
      }
    )
    watch(singleActiveItem, () => {
      ctx.emit('update:modelValue', singleActiveItem.value?.value)
      ctx.emit('change', singleActiveItem.value)
    })

    const fromSize = useFormSize()
    const selectSize = computed(() => props.size || fromSize.value || 'md')

    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m('disabled')]: props.disabled,
      [ns.m(selectSize.value)]: true,
      [ns.m(props.status + '-status')]: props.status,
      [ns.m('focus')]: optionListShow.value
    }))

    const renderOptionItem = (itemProps: RenderItemProps<ISelectOption>) => {
      const { row } = itemProps
      return props.renderLabel ? (
        props.renderLabel(itemProps)
      ) : (
        <div class={ns.e('option_content')}>{row.label}</div>
      )
    }
    const renderNoMatch = () => {
      return ctx.slots.noMatch ? (
        ctx.slots.noMatch()
      ) : (
        <div class={ns.e('no-match')}>No matching data</div>
      )
    }
    const renderTags = () => {
      const remainingCount = multipleActiveItems.value.length - props.maxTagCount
      const sliceTags = (start: number, end?: number) =>
        multipleActiveItems.value.slice(start, end).map((item) => (
          <Tag
            class={ns.e('tag')}
            type={item.tagType ? item.tagType : props.tagType}
            closable
            onClose={(e) => onTagClose(e, item)}
            key={item.value}
          >
            {item.label}
          </Tag>
        ))
      return (
        <>
          {sliceTags(0, props.maxTagCount)}
          {remainingCount > 0 && (
            <Dropdown position="top">
              {{
                dropdown: () => (
                  <div class={ns.e('tag-dropdown')} ref={tagDropdownRef}>
                    {sliceTags(props.maxTagCount)}
                  </div>
                ),
                default: () => <Tag>+{remainingCount}</Tag>
              }}
            </Dropdown>
          )}
        </>
      )
    }
    const renderMultiple = () => (
      <div class={ns.e('tags')}>
        {renderTags()}
        {props.filterable ? (
          <input
            class={ns.e('input')}
            v-model={inputValue.value}
            ref={selectInputRef}
            disabled={props.disabled}
            style={{
              width: Math.max(inputValue.value.length, props.placeholder.length) * 14 + 'px'
            }}
            placeholder={multipleActiveItems.value.length === 0 ? props.placeholder : ''}
            onKeyup={onAddTag}
            onChange={(e) => ctx.emit('inputChange', (e.target as HTMLInputElement).value)}
          ></input>
        ) : (
          multipleActiveItems.value.length === 0 && (
            <span class={ns.e('placeholder')}>{props.placeholder}</span>
          )
        )}
      </div>
    )
    const renderSingle = () => {
      const label = singleActiveItem.value?.label || props.placeholder

      return props.filterable ? (
        <input
          class={[ns.e('input'), !props.modelValue && ns.em('input', 'placeholder')]}
          ref={selectInputRef}
          v-model={inputValue.value}
          disabled={props.disabled}
          style={{
            width: '100%'
          }}
          placeholder={label}
          onChange={(e) => ctx.emit('inputChange', (e.target as HTMLInputElement).value)}
        ></input>
      ) : (
        <span
          class={[
            ns.e('single-value'),
            {
              [ns.em('single-value', 'placeholder')]: !singleActiveItem.value
            }
          ]}
        >
          {label}
        </span>
      )
    }

    const IconComponent = shallowRef(ChevronDownSharp)
    return () => {
      return (
        <Wave>
          <div
            class={classes.value}
            onClick={selectClick}
            ref={selectRef}
            onMouseenter={() => {
              if (props.clearable) IconComponent.value = CloseCircleOutline
            }}
            onMouseleave={() => (IconComponent.value = ChevronDownSharp)}
          >
            {props.multiple ? renderMultiple() : renderSingle()}
            {
              <div class={ns.e('clear')} onClick={onClearOpiton}>
                <Icon component={IconComponent.value} />
              </div>
            }
            <Overlay
              v-model={optionListShow.value}
              position="bottom-start"
              origin={selectRef.value}
              offset={2}
              style={{ width: selectRef.value?.clientWidth + 'px' || 'unset', padding: '0' }}
              ref={overlayRef}
              onOutsideClick={onOutsideClick}
              clickOutsideIgnore={[tagDropdownRef]}
              flip
            >
              {options.value.length ? (
                <VirtualScroll
                  ref={virtualListRef}
                  keepAlive
                  itemKey="value"
                  itemHeight={32}
                  listData={options.value}
                  itemClass={selectOptionClass}
                  onItemClick={handleSelectOptionClick}
                  wrapHeight={Math.min(
                    props.maxOptionCount * ITEM_HEIGHT,
                    options.value.length * ITEM_HEIGHT
                  )}
                >
                  {{
                    item: renderOptionItem
                  }}
                </VirtualScroll>
              ) : (
                renderNoMatch()
              )}
            </Overlay>
          </div>
        </Wave>
      )
    }
  }
})
