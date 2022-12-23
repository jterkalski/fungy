import styles from './Navbar.module.scss';
import ItemsBar from './ItemsBar';
import Spacer from './Spacer';
import Title from './Title';

const Navbar = ({ active }) => {
    return (
        <div className={active ? `${styles.navbar} ${styles.active}` : styles.navbar}>
            <Title />
            <Spacer />
            <ItemsBar />
        </div>
    );
};

export default Navbar;
