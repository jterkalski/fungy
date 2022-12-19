import styles from './FooterText.module.scss';

const FooterText = () => {
    const header = 'Bądź na bieżąco!';
    const description =
        'Zaobserwuj nasz profil na mediach społecznościowych i platformach streamingowych';
    return (
        <div className={styles.text}>
            <div className={styles.header}>{header}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};

export default FooterText;
