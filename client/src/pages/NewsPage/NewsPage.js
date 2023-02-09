import './newspage.css'
import News from "../../components/News/News";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";

export default function NewsPage() {
    return (
        <>
            <Topbar/>
            <News/>
            <Footer/>
        </>
    )
}
