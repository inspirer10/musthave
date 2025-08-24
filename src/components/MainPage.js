import AboutCompany from './AboutCompany/AboutCompany';
import Bag from './Bag/Bag';
import SummerCollection from './SummerCollection/SummerCollection';
import Categories from './Categories/Categories';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Instagram from './Instagram/Instagram';

function MainPage() {
    return (
        <>
            <Header />
            <Bag />
            <SummerCollection />
            <Categories />
            <AboutCompany />
            <Instagram />
            <Footer />
        </>
    );
}

export default MainPage;
