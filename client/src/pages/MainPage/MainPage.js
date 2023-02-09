import './mainpage.css'
import Topbar from "../../components/Topbar/Topbar";
import Title from "../../components/Title/Title";
import Services from "../../components/Services/Services";
import Achievements from "../../components/Achievements/Achievements";
import About from "../../components/About/About";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";

export default function MainPage() {

    return (
        <>
            <Topbar/>
            <Title/>
            <Services/>
            <Achievements/>
            <About/>
            <Contacts/>
            <Footer/>
        </>
    )
}
