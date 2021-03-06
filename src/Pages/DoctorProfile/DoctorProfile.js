import React, { useEffect, useState } from 'react';
import './DoctorProfile.css';
import { useHistory, useParams } from 'react-router-dom';
import alldata from '../../Fakedata/data.json';
import { FcCurrencyExchange } from "react-icons/fc";
import { FaLocationArrow, FaStarOfDavid, FaPlusSquare } from "react-icons/fa";
import Button from 'react-bootstrap/Button'

const DoctorProfile = (props) => {
    const [profile, setProfile] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const currentprofile = alldata.find(data => data.id === id);
        setProfile(currentprofile);
    }, [])
    const { name, title, image, specialities, address, rating, price } = profile;
    const handelBooking = () => {

        history.push('/booking-form')
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 p-4">
                    <div className="row bg-card">
                        <div className="col-md-4 col-lg-4 col-4 text-center custom-image">
                            <img src={image} alt="" className='img-fluid' />

                        </div>
                        <div className="col-md-6 col-lg-6 col-6">
                            <h3>{name}</h3>
                            <h5>{title}</h5>
                            <p><FaPlusSquare />{specialities}</p>
                            <p><FaStarOfDavid /> {rating}</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-2">
                            <p> <FcCurrencyExchange /> {price} USD</p>
                            <p><FaLocationArrow />  {address}</p>
                            <Button variant="primary" className='btn btn-custom-book' onClick={handelBooking}>BOOK APPOINTMENT</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;