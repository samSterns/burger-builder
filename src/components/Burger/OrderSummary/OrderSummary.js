import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button'; 


class orderSummary extends Component {
    
    render() {

    const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}:</span> 
                    {this.props.ingredients[igKey]}
                </li>
            )
        })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>You've chosen:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: ${this.props.price.toFixed(2)}</p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
} 


export default orderSummary;