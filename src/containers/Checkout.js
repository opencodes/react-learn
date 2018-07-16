import React, {Component} from 'react';
import {BillingAddress} from "../componens/Checkout/BillingAddress";
import {Cart} from "../componens/Checkout/Cart";
import axios from 'axios';

export class Checkout extends Component {
    checkoutData =  {
        cart : {
            products:[]
        },
        "coupon":{
            "code":"",
            "discount":""
        }
    };

    loadData() {
        let _this = this;
        axios.get('./Checkout.json').then(function (response) {
            // handle success
            console.log(response);
            _this.checkoutData = response.data;
            _this.setState({
                checkoutData: response.data
            })
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    componentDidMount() {
        this.loadData();
    }

    componentWillUnmount() {

    }

    render() {
        console.log('checkoutData',this.checkoutData)
        return (
            <div className='row'>
                <div className='col-md-4 order-md-2 mb-4'>
                    <Cart cart={this.checkoutData.cart}/>
                </div>
                <div className='col-md-8 order-md-1'>
                    <h4 className="mb-3">Billing address</h4>
                    <BillingAddress/>
                </div>
            </div>
        )
    }
}