import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export const ProductItem = ({id,image,name,price}) => {

    const {currency } = useContext(ShopContext);

  return (
    <div>
        <Link className='text-gray-700 cursor-pointer ' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img src={image[0]} className="hover:scale-110 transition ease-in-out " alt="" />
            </div>
            <p className='pt-2 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    </div>
  )
}

export default ProductItem;
