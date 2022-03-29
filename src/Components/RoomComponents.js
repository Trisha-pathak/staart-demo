import React, { useEffect, useState } from "react";
import ComponentInput from "./UIElements/Inputs/ComponentInput";
import TextInput from "./UIElements/Inputs/TextInput";

const RoomComponents = (props) => {

    const [roomComponent, setRoomComponent] = useState([])
    const addComponents = () => {
        const components = [...roomComponent, { _id: roomComponent.length + 1, text: '' }]
        props.addComponents(components)
    }

    useEffect(() => {
        setRoomComponent(props.unit.components);
    }, [props])

    return (
        <>
            <div>
                <h5 className="text-center">Unit {props.unit.unitId} - Add Components</h5>
                <div className="row">
                    <div className="col-md-10"><p>Upload Drawings/3D</p></div>
                    <div className="col-md-2"><p><span className='bi bi-upload'></span></p></div>
                </div>
                {roomComponent.map(e => {
                    return <div>
                        <div className="row">
                            <h6 className="col-md-10">Component {e._id}</h6>
                            <h6 className="col-md-1">X</h6>
                        </div>
                        <ComponentInput text={e.text} />
                        <div className='row' style={{ padding: '0 10px' }}>
                            <div className="col-md-4 low-padding"><TextInput text={e.text} rightLabel="Quantity" /></div>
                            <div className='col-md-4 low-padding'><TextInput text={e.text} rightLabel="Rate" /></div>
                            <div className='col-md-4 low-padding'><TextInput text={e.text} rightLabel="Unit" /></div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"><a>$3000</a></div>
                            <div className="col-md-1"></div>
                            <div className="col-md-1"></div>
                            <div className="col text-right">
                                <a className="text-right addLinkcomponent" onClick={() => props.addVendorMaterial(e._id)}>Add Vendors/Material </a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <a className="add_button" onClick={addComponents}>+</a>
        </>
    )
}

export default RoomComponents;