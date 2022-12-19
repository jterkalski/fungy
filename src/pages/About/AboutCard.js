import styles from './AboutCard.module.scss';

const AboutCard = ({ src, text, variant }) => {
    if (variant == 'right') {
        return (
            <div className={styles.aboutCard}>
                <div className={styles.cardText}>{text}</div>
                <img
                    src={src}
                    className={styles.cardImage}
                    style={{ boxShadow: '3px 5px 10px black' }}
                />
            </div>
        );
    } else {
        return (
            <div className={styles.aboutCard}>
                <img
                    src={src}
                    className={styles.cardImage}
                    style={{ boxShadow: '-3px 5px 10px black' }}
                />
                <div className={styles.cardText}>{text}</div>
            </div>
        );
    }
};

export default AboutCard;
