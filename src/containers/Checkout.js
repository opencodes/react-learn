import React, {Component } from 'react';
import {BillingAddress} from "../componens/Checkout/BillingAddress";
import {Cart} from "../componens/Checkout/Cart";
import axios from 'axios';
export class Checkout extends Component{
    loadData(){
        axios.get('../json/Checkout.json').s
    }
    render(){
        return(
            <div className='row'>
                <div className='col-md-4 order-md-2 mb-4'>
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <Cart/>
                </div>
                <div className='col-md-8 order-md-1'>
                    <h4 className="mb-3">Billing address</h4>
                    <BillingAddress/>
                </div>
            </div>
        )
    }
}