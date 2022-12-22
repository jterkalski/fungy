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
                        <span>
                            Czwarty i zarazem ostatni singiel z pierwszej sesji
                            nagraniowej, Kolejowy!
                        </span>
                        <span>
                            Premiera ta stanowi naszą wymarzoną szansę na dołączenie do
                            prestiżowego klubu piosenek o tematyce kolejowej i
                            konkurowanie o względy fanów razem z tak kultowymi dziełami
                            polskiego przemysłu muzycznego jak "Jedzie pociąg z daleka",
                            "Wsiąść do pociągu byle jakiego", czy też "Hymn kolejarzy
                            wąskotorowych".
                        </span>
                        <span>
                            Bardziej niż serdecznie zapraszamy Was do napawania się tą
                            chwilą z nami.
                        </span>
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
                    <div className={styles.musicSectionText}>
                        <span>
                            Oglądając ten klip możecie poczuć się, jakbyście byli tam z
                            nami, na piaszczystych wydmach ziemi olkuskiej.
                        </span>
                        <span>
                            Wszyscy razem na pustyni jak jedna, szczęśliwa, fungusowa
                            rodzina, ponad wszelkimi podziałami. Otoczeni ciepełkiem przez
                            kolegów, czując piasek pod stopami i ciepły samum we włosach,
                            podczas gdy Wasze nozdrza wypełnia swąd wysuszonego
                            marokańskiego tytoniu popalanego przez przywdzianego w
                            poplamioną galabiję merchanta.
                        </span>
                        <span>Czujecie ten klimat, cnie?</span>
                    </div>
                </div>
            </div>
            <div className={styles.musicSection}>
                <SectionHeader text='Niesamowita Wilgoć' />
                <div className={styles.musicSectionBody}>
                    <Iframe
                        src='https://www.youtube.com/embed/TinQJtPcLEs'
                        title='Niesamowita Wilgoć'
                    />
                    <div className={styles.musicSectionText}>
                        <span>
                            Wilgotne korzenie tego singla sięgają 2016 roku, kiedy to
                            naszą uwagę zwrócił nadzwyczajny poziom wilgotności w
                            pomieszczeniu, w którym zwykliśmy odbywać próby naszego
                            zespołu.
                        </span>
                        <span>
                            Posiada on szczególne miejsce w naszych sercach, a teraz z
                            niesamowitą radością udostępniamy go Wam, ażeby cieszył,
                            krzepił i nawilżał.
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.musicSection}>
                <SectionHeader text='Whaling' />
                <div className={styles.musicSectionBody}>
                    <Iframe
                        src='https://www.youtube.com/embed/klLGTDuSTt8'
                        title='Whaling'
                    />
                    <div className={styles.musicSectionText}>
                        Zespół Fungy z dumą prezentuje:
                        <span>
                            Opowieść o starym poławiaczu wielorybów bazująca na
                            autentycznych rodzinnych przekazach ustnych jednego z członków
                            zespołu, okraszona przejmującą aranżacją muzyczną
                            uzewnętrzniającą ukryte pragnienia prowadzenia życia wśród
                            bezkresnych fal oceanu i powrotu do ukochanej osoby.
                        </span>
                        <span>
                            Historia człowieka zmuszonego do rywalizacji z żywiołem,
                            tragedia zbliżonych na skraj wyginięcia potężnych morskich
                            bestii i brutalnego losu, który zantagonizował te dwa jakże
                            odmienne światy..
                        </span>
                        Tak naprawdę to nie, wymyśliliśmy ten kawałek na poczekaniu w
                        transporcie miejskim, ale wciąż go kochamy. Teraz udostępniamy go
                        Wam.
                        <span>- Wasz fungus</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Music;
