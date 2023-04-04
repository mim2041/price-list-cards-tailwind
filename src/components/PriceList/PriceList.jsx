import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices,  stePrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
        .then(res => res.json())
        .then(data => stePrices(data))
    },[])
    return (
        <div className='mx-12 '>
            <h1 className='text-5xl bg-purple-300 text-center font-bold p-4'>Hello from tailwind</h1>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    prices.map(price => <PriceCard
                    key={price.id}
                    price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;