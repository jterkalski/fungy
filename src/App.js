import styles from './App.module.scss';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    return (
        <div>
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
};

export default App;
