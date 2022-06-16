import { defineComponent, ref, SetupContext } from 'vue'
import { selectProps, SelectProps, ISelectOption, selectActiveKey } from './select-types'

import './index.scss'
import { Overlay } from '../../overlay'
import { useNamespace } from '../../shared/hooks/use-namespace'

import { RenderItemProps, VirtualScroll } from '../../virtualScroll'
import useOption from './hooks/use-option'
import useMemoScrollTop from './hooks/use-memo-scrollTop'

const ITEM_HEIGHT = 32

export default defineComponent({
  name: 'PSelect',
  props: selectProps,
  emits: ['update:modelValue'],
  setup(props: SelectProps, ctx) {
    const ns = useNamespace('select')
    const selectEl = ref<HTMLDivElement | null>(null)
    const overlayEl = ref()
    const virtualListEl = ref()
    const optionListShow = ref(true)
    const onOutsideClick = () => (optionListShow.value = false)

    useMemoScrollTop(optionListShow, virtualListEl)

    const defaultSingleActiveItem = props.options?.find((item) => item.value === props.modelValue)
    let defaultMultipleActiveItems: ISelectOption[] = []

    if (Array.isArray(props.modelValue)) {
      const values = new Set(props.modelValue as ISelectOption[])
      defaultMultipleActiveItems =
        props.options?.filter((item) => {
          const has = values.has(item.value)
          if (has) item[selectActiveKey] = true
          return has
        }) || []
    }

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

    const renderSelectItem = ({ row }: RenderItemProps<ISelectOption>) => {
      return <div class={ns.e('option_content')}>{row.label}</div>
    }
    return () => {
      return (
        <div
          class="pui-select"
          onClick={(_) => (optionListShow.value = !optionListShow.value)}
          ref={selectEl}
        >
          {props.multiple ? (
            <div class={ns.e('tags')}>
              {multipleActiveItems.value.map((item) => (
                <div class={ns.e('tag')}>{item.label}</div>
              ))}
              <div class={ns.e('input')}></div>
            </div>
          ) : (
            <span class={ns.e('single-value')}>{singleActiveItem.value?.label}</span>
          )}
          <Overlay
            v-model={optionListShow.value}
            position="bottom-start"
            origin={selectEl.value}
            offset={2}
            style={{ width: selectEl.value?.clientWidth + 'px' || 'unset', padding: '0' }}
            ref={overlayEl}
            onOutsideClick={onOutsideClick}
          >
            <VirtualScroll
              ref={virtualListEl}
              keepAlive
              itemHeight={32}
              listData={options.value}
              itemClass={selectOptionClass}
              onItemClick={selectOptionClick}
              wrapHeight={Math.min(
                props.maxOptionCount * ITEM_HEIGHT,
                options.value.length * ITEM_HEIGHT
              )}
            >
              {{
                item: renderSelectItem
              }}
            </VirtualScroll>
          </Overlay>
        </div>
      )
    }
  }
})
