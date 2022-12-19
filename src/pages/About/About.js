import SectionHeader from '../../components/SectionHeader';
import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.about}>
            <SectionHeader text='O nas' />
        </div>
    );
};

export default About;
