import React, { useState } from "react";
import Work from './Work';
import Material from './Material'

const RoomThirdComponent = (props) => {

    const [tab, setTab] = useState('work');

    const handleTabClick = (e) => {
        setTab(e.target.id)
    }

    return (
        <>
            <div>
                <h5 className="text-center">Component {props.id}</h5>
                <a className={`link ${tab === 'work' && 'active'}`} id='work' onClick={handleTabClick}>
                    Work
                </a>
                <a className={`link ${tab === 'material' && 'active'}`} id='material' onClick={handleTabClick}>
                    Material
                </a>
            </div>
            {tab === 'work' ? <div className="room"><Work /></div> : <div className="room"><Material /></div>}
        </>
    )
}

export default RoomThirdComponent;