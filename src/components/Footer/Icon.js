import styles from './Icon.module.scss';

const Icon = ({ href, src, alt }) => {
    return (
        <a className={styles.icon} href={href} target='_blank' rel='noopener noreferrer'>
            <img className={styles.iconImage} src={src} alt={alt} />
        </a>
    );
};

export default Icon;
