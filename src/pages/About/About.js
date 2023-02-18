import SectionHeader from '../../components/SectionHeader';
import styles from './About.module.scss';
import AboutCard from './AboutCard';
import image1 from '../../assets/images/about/1.jpg';
import image2 from '../../assets/images/about/2.jpg';
import image3 from '../../assets/images/about/3.jpg';
import image4 from '../../assets/images/about/4.jpg';

const About = () => {
    const text1 = `Jesteśmy młodym zespołem z Krakowa złożonym z czwórki dobrych przyjaciół.
                Znamy się i tworzymy wspólnie od liceum.`;
    const text2 = `Gramy własną muzykę w klimacie alternatywnego rock'a. Mega marzymy, żeby nasza muzyka leciała kiedyś w radio.`;
    const text3 = `Do tej pory mamy nagrane cztery
                single i pracujemy nad albumem składającym się z 6 utworów. Ponadto graliśmy
                liczne koncerty w Krakowie.`;
    const text4 = `Życie zespołowe to dla nas nie tylko opowiadanie nieśmiesznych żartów i dorywcze grywanie w niedziele o 17:00, to także wszelkie przedsięwzięcia audiowizualne które realizujemy wspólnie z naszymi przyjaciółmi.`;

    return (
        <div className={styles.about}>
            <SectionHeader text='O nas' />
            <AboutCard src={image1} text={text1} variant='right' />
            <AboutCard src={image2} text={text2} variant='left' />
            <AboutCard src={image3} text={text3} variant='right' />
            <AboutCard src={image4} text={text4} variant='left' />
        </div>
    );
};

export default About;
