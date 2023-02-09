import './contactspage.css'
import Contacts from "../../components/Contacts/Contacts";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";

export default function ContactsPage() {
    return (
        <>
            <Topbar/>
            <div className='contactspage'>
                <Contacts/>
            </div>
            <Footer/>
        </>

    )
}
