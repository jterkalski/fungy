import { Routes, Route } from 'react-router-dom';
import About from '../../pages/About/About';
import Home from '../../pages/Home/Home';
import Music from '../../pages/Music/Music';

const Body = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/music' element={<Music />} />
            <Route exact path='/about' element={<About />} />
        </Routes>
    );
};

export default Body;
