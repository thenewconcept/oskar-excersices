import React from "react";
import PropTypes from "prop-types";
import {formatPrice} from "../helpers";
import {TransitionGroup, CSSTransition} from "react-transition-group";

class Order extends React.Component{
    static propTypes = {
        fishes: PropTypes.shape({
            fish: PropTypes.shape({
                detais: PropTypes.shape({
                    image: PropTypes.string.isRequired, 
                    name: PropTypes.string.isRequired, 
                    desc: PropTypes.string.isRequired, 
                    status: PropTypes.string.isRequired, 
                    price: PropTypes.number.isRequired,
                }).isRequired,
                addToOrder: PropTypes.func.isRequired,
            })
        }).isRequired,
        order: PropTypes.shape({
            fish: PropTypes.shape({
                detais: PropTypes.shape({
                    image: PropTypes.string.isRequired, 
                    name: PropTypes.string.isRequired, 
                    desc: PropTypes.string.isRequired, 
                    status: PropTypes.string.isRequired, 
                    price: PropTypes.number.isRequired,
                }).isRequired,
                addToOrder: PropTypes.func.isRequired,
            }),
            count: PropTypes.number
        }).isRequired,
        removeFromOrder: PropTypes.func.isRequired
    }
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';
        const transitionOption = {
            classNames: "order",
            key,
            timeout: {enter: 500, exit: 500}
        }
        if(!fish) return null;
        if(!isAvailable){
            return (
            <CSSTransition {...transitionOption}>
                <li key={key}>Sorry {fish ? fish.name: 'fish'} is no longer available</li>
            </CSSTransition>)
        }
        return (
            <CSSTransition {...transitionOption}>
                <li key={key}>
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition classNames="count" key={count} timeout={{enter: 250, exit: 250}}>
                                <span>{count} lbs {fish.name}</span>
                            </CSSTransition>
                        </TransitionGroup>
                        {formatPrice(count * fish.price)}
                        <button onClick={()=> this.props.removeFromOrder(key)}>&times;</button>
                    </span>
                </li>
            </CSSTransition>
        );
    }
    render(){
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable){
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <div className="total">Total: 
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order; 