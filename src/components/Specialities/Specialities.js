import React, { useEffect, useState } from 'react';
import ShowSpecialities from '../ShowSpecialities/ShowSpecialities';
import './Specialities.css'
const Specialities = () => {
    const [specialities, setSpecialities] = useState([]);
    useEffect(() => {
        fetch('../../Fakedata/data.json')
            .then(res => res.json())
            .then(data => setSpecialities(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 text-center" id='Specialities'>
                    <h1>Browse by Specialities</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div className="row">
                {
                    specialities.slice(0, 8).map(specialities => <ShowSpecialities data={specialities} key={specialities.id}></ShowSpecialities>)
                }
            </div>
        </div>
    );
};

export default Specialities;