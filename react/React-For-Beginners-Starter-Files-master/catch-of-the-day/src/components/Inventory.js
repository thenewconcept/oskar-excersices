import React from "react";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component{
    static propTypes = {
        fishes: PropTypes.shape({
            detais: PropTypes.shape({
                image: PropTypes.string, 
                name: PropTypes.string, 
                desc: PropTypes.string, 
                status: PropTypes.string, 
                price: PropTypes.number,
            }),
            addToOrder: PropTypes.func,
        }),
        updatedFish: PropTypes.func,
        deleteFish:PropTypes.func,
        loadSampleFishes: PropTypes.func,
    }
    render(){
        return (
            <div className="inventory">
                <h2>
                    Inventory
                </h2>
                {Object.keys(this.props.fishes).map(key => 
                    <EditFishForm 
                        fish={this.props.fishes[key]}
                        key={key}
                        updatedFish={this.props.updatedFish}
                        deleteFish={this.props.deleteFish}
                        index={key}
                    />
                )}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>
                    Load Sample Fishes
                </button>
            </div>
        )
    }
}

export default Inventory; 