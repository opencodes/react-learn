import React, {Component} from 'react';

export class Coupon extends Component {
    render() {
        return (
            <form className="card p-2">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Promo code"/>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-secondary">Redeem</button>
                    </div>
                </div>
            </form>
        )
    }
}