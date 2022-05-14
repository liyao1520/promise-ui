import Theme from './theme'
import light from './themes/light'
import dart from './themes/dart'
const theme = new Theme()

theme.register('light', light)
theme.register('dart', dart)

export default theme
