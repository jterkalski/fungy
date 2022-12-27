import styles from './MenuButton.module.scss';
import menuIcon from '../../assets/icons/menu-icon.svg';

const MenuButton = ({ onClick }) => {
    return (
        <button className={styles.menuButton} onClick={onClick}>
            <img className={styles.menuIcon} src={menuIcon} alt='menu button' />
        </button>
    );
};

export default MenuButton;
