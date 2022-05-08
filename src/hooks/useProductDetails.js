import React, { useEffect, useState } from 'react';

const useProductDetails = productId => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://afternoon-tundra-03070.herokuapp.com/inventory/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])
    return [product, setProduct];
};

export default useProductDetails;