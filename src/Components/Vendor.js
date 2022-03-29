import React, { Component } from "react";
import ComponentInput from "./UIElements/Inputs/ComponentInput";
import TextInput from "./UIElements/Inputs/TextInput";

class Vendor extends Component {

    constructor() {
        super()
        this.state = {
            vendor: [ ]
        }
    }

    addComponents = () => {
        const vendor = [...this.state.vendor, { _id: this.state.vendor.length, text: '' }]
        this.setState({ vendor })
    }

    render() {
        return (
            <>
                <div>
                    <h5 className="text-center">Vendor {this.props.id} - Milestones</h5>
                    
                    {this.state.vendor.map(e => {
                        return <div>
                            <div className='row' style={{ padding: '0 10px' }}>
                                <div className="col-md-6 low-padding"><TextInput text={e.text} id={e._id} rightLabel="mileStone" /></div>
                                <div className='col-md-5 low-padding'><TextInput text={e.text} id={e._id} rightLabel="%" /></div>
                                <div className='col-md-1 low-padding'><a>&nbsp;X</a></div>
                            </div>
                        </div>
                    })}
                </div>
                <a className="add_button" onClick={this.addComponents}>+</a>
            </>
        )
    }
}

export default Vendor;