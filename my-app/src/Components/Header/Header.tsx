import BurgerMenu from "../../UI-components/BurgerMenu/BurgerMenu";
import style from './Header.module.scss';

const Header = () => {
    return (
        <div className = {style.header}>
            <BurgerMenu />
        </div>
    )
}
export default Header