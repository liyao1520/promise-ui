import { emit } from 'process'
import { computed, defineComponent, ref, watch } from 'vue'
import { Overlay } from '../../overlay'

import Wave from '../../shared/components/wave'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { RenderItemProps, VirtualScroll } from '../../virtualScroll'
import { autoCompleteProps, AutoCompleteProps, IAutoCompleteOption } from './autoComplete-types'

import './index.scss'
const ITEM_HEIGHT = 32
export default defineComponent({
  name: 'PAutoComplete',
  props: autoCompleteProps,
  emits: ['update:modelValue'],
  setup(props: AutoCompleteProps, ctx) {
    const ns = useNamespace('auto-complete')
    const optionListShow = ref(false)
    const overlayRef = ref()
    const virtualListRef = ref()

    const selectRef = ref<HTMLDivElement | null>(null)
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m(props.size)]: true,
      [ns.m('focus')]: optionListShow.value
    }))
    const onOutsideClick = () => {
      optionListShow.value = false
    }
    const handleOptionClick = (e: Event, { row }: RenderItemProps<IAutoCompleteOption>) => {
      ctx.emit('update:modelValue', row.value)
      optionListShow.value = false
    }

    const renderOptionItem = ({ row }: RenderItemProps<IAutoCompleteOption>) => (
      <div class={ns.e('option-content')}>{row.label}</div>
    )

    return () => (
      <Wave disabled>
        <div class={classes.value} ref={selectRef}>
          <input
            type="text"
            class={ns.e('input')}
            value={props.modelValue}
            placeholder={props.placeholder}
            onInput={(e) => ctx.emit('update:modelValue', (e.target as HTMLInputElement).value)}
            onFocus={() => (optionListShow.value = true)}
          />
          <Overlay
            v-model={optionListShow.value}
            position="bottom-start"
            origin={selectRef.value}
            offset={2}
            style={{ width: selectRef.value?.clientWidth + 'px' || 'unset', padding: '0' }}
            ref={overlayRef}
            onOutsideClick={onOutsideClick}
            flip
          >
            {props.modelValue && (
              <VirtualScroll
                ref={virtualListRef}
                keepAlive
                itemKey="value"
                itemHeight={32}
                listData={props.options}
                itemClass={ns.e('option')}
                onItemClick={handleOptionClick}
                wrapHeight={Math.min(
                  props.maxOptionCount * ITEM_HEIGHT,
                  props.options.length * ITEM_HEIGHT
                )}
              >
                {{
                  item: renderOptionItem
                }}
              </VirtualScroll>
            )}
          </Overlay>
        </div>
      </Wave>
    )
  }
})
