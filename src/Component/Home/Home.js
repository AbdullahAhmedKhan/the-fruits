import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFruits from '../../hooks/useFruits';
import Fruit from '../Inventory/Fruit';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Banner from './Banner';

const Home = () => {
    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();
    const handleManage = () => {
        navigate('/inventory');
    }

    useEffect(() => {
        fetch('https://afternoon-tundra-03070.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])

    return (

        <div className=''>
            <Banner></Banner>
            <div class="container my-5">
                <div class="d-flex justify-content-center row mx-5">
                    <div class="col-md-10">
                        {
                            inventories.slice(0, 6).map(fruit => <Fruit key={fruit.id} fruit={fruit}></Fruit>)
                        }
                    </div>
                </div>
            </div>
            <div className='mb-5'>
                <button onClick={handleManage} className='btn d-block mx-auto btn-outline-success p-3 shadow-lg rounded'>Manage Inventories</button>
            </div>
            <Service></Service>
            <Review></Review>

        </div>

    );
};

export default Home;