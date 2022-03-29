import React, { Component } from "react";
import TextInput from "./UIElements/Inputs/TextInput";
import ComponentInput from "./UIElements/Inputs/ComponentInput";

class Work extends Component {

    constructor() {
        super()
        this.state = {
            work: [

            ]
        }
    }

    addWork = () => {
        const work = [...this.state.work, { _id: this.state.work.length, text: '' }]
        this.setState({ work })
    }

    render() {
        return (
            <>
                <div>
                    {this.state.work.map(e => {
                        return <div>
                            <div className="row">
                                <h6 className="col-md-11">Vender 1</h6>
                                <h6 className="col-md-1">X</h6>
                            </div>
                            <div className="row">
                                <div className="col-md-8 text-left"><label for="work">Work Type</label></div>
                                <div className="col-md-3" style={{marginLeft: "20px"}}>
                                    <select id="work">
                                        <option>Only Work</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8 text-left"><label for="vendor">Vendor Category</label></div>
                                <div className="col-md-3" style={{marginLeft: "22px"}}>
                                    <select id="vendor">
                                        <option>Carpenter</option>
                                    </select>
                                </div>
                            </div>

                            <div className="low-padding">
                                <TextInput text={e.text} id={e._id} rightLabel={'Heading'} />
                            </div>
                            <div className="low-padding">
                                <ComponentInput text={e.text} id={e._id} /></div>
                            <div className='row className="low-padding"' style={{ padding: '0 10px' }}>
                                <div className="col-md-4 low-padding"><TextInput text={e.text} id={e._id} rightLabel="Quantity" /></div>
                                <div className='col-md-4 low-padding'><TextInput text={e.text} id={e._id} rightLabel="Rate" /></div>
                                <div className='col-md-4 low-padding'><TextInput text={e.text} id={e._id} rightLabel="Unit" /></div>
                            </div>
                            <div className="row">
                                <div className="col-md-1"><a>$3000</a></div>
                                <div className="col-md-1"></div>
                                <div className="col-md-1"></div>
                                <div className="col text-right">
                                    <a className="text-right addLink" style={{ paddingLeft: "155px" }}>Add Milestones</a>
                                </div>
                            </div>
                        </div>

                    })}
                </div>
                <a className="add_button" onClick={this.addWork}>+</a>
            </>
        )
    }
}

export default Work;