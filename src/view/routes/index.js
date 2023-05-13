import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import History from '../../controller/history';
import Style from '../../style';
import GlobalStyle from '../styles/global';
import HomePage from '../screens/homepage';
import Content from '../screens/content';


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
                    <Route path='/content/:id' element={<Content />} />

                </Routes>
            </Router>
        </>
    )
}

export default RoutesPage;