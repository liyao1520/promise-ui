<template>
  <p-table :data-source="dataSource" :columns="columns" table-layout="fixed" />
</template>

<script setup>
  import { defineComponent, h, nextTick, reactive, ref } from 'vue'
  import { Input } from '../promiseui/input'
  const ShowOrEdit = defineComponent({
    props: {
      value: [String, Number],
      onUpdateValue: [Function, Array]
    },
    setup(props) {
      const isEdit = ref(false)
      const inputRef = ref(null)
      const inputValue = ref(props.value)
      function handleOnClick() {
        isEdit.value = true
        nextTick(() => {
          inputRef.value.focus()
        })
      }
      function handleChange() {
        props.onUpdateValue(inputValue.value)
        isEdit.value = false
      }
      return () =>
        h(
          'div',
          {
            onClick: handleOnClick,
            style: 'height:32px;line-height:32px;text-indent:10px'
          },
          isEdit.value
            ? h(Input, {
                ref: inputRef,
                value: inputValue.value,
                'onUpdate:modelValue': (v) => {
                  inputValue.value = v
                },
                onChange: handleChange,
                onBlur: handleChange
              })
            : props.value
        )
    }
  })
  const dataSource = reactive([
    {
      song: 'All Too Well',
      singer: 'Taylor Swift',
      album: '《Red》',
      duration: 329752
    },
    {
      song: 'Back To December',
      singer: 'Taylor Swift',
      album: '《Back to December》',
      duration: 363859
    },
    {
      song: 'New RomanticsSQ',
      singer: 'Taylor Swift',
      album: '《1989 (Deluxe)》',
      duration: 230466
    },
    {
      song: 'Blueming',
      singer: 'IU',
      album: '《Love poem》',
      duration: 217053
    },
    {
      song: 'Celebrity',
      singer: 'IU',
      album: '《Celebrity》',
      duration: 195546
    }
  ])
  const columns = [
    {
      dataIndex: 'song',
      title: '歌曲',
      render(row, rowIndex) {
        return h(ShowOrEdit, {
          value: row.song,
          onUpdateValue(v) {
            dataSource[rowIndex].song = v
          }
        })
      }
    },
    {
      dataIndex: 'singer',
      title: '歌手',
      render(row, rowIndex) {
        return h(ShowOrEdit, {
          value: row.singer,
          onUpdateValue(v) {
            dataSource[rowIndex].singer = v
          }
        })
      },
      filter(value, row) {
        return row.singer === value
      },
      filterOptions: [
        {
          label: 'IU',
          value: 'IU'
        },
        {
          label: 'Taylor Swift',
          value: 'Taylor Swift'
        }
      ]
    },
    {
      dataIndex: 'album',
      render(row, rowIndex) {
        return h(ShowOrEdit, {
          value: row.album,
          onUpdateValue(v) {
            dataSource[rowIndex].album = v
          }
        })
      },
      title: '专辑'
    },
    {
      dataIndex: 'duration',
      title: '时长',
      render(row) {
        const t = row.duration / 1000
        const s = parseInt(t % 60)
        return `${parseInt(t / 60)}:${s >= 10 ? s : '0' + s}`
      },
      sorter(row1, row2) {
        return row1.duration - row2.duration
      }
    }
  ]
</script>
