import styles from './App.module.scss';
import Body from './components/Body/Body';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
    return (
        <div className={styles.app}>
            <Router>
                <Navbar />
                <Body />
            </Router>
        </div>
    );
};

export default App;
