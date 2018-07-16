import React, {Component} from 'react';

export class Product extends Component {
    render() {
        console.log(this.props.product);
        let item =this.props.product;
        return (
            <li className="list-group-item d-flex justify-content-between lh-condensed" >
                <div>
                    <h6 className="my-0">{item.Name}</h6>
                    <small className="text-muted">{item.Description}</small>
                </div>
                <span className="text-muted">${item.Price}</span>
            </li>
        )
    }
}