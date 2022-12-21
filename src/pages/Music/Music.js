import SectionHeader from '../../components/SectionHeader';
import Iframe from './Iframe';
import styles from './Music.module.scss';

const Music = () => {
    return (
        <div className={styles.music}>
            <div className={styles.musicSection}>
                <SectionHeader text='Kolejowy' />
                <div className={styles.musicSectionBody}>
                    <Iframe
                        src='https://www.youtube.com/embed/zd0nQF5VRjY'
                        title='Kolejowy'
                    />
                    <div className={styles.musicSectionText}>
                        Z dumą przedstawiamy Wam czwarty i zarazem ostatni singiel z
                        pierwszej sesji nagraniowej, Kolejowy! premiera ta stanowi naszą
                        wymarzoną szansę na dołączenie do prestiżowego klubu piosenek o
                        tematyce kolejowej i konkurowanie o względy fanów razem z tak
                        kultowymi dziełami polskiego przemysłu muzycznego jak "Jedzie
                        pociąg z daleka", "Wsiąść do pociągu byle jakiego", czy też "Hymn
                        kolejarzy wąskotorowych". bardziej niż serdecznie zapraszamy Was
                        do napawania się tą chwilą z nami.
                    </div>
                </div>
            </div>
            <div className={styles.musicSection}>
                <SectionHeader text='Pustynny' />
                <div className={styles.musicSectionBody}>
                    <Iframe
                        src='https://www.youtube.com/embed/YcWJBDf0nf0'
                        title='Pustynny'
                    />
                </div>
            </div>
            <div className={styles.musicSection}>
                <SectionHeader text='Niesamowita Wilgoć' />
                <div className={styles.musicSectionBody}>
                    <Iframe
                        src='https://www.youtube.com/embed/TinQJtPcLEs'
                        title='Niesamowita Wilgoć'
                    />
                </div>
            </div>
            <div className={styles.musicSection}>
                <SectionHeader text='Whaling' />
                <div className={styles.musicSectionBody}>
                    <Iframe
                        src='https://www.youtube.com/embed/klLGTDuSTt8'
                        title='Whaling'
                    />
                </div>
            </div>
        </div>
    );
};

export default Music;
