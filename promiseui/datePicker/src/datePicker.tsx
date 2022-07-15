import dayjs from 'dayjs'

import { computed, defineComponent, KeepAlive, nextTick, onMounted, ref } from 'vue'
import { Input } from '../../input'
import { Overlay } from '../../overlay'

import DatePickerDay from './datePicker-day'

import { datePickerProps, DatePickerProps } from './datePicker-types'

import useDayjsInit from './hooks/use-dayjs-init'

import './index.scss'

export default defineComponent({
  name: 'PDatePicker',
  props: datePickerProps,
  emits: ['update:modelValue'],
  setup(props: DatePickerProps, { emit }) {
    //--加载dayjs中文包以及插件----
    useDayjsInit()
    //-----------
    const inputWapperRef = ref<HTMLInputElement>()
    const showOverlay = ref(false)
    const inputValue = computed(() => {
      if (Array.isArray(props.modelValue)) {
        //
        return '0'
      } else {
        return props.modelValue?.format('YYYY-MM-DD')
      }
    })
    const onInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value
      const day = dayjs(value, 'YYYY-MM-DD', true)
      if (day.isValid()) {
        emit('update:modelValue', day)
      }
    }
    return () => (
      <div>
        <Input
          wave={false}
          ref={(el) => (inputWapperRef.value = (el as any).wapper)}
          onFocus={() => (showOverlay.value = true)}
          modelValue={inputValue.value}
          onInput={onInput}
        />
        <KeepAlive>
          <Overlay
            origin={inputWapperRef.value}
            v-model={showOverlay.value}
            offset={0}
            style={{ padding: 0 }}
            position={'bottom-start'}
            onOutsideClick={() => (showOverlay.value = false)}
            memo
          >
            <DatePickerDay
              activeDay={props.modelValue}
              onChange={(day) => {
                emit('update:modelValue', day)
                // 别消失的太快
                setTimeout(() => (showOverlay.value = false), 88)
              }}
            />
          </Overlay>
        </KeepAlive>
      </div>
    )
  }
})
