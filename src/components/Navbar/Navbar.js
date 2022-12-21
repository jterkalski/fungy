import styles from './Navbar.module.scss';
import ItemsBar from './ItemsBar';
import Spacer from './Spacer';
import Title from './Title';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Title />
            <Spacer />
            <ItemsBar />
        </div>
    );
};

export default Navbar;
