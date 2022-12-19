import { Routes, Route } from 'react-router-dom';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import Music from '../../pages/Music/Music';
import Footer from '../Footer/Footer';
import styles from './Body.module.scss';

const Body = () => {
    return (
        <div className={styles.body}>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/music' element={<Music />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact' element={<Contact />} />
            </Routes>
        </div>
    );
};

export default Body;
