import React, { Component } from "react";
import TextInput from "./UIElements/Inputs/TextInput";

class Room extends Component {

    constructor() {
        super()
        this.state = {
            room: [
                { _id: 1, text: '' }
            ]
        }
    }

    addUnit = () => {
        const room = [...this.state.room, { _id: this.state.room.length + 1, text: '' }]
        this.setState({ room })
    }

    render() {
        return (
            <>
                <div className="room">
                    <label>{'Room' + this.props.id}</label>
                    {this.state.room.map(e => {
                        return <div id={e._id}>
                            <TextInput text={e.text} trashIcon rightLabel={'Unit Name'} />
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-1"></div>
                                <div className="col-md-1"></div>
                                <div className="col text-right">
                                    <a className="text-right addLink" onClick={() => this.props.addComponent(e._id, this.props.id)}>Add Component(s) </a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <a className="add_button" onClick={this.addUnit}>+</a>
            </>
        )
    }
}

export default Room;