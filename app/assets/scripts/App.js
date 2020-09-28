import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'

let mobleMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept()
}
