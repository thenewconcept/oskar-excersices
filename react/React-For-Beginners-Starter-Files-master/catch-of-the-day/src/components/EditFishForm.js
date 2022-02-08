import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component{
    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired, 
            desc: PropTypes.string.isRequired, 
            status: PropTypes.string.isRequired, 
            price: PropTypes.number.isRequired
        }),
        index: PropTypes.string.isRequired,
        updatedFish: PropTypes.func.isRequired
    };
    handleChange = (e) => {
        const updatedFish = {...this.props.fish, 
            [e.currentTarget.name]: e.currentTarget.value
        }
        this.props.updatedFish(this.props.index, updatedFish);
    }
    render(){
        return <div className="fish-edit">
            <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name}/>
            <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
            <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold out!</option>
            </select>
            <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}/>
            <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
            <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>
    }
}

export default EditFishForm