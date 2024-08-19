import Food1 from '../../assets/food.png';
import Food2 from '../../assets/food2-plate.png';
import Food3 from '../../assets/banner.png';
import {motion} from 'framer-motion';
import {SlideUp} from '../Hero/Hero';

interface PopularRecipeItem {
    id: number;
    name: string;
    img: string;
    price: string;
    delay: number;
}

const PopularRecipeData: PopularRecipeItem[] = [
    {
        id: 1,
        name: "Hot Cake",
        img: Food1,
        price: "$5.99",
        delay: 0.4
    },
    {
        id: 2,
        name: "Hot Cake",
        img: Food2,
        price: "$5.00",
        delay: 0.8
    },
    {
        id: 3,
        name: "Hot Cake",
        img: Food3,
        price: "$5.99",
        delay: 1.2
    },
];

const PopularRecipe = () => {
  return (
    <section>
        <div className="container py-24">
            <motion.h3 
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="show"
            className='text-4xl text-center font-league font-semibold uppercase py-8'>Our Popular Recipe</motion.h3>

            {/* card section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                {PopularRecipeData.map((item) => {
                    return(
                        <div className="group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl w-44 mx-auto">
                            <img src={item.img} alt="" 
                            className='w-44 mx-auto img-shadow group-hover:scale-x-110 group-hover:translate-y-[-50px] 
                            group-hover:rotate-[50deg] transition-all duration-400' />
                            <div>
                                <button className='btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100'>Buy Now</button>
                                <p className='text-xl font-semibold'>{item.name}</p>
                                <p className='text-xl font-bold text-yellow-500'>{item.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default PopularRecipe