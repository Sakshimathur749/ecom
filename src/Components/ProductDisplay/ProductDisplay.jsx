import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { Shopcontext } from '../../context/Shopcontext'

const ProductDisplay = (props) => {
    const { product } = props;
    const {addtoCart} = useContext(Shopcontext);
    return (
        <div className='productDisplay'>
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img className='productDisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productDisplay-right-prices">
                    <div className="productDisplay-right-prices-old">${product.old_price}</div>
                    <div className="productDisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="productDisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab amet omnis saepe tempora, possimus veritatis. 
                </div>
                <div className='productDisplay-right-size'>
                     <h1>Select Size</h1>
                     <div className="productDisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                     </div>
                </div>
                <button onClick={()=>{addtoCart(product.id)}}>ADD TO CART</button>
                <p className='productDisplay-right-category'><span>Category:</span>Women , T-shirt , Crop-top</p>
                <p className='productDisplay-right-category'><span>Tags:</span>Modern , latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay