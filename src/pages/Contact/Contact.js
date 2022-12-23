import SectionHeader from '../../components/SectionHeader';
import styles from './Contact.module.scss';
import { email, facebook, instagram } from '../../assets/data/contactInfo';
import emailIcon from '../../assets/icons/email-contact-icon.svg';
import facbookIcon from '../../assets/icons/facebook-contact-icon.svg';
import instagramIcon from '../../assets/icons/instagram-contact-icon.svg';

const Contact = () => {
    return (
        <div className={styles.contact}>
            <SectionHeader text='Skontaktuj się z nami' />
            <div className={styles.info}>
                <div className={styles.email}>
                    <img src={emailIcon} alt='email-icon' />
                    <div>{email}</div>
                </div>
                <div className={styles.facebook}>
                    <a href={facebook} target='_blank' rel='noopener noreferrer'>
                        <img src={facbookIcon} alt='facebook-logo' />
                        <div>facebook.com/fungy_band</div>
                    </a>
                </div>
                <div className={styles.instagram}>
                    <a href={instagram} target='_blank' rel='noopener noreferrer'>
                        <img src={instagramIcon} alt='instagram-logo' />
                        <div>instagram.com/fungy_band</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
