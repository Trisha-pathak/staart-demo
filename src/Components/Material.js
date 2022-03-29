import React, { Component } from "react";
import TextInput from "./UIElements/Inputs/TextInput";

class Material extends Component {

    constructor() {
        super()
        this.state = {
            material: [],
            carpenter: "Carpenter"
        }
    }

    addMaterial = () => {
        const material = [...this.state.material, { _id: this.state.material.length, text: '' }]
        this.setState({ material })
    }

    render() {
        return (
            <>
                <div>
                    {this.state.material.map(e => {
                        return <div>
                            <div className="row">
                                <h6 className="col-md-11">Material</h6>
                                <h6 className="col-md-1">X</h6>
                            </div>
                            <div className='row className="low-padding"' style={{ padding: '0 10px' }}>
                                <div className="col-md-4 low-padding"><TextInput text={e.text} id={e._id} rightLabel="v"/></div>
                                <div className='col-md-4 low-padding'><TextInput text={e.text} id={e._id} rightLabel="item" /></div>
                                <div className='col-md-4 low-padding'><TextInput text={e.text} id={e._id} rightLabel="Specification" /></div>
                            </div>
                            <div className='row className="low-padding"' style={{ padding: '0 10px' }}>
                                <div className="col-md-4 low-padding"><TextInput text={e.text} id={e._id} rightLabel="v" value="Plywood" /></div>
                                <div className='col-md-4 low-padding'><TextInput text={e.text} id={e._id} rightLabel="Quantity" /></div>
                                <div className='col-md-4 low-padding'><TextInput text={e.text} id={e._id} rightLabel="Rate" /></div>
                            </div>
                            <div className="col-md-1"><a>$3000</a></div>
                        </div>

                    })}
                </div>
                <a className="add_button" onClick={this.addMaterial}>+</a>
            </>
        )
    }
}

export default Material;