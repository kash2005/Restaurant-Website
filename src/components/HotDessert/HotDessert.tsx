import React from 'react'
import Food1 from '../../assets/food.png';
import Food2 from '../../assets/food2-plate.png';
import Food3 from '../../assets/banner.png';
import {motion} from 'framer-motion';
import {SlideUp} from '../Hero/Hero';

const HotDessertData = [
    {
        id: 1,
        name: "HotDessert",
        img: Food1,
        price: "$5.99",
        delay: 0.4
    },
    {
        id: 2,
        name: "HotCake",
        img: Food2,
        price: "$5.00",
        delay: 0.8
    },
    {
        id: 1,
        name: "HotDessert",
        img: Food1,
        price: "$5.99",
        delay: 1.2
    },
]

const HotDessert = () => {
  return (
    <section>
        <div className="container py-12">
            {/* Heading Section */}
            <h3 className="text-2xl font-semibold text-darkGreen uppercase py-8">
                Hot Dessert
            </h3>
            {/* grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            </div>
        </div>
    </section>
  )
}

export default HotDessert