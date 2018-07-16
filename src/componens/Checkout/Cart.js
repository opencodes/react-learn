import React,{ Component} from 'react';
import {Product} from "./Product";
import {Coupon} from "./Coupon";

export class Cart extends Component {
    products;

    constructor(props){
        super();

    }
    render() {
        let cart = this.props.cart;


        console.log('cart',this.props)
        this.products = cart.products;
        let total = 0;
        let count = cart.products.length;
        const ProductList = cart.products.map((item) => {
                total += parseFloat(item.Price);
                return(<Product product={item} key={item.id}/>)
            }
        );
        let coupon = cart.coupon;


        return (
            <div>
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    <span className="badge badge-secondary badge-pill">{count}</span>
                </h4>
                <ul className="list-group mb-3">
                    {ProductList}
                    <li className="list-group-item d-flex justify-content-between bg-light">
                        <div className="text-success">
                            <h6 className="my-0">Promo code</h6>
                            {/*<small>{coupon.code}</small>*/}
                        </div>
                        <span className="text-success">-$5</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>${total}</strong>
                    </li>
                </ul>
                <Coupon/>
            </div>
        )
    }
}