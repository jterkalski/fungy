import styles from './Home.module.scss';
import Picture from './Picture';

const Home = () => {
    return (
        <div className={styles.home}>
            <Picture />
        </div>
    );
};

export default Home;
