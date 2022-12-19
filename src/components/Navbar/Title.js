import styles from './Title.module.scss';
import { NavLink } from 'react-router-dom';

const Title = () => {
    return (
        <NavLink className={styles.title} to='/'>
            FUNGY
        </NavLink>
    );
};

export default Title;
