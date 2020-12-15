import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Avocado', type: 'avocado' },
    { label: 'Mushroom', type: 'mushroom' },
    { label: 'Cheese', type: 'cheese' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price:<em>${props.price.toFixed(2)}</em></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchaseable}>Order Now</button>
    </div>
);

export default buildControls;