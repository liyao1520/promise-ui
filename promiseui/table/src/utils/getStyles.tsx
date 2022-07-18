import { CSSProperties } from 'vue'

export const getRowStyles = (
  styles:
    | string
    | CSSProperties
    | ((row: object, index: number) => string | CSSProperties),
  row: object,
  index: number
) => {
  if (typeof styles === 'function') {
    return styles(row, index)
  } else {
    return styles
  }
}
export const getRowClassName = (
  className: string | ((row: object, index: number) => string),
  row: object,
  index: number
) => {
  if (typeof className === 'function') {
    return className(row, index)
  } else {
    return className
  }
}

export const getColStyles = (
  styles: (
    row: object,
    col: object,
    rowIndex: number,
    colIndex: number
  ) => string | CSSProperties,
  row: object,
  col: object,
  rowIndex: number,
  colIndex: number
) => {
  if (typeof styles === 'function') {
    return styles(row, col, rowIndex, colIndex)
  } else {
    return styles
  }
}
export const getColClassName = (
  className:
    | string
    | ((
        row: object,
        col: object,
        rowIndex: number,
        colIndex: number
      ) => string),
  row: object,
  col: object,
  rowIndex: number,
  colIndex: number
) => {
  if (typeof className === 'function') {
    return className(row, col, rowIndex, colIndex)
  } else {
    return className
  }
}
