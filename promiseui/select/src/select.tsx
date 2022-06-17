import { defineComponent, nextTick, ref, SetupContext, watch, withModifiers } from 'vue'
import { selectProps, SelectProps, ISelectOption, selectActiveKey } from './select-types'

import './index.scss'
import { Overlay } from '../../overlay'
import { useNamespace } from '../../shared/hooks/use-namespace'

import { RenderItemProps, VirtualScroll } from '../../virtualScroll'
import useOption from './hooks/use-option'
import useMemoScrollTop from './hooks/use-memo-scrollTop'
import { Tag } from '../../tag'
import useInput from './hooks/use-input'
import useDefaultValue from './hooks/use-defaultValue'

const ITEM_HEIGHT = 32

export default defineComponent({
  name: 'PSelect',
  props: selectProps,
  emits: ['update:modelValue'],
  setup(props: SelectProps, ctx) {
    const ns = useNamespace('select')
    const selectRef = ref<HTMLDivElement | null>(null)
    const overlayRef = ref()
    const virtualListRef = ref()
    const selectInputRef = ref<HTMLInputElement>()
    const optionListShow = ref(false)
    const inputValue = ref('')
    const onOutsideClick = () => {
      optionListShow.value = false
      inputValue.value = ''
    }

    useMemoScrollTop(optionListShow, virtualListRef)
    const { defaultSingleActiveItem, defaultMultipleActiveItems } = useDefaultValue(props)
    const singleActiveItem = ref<ISelectOption>(defaultSingleActiveItem)
    const multipleActiveItems = ref<ISelectOption[]>(defaultMultipleActiveItems)

    const { selectOptionClick, selectOptionClass, options } = useOption(
      props,
      ctx as SetupContext,
      singleActiveItem,
      multipleActiveItems,
      optionListShow,
      ns
    )
    const { onAddTag, onTagClose } = useInput(props, inputValue, multipleActiveItems, options)
    const handleSelectOptionClick = (e: Event, itemProps: RenderItemProps<ISelectOption>) => {
      selectOptionClick(e, itemProps)
      inputValue.value = ''
      nextTick(() => {
        virtualListRef.value?.setScrollTop(0)
      })
    }
    const selectClick = () => {
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
      }
    )
    watch(singleActiveItem, () => {
      ctx.emit('update:modelValue', singleActiveItem.value.value)
    })

    const renderSelectItem = ({ row }: RenderItemProps<ISelectOption>) => {
      return <div class={ns.e('option_content')}>{row.label}</div>
    }
    const renderNoMatch = () => {
      return ctx.slots.noMatch ? (
        ctx.slots.noMatch()
      ) : (
        <div class={ns.e('no-match')}>No matching data</div>
      )
    }

    const renderMultiple = () => (
      <div class={ns.e('tags')}>
        {multipleActiveItems.value.map((item) => (
          <Tag
            class={ns.e('tag')}
            type={props.tagType}
            closable
            onClose={(e) => onTagClose(e, item)}
          >
            {item.label}
          </Tag>
        ))}

        <input
          class={ns.e('input')}
          v-model={inputValue.value}
          ref={selectInputRef}
          style={{
            width: inputValue.value.length * 14 + 'px'
          }}
          onKeyup={onAddTag}
        ></input>
      </div>
    )
    const renderSingle = () =>
      props.filterable ? (
        <input
          class={[ns.e('input'), ns.e('single-value-input')]}
          v-model={inputValue.value}
          ref={selectInputRef}
          style={{
            width: '100%'
          }}
          placeholder={singleActiveItem.value.label}
        ></input>
      ) : (
        <span class={ns.e('single-value')}>{singleActiveItem.value?.label}</span>
      )

    return () => {
      return (
        <div class="pui-select" onClick={selectClick} ref={selectRef}>
          {props.multiple ? renderMultiple() : renderSingle()}
          <Overlay
            v-model={optionListShow.value}
            position="bottom-start"
            origin={selectRef.value}
            offset={2}
            style={{ width: selectRef.value?.clientWidth + 'px' || 'unset', padding: '0' }}
            ref={overlayRef}
            onOutsideClick={onOutsideClick}
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
                  item: renderSelectItem
                }}
              </VirtualScroll>
            ) : (
              renderNoMatch()
            )}
          </Overlay>
        </div>
      )
    }
  }
})
