import React, { useEffect, useState } from 'react';

const useFruits = () => {
    const [fruits, setFruits] = useState([]);
    useEffect(() => {
        const url = 'https://afternoon-tundra-03070.herokuapp.com/inventory';
        fetch(url)
            .then(res => res.json())
            .then(data => setFruits(data))
    }, [])
    return [fruits, setFruits];
};

export default useFruits;