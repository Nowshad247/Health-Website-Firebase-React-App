import React, { useEffect, useState } from 'react';
import DoctorsCard from '../DoctorsCard/DoctorsCard';

const DoctorList = () => {
    const [doctors, setdoctors] = useState([]);
    useEffect(() => {
        fetch('../../Fakedata/data.json')
            .then(res => res.json())
            .then(data => setdoctors(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 text-center" id='Doctor'>
                    <h1>Book Our Best Doctor
                    </h1>
                    <p>
                        Discover the best doctors, clinic & hospital the city nearest to you.
                    </p>
                </div>
            </div>
            <div className="row">
                {
                    doctors.slice(0, 8).map(doctor => <DoctorsCard key={doctor.id} data={doctor}></DoctorsCard>)
                }
            </div>
        </div>
    );
};

export default DoctorList;