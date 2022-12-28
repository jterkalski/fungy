import styles from './ItemsBar.module.scss';
import Item from './Item';

const ItemsBar = ({ visible, onClick }) => {
    return (
        <div
            className={visible ? styles.itemBar : `${styles.itemBar} ${styles.hidden}`}
            onClick={onClick}
        >
            <Item text='MUZYKA' path='/music' />
            <Item text='O&nbsp;NAS' path='/about' />
            <Item text='KONTAKT' path='/contact' />
        </div>
    );
};

export default ItemsBar;
