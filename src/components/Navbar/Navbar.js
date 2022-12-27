import { useState } from 'react';
import styles from './Navbar.module.scss';
import ItemsBar from './ItemsBar';
import Spacer from './Spacer';
import Title from './Title';
import MenuButton from './MenuButton';

const Navbar = ({ active }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const handleMobileMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className={active ? `${styles.navbar} ${styles.active}` : styles.navbar}>
            <Title />
            <Spacer />
            <ItemsBar visible={menuVisible} />
            <MenuButton onClick={handleMobileMenu} />
        </div>
    );
};

export default Navbar;
