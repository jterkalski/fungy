import { NavLink } from 'react-router-dom';
import styles from './Item.module.scss';

const Item = ({ text, path }) => {
    return (
        <NavLink
            className={styles.item}
            to={path}
            style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
            })}
        >
            {text}
        </NavLink>
    );
};

export default Item;
