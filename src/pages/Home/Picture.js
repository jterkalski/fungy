import styles from './Picture.module.scss';
import image from '../../assets/images/2.jpg';

const Picture = () => {
    return (
        <div className={styles.picture}>
            <div className={styles.background}></div>
            <img src={image} className={styles.image} />
        </div>
    );
};

export default Picture;
