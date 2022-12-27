import styles from './ItemsBar.module.scss';
import Item from './Item';

const ItemsBar = ({ visible }) => {
    return (
        <div className={visible ? styles.itemBar : `${styles.itemBar} ${styles.hidden}`}>
            <Item text='MUZYKA' path='/music' />
            <Item text='O NAS' path='/about' />
            <Item text='KONTAKT' path='/contact' />
        </div>
    );
};

export default ItemsBar;
