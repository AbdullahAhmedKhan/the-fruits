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

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
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
            <Service></Service>
            <Review></Review>

        </div>

    );
};

export default Home;