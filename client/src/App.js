import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from "./pages/MainPage/MainPage";
import LegalPage from "./pages/LegalPage/LegalPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import ConsumersPage from "./pages/ConsumersPage/ConsumersPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import MetersPage from "./pages/MetersPage/MetersPage";
import SingleNewsPost from "./pages/SingleNewsPost/SingleNewsPost";
import LoginPage from "./pages/LoginPage/LoginPage";
import {useContext} from "react";
import {Context} from "./redux/Context";
import AdminBoard from "./pages/AdminBoard/AdminBoard";
import StandartsPage from "./pages/StandartsPage/StandartsPage";

export default function App() {
    const {token} = useContext(Context)
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/consumers' element={<ConsumersPage/>}/>
                    <Route path='/legal' element={<LegalPage/>}/>
                    <Route path='/contacts' element={<ContactsPage/>}/>
                    <Route path='/news' element={<NewsPage/>}/>
                    <Route path='/news/:id' element={<SingleNewsPost/>}/>
                    <Route path='/meters' element={<MetersPage/>}/>
                    <Route path='/standarts' element={<StandartsPage/>}/>
                    <Route path='/login' element={token ? <AdminBoard/> : <LoginPage/>}/>
                    <Route path='/board' element={token ? <AdminBoard/> : <LoginPage/>}/>
                    <Route path="*" element={<MainPage/>}
                    />
                </Routes>
            </Router>

        </>
    )
}
