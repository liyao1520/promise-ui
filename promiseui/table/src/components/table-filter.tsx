import { FunnelSharp } from '@vicons/ionicons5'
import { computed, defineComponent, PropType, ref, watchEffect } from 'vue'

import { Button } from '../../../button'
import { Checkbox } from '../../../checkbox'
import { Dropdown, DropdownItem } from '../../../dropdown'
import { Icon } from '../../../icon'
import { useNamespace } from '../../../shared/hooks/use-namespace'
import useTableStore from '../hooks/use-table-store'
import { Filter, filterMethod, FilterOption } from '../table-types'

export default defineComponent({
  props: {
    filterOptions: {
      type: Array as PropType<FilterOption[]>,
      default: () => []
    },
    filterMethod: {
      type: Function as PropType<Filter>,
      required: true
    }
  },
  emits: ['submit'],
  setup(props, { emit }) {
    const ns = useNamespace('table')
    const { filterData } = useTableStore()
    const checkeds = ref<boolean[]>([])
    const isFilterActive = ref(false)
    const initial = () => Array.from<boolean>({ length: props.filterOptions.length }).fill(false)
    const dropdownRef = ref()
    watchEffect(() => {
      checkeds.value = initial()
    })

    const submit = () => {
      const checkedValues: (string | number)[] = []
      let noSelect = true
      for (let i = 0; i < checkeds.value.length; i++) {
        if (checkeds.value[i]) {
          checkedValues.push(props.filterOptions[i].value)
          noSelect = false
        }
      }
      // 没选择
      if (noSelect) {
        filterData(() => true)
        isFilterActive.value = false
      } else {
        const filterMethod: filterMethod = (item: any, index: number, arr: any[]) => {
          for (const value of checkedValues) {
            if (props.filterMethod(value, item, index, arr)) {
              return true
            }
          }
          return false
        }
        filterData(filterMethod)
        isFilterActive.value = true
      }
      dropdownRef.value.hide?.()
    }
    const reset = () => {
      checkeds.value = initial()
    }

    return () => {
      return (
        <Dropdown hideOnClick={false} trigger="click" ref={dropdownRef}>
          {{
            default: () => (
              <div class={[ns.e('filter'), isFilterActive.value && ns.em('filter', 'active')]}>
                <Icon component={FunnelSharp} />
              </div>
            ),
            dropdown: () => (
              <>
                {props.filterOptions.map((item, index) => (
                  <DropdownItem class={ns.e('filter-option')} key={item.value}>
                    <Checkbox
                      label={item.label}
                      value={item.value}
                      v-model={checkeds.value[index]}
                    />
                  </DropdownItem>
                ))}
                <div class={ns.e('filter-action')}>
                  <Button size="xs" type="info" fillMode="none" onClick={reset}>
                    重置
                  </Button>
                  <Button size="xs" type="primary" onClick={submit}>
                    确定
                  </Button>
                </div>
              </>
            )
          }}
        </Dropdown>
      )
    }
  }
})
