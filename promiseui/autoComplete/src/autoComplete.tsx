import { defineComponent, nextTick, ref, shallowRef, computed } from 'vue'
import useFormItem from '../../form/src/hooks/use-form-item'
import useFormSize from '../../form/src/hooks/use-form-size'
import { Input } from '../../input'
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

    const inputRef = shallowRef()

    const formSize = useFormSize()
    const inputSize = computed(() => props.size || formSize.value || 'md')

    const onOutsideClick = () => {
      optionListShow.value = false
    }

    const { triggerValidate } = useFormItem()

    const handleOptionClick = (e: Event, { row }: RenderItemProps<IAutoCompleteOption>) => {
      ctx.emit('update:modelValue', row.value)
      optionListShow.value = false
      nextTick(() => triggerValidate('blur'))
    }

    const renderOptionItem = (itemProps: RenderItemProps<IAutoCompleteOption>) => {
      const { row } = itemProps
      return props.renderLabel ? (
        props.renderLabel(itemProps)
      ) : (
        <div class={ns.e('option_content')}>{row.label}</div>
      )
    }

    return () => (
      <>
        <Wave disabled>
          <Input
            ref={(target: any) => {
              if (target.input && !inputRef.value) {
                inputRef.value = target.wapper
              }
            }}
            value={props.modelValue}
            placeholder={props.placeholder}
            size={inputSize.value}
            onInput={(e: Event) => {
              ctx.emit('update:modelValue', (e.target as HTMLInputElement).value)
            }}
            disabled={!!props.disabled}
            onFocus={() => {
              optionListShow.value = true
            }}
          />
        </Wave>
        <Overlay
          v-model={optionListShow.value}
          position="bottom-start"
          origin={inputRef.value}
          offset={2}
          style={{ width: inputRef.value?.clientWidth + 'px' || 'unset', padding: '0' }}
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
      </>
    )
  }
})
