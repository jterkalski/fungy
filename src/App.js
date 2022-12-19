import './App.module.scss';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Body />
                <Footer />
            </Router>
        </div>
    );
};

export default App;
