import styles from './ItemsBar.module.scss';
import Item from './Item';

const ItemsBar = () => {
    return (
        <div className={styles.itemBar}>
            <Item text='HOME' path='/' />
            <Item text='MUSIC' path='/music' />
            <Item text='ABOUT' path='/about' />
        </div>
    );
};

export default ItemsBar;
