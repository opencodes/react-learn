import React,{ Component} from 'react';
import {Product} from "./Product";
import {Coupon} from "./Coupon";

export class Cart extends Component {
    render() {
        return (
            <div>
                <Product/>
                <Coupon/>
            </div>
        )
    }
}