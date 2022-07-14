import { Dayjs } from 'dayjs'

import { computed, defineComponent, inject, onMounted, provide, ref } from 'vue'
import { Input } from '../../input'
import { Overlay } from '../../overlay'
import { Select } from '../../select'
import { useNamespace } from '../../shared/hooks/use-namespace'
import DatePickerDay from './datePicker-day'
import DatePickerHeader from './datePicker-header'
import { datePickContextKey, datePickerProps, DatePickerProps } from './datePicker-types'
import useDayList from './hooks/use-day-list'

import useSelectCurrentDate from './hooks/use-select-current-date'
import useTogglePage from './hooks/use-toggle-page'

import './index.scss'

export default defineComponent({
  name: 'PDatePicker',
  props: datePickerProps,
  emits: ['update:modelValue'],
  setup(props: DatePickerProps, { emit }) {
    const inputWapperRef = ref<HTMLInputElement>()
    const showOverlay = ref(false)
    onMounted(() => {})
    return () => (
      <div>
        <Input
          wave={false}
          ref={(el) => (inputWapperRef.value = (el as any).wapper)}
          onFocus={() => (showOverlay.value = true)}
        />
        <Overlay
          origin={inputWapperRef.value}
          v-model={showOverlay.value}
          offset={0}
          position={'bottom-start'}
          onOutsideClick={() => (showOverlay.value = false)}
        >
          <DatePickerDay />
        </Overlay>
      </div>
    )
  }
})
