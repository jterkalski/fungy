import styles from './SectionHeader.module.scss';

const SectionHeader = ({ text }) => {
    return (
        <div className={styles.sectionHeader}>
            <div className={styles.line}></div>
            <div className={styles.text}>{text}</div>
        </div>
    );
};

export default SectionHeader;
