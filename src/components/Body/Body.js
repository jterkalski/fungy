import { Routes, Route } from 'react-router-dom';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import Music from '../../pages/Music/Music';
import Footer from '../Footer/Footer';
import styles from './Body.module.scss';
import { forwardRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Body = ({ setLocation }, ref) => {
    const location = useLocation();

    useEffect(() => {
        setLocation(location);
    }, [location.pathname]);

    return (
        <div className={styles.body} ref={ref}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/music' element={<Music />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
};

const forwardedBody = forwardRef(Body);

export default forwardedBody;
