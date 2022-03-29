import React from "react";
import Room from "./Room";

const AddUnit = (props) => {

    return (
        <>
            <div>
                <h5 className="text-center">Add Units</h5>
                <div className="room">
                    <Room id={1} {...props}/>
                    <Room id={2} {...props}/>
                    <Room id={3} {...props}/>
                </div>
            </div>
            <div><button className="button save">SAVE</button></div>
            <div><button className="button start">Start Work</button></div>
        </>
    )
}

export default AddUnit;