import Theme from './theme'
import light from './themes/light'
import dark from './themes/dark'

const theme = new Theme()

theme.register('light', light)
theme.register('dark', dark)
theme.use('light')
export default theme
