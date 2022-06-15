import { computed, defineComponent, ref } from 'vue'
import {
  selectProps,
  SelectProps,
  ISelectItem,
  ISelectOption,
  selectActiveKey
} from './select-types'

import './index.scss'
import { Overlay } from '../../overlay'
import { useNamespace } from '../../shared/hooks/use-namespace'

import { RenderItemProps, VirtualScroll } from '../../virtualScroll'

export default defineComponent({
  name: 'PSelect',
  props: selectProps,
  emits: [],
  setup(props: SelectProps, ctx) {
    const ns = useNamespace('select')
    const selectEl = ref<HTMLDivElement | null>(null)
    const overlayEl = ref()
    const overlayShow = ref(true)
    const hanldeItemClass = ({ row }: RenderItemProps<ISelectOption>) => {
      return {
        [ns.e('option')]: true,
        [ns.m('active')]: !!row[selectActiveKey]
      }
    }
    const onOutsideClick = () => (overlayShow.value = false)
    const optionStyles = computed(() => ({}))
    const renderSelectItem = ({ row }: RenderItemProps<ISelectOption>) => {
      return <div class={ns.e('option_content')}>{row.label}</div>
    }
    return () => {
      return (
        <div class="pui-select">
          <div
            class={ns.e('input')}
            ref={selectEl}
            onClick={(_) => (overlayShow.value = !overlayShow.value)}
          ></div>
          <Overlay
            v-model={overlayShow.value}
            position="bottom-start"
            origin={selectEl.value}
            offset={2}
            style={{ width: selectEl.value?.clientWidth + 'px' || 'unset', padding: '0' }}
            ref={overlayEl}
            onOutsideClick={onOutsideClick}
          >
            <VirtualScroll
              itemHeight={32}
              listData={props.options}
              itemClass={hanldeItemClass}
              itemStyle={optionStyles.value}
              style={{
                maxHeight: '256px'
              }}
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
