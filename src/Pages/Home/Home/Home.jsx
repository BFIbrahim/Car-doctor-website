import About from "../About/About";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import ContactBar from "../contact bar/ContactBar";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <ContactBar></ContactBar>
        </div>
    );
};

export default Home;