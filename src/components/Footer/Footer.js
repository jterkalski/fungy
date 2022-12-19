import styles from './Footer.module.scss';
import FooterText from './FooterText';
import Icons from './Icons';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <FooterText />
            <Icons />
        </div>
    );
};

export default Footer;
