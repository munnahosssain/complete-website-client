import React from 'react';
import Blogs from '../../MainPage/Blogs/Blogs';
import BusinessInfo from '../../MainPage/BusinessInfo/BusinessInfo';
import Contact from '../../MainPage/Contact/Contact';
import Header from '../../MainPage/Header/Header';
import Services from '../../MainPage/Services/Services';
import Testimonial from '../../MainPage/Testimonial/Testimonial';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <BusinessInfo />
            <Services />
            <Testimonial />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;