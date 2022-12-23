import styles from './App.module.scss';
import Body from './components/Body/Body';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

const App = () => {
    const [location, setLocation] = useState();
    const [isActive, setIsActive] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const bodyRef = useRef(null);

    const handleScroll = () => {
        const position = bodyRef.current.scrollTop;
        setScrollPosition(position);
    };

    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
    };

    useEffect(() => {
        bodyRef.current.addEventListener('scroll', handleScroll, { passive: true });
        if (scrollPosition > 10) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }

        return () => {
            bodyRef.current.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    useEffect(() => {
        bodyRef.current.scrollTo(0, 0);
    }, [location]);

    return (
        <div className={styles.app}>
            <Router>
                <Navbar active={isActive} />
                <Body ref={bodyRef} setLocation={handleLocationChange} />
            </Router>
        </div>
    );
};

export default App;
