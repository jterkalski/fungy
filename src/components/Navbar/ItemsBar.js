import styles from './ItemsBar.module.scss';
import Item from './Item';

const ItemsBar = () => {
    return (
        <div className={styles.itemBar}>
            <Item text='MUZYKA' path='/music' />
            <Item text='O NAS' path='/about' />
            <Item text='KONTAKT' path='/contact' />
        </div>
    );
};

export default ItemsBar;
