import React, { Component } from 'react';
import Counter from './Counter';

class CardProduct extends Component {
    
    render() {
        return (
           
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/KiosResmi/BestMeat/Ayam/Daging+ayam+cincang.png" alt="" />
                    </div>
                    <p className="product-title">Ayam Cincang</p>
                    <p className="product-price">Rp 11.500</p>
                   <Counter/>
                </div>
        )
    }
}

export default CardProduct;