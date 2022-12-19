import SectionHeader from '../../components/SectionHeader';
import styles from './About.module.scss';
import AboutCard from './AboutCard';
import image1 from '../../assets/images/3.jpg';

const About = () => {
    const text1 = `Jesteśmy młodym zespołem z Krakowa złożonym z czwórki dobrych przyjaciół.
                Znamy się i tworzymy wspólnie od liceum. Do tej pory mamy nagrane cztery
                single, z czego trzy z nich zostały już opublikowane. Ponadto graliśmy
                liczne koncerty w Krakowie.`;
    return (
        <div className={styles.about}>
            <SectionHeader text='O nas' />
            <AboutCard src={image1} text={text1} variant='right' />
            <SectionHeader text='O nas' />
            <AboutCard src={image1} text={text1} variant='left' />
            <SectionHeader text='O nas' />
            <AboutCard src={image1} text={text1} variant='right' />
            <SectionHeader text='O nas' />
            <AboutCard src={image1} text={text1} variant='left' />
        </div>
    );
};

export default About;
