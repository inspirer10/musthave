import Summer from './SummerCollection';
import Categories from './Categories';
import AboutCompany from './AboutCompany';
import Instagram from './Instagram';
import Header from './Header';
import Footer from './Footer';
import Bag from './Bag/Bag.js';

function MainPage() {
    return (
        <>
            <Header />
            <Bag />
            <Summer />
            <Categories />
            <AboutCompany />
            <Instagram />
            <Footer />
        </>
    );
}

export default MainPage;
