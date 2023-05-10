import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import History from '../../controller/history';
import Style from '../../style';
import GlobalStyle from '../styles/global';
import HomePage from '../screens/homepage';


function RoutesPage() {
    return (
        <>
            <Style/>
            <GlobalStyle />
            <Router history={History}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/homepage' element={<HomePage />} />
                    <Route path='/blog' element={<HomePage />} />
                </Routes>
            </Router>
        </>
    )
}

export default RoutesPage;