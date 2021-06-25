import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../../../Image_Icon/Image/8.jpg';
const HeaderMain = () => {
    return (
        <main style={{ height: '35rem' }} className='row d-flex align-items-center'>
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{ color: "dark" }}>COMPUTER ELECTRONIS  <br /> PRODUCTS</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum ullam minima facere, ex, vel incidunt saepe eos asperiores voluptates, laudantium recusandae. Deserunt iure nisi doloribus sed qui rerum, blanditiis dignissimos debitis quibusdam possimus a, accusamus exercitationem odio corrupti itaque earum obcaecati! Reiciendis impedit repellat iure similique dolorem eum explicabo!</p>
                <Link to='/services'>
                    <button className='btn btn-info'>More Details</button>
                </Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img style={{ borderRadius: "20px" }} src={headerImg} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;