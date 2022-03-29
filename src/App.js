import AddUnit from "./Components/AddUnits";
import RoomThirdComponent from "./Components/RoomThirdComponent";
import RoomComponents from "./Components/RoomComponents";
import Vendor from "./Components/Vendor";
import { useState } from "react";

const rooms = [
  { id: 1, units: [{ _id: 1, text: '', components: [] }] },
  { id: 2, units: [{ _id: 1, text: '', components: [] }] },
  { id: 3, units: [{ _id: 1, text: '', components: [] }] }
]
function App() {
  const [room, setRoom] = useState({})
  const [unit, setUnit] = useState({})
  const [component, setCompnent] = useState({})
  const [vendorMaterial, setVendorMaterial] = useState({})

  const addComponentToRoom = (unitId, roomId) => {
    const roomIndex = rooms.findIndex(r => {
      return r.id === roomId
    })
    const unitIndex = rooms[roomIndex].units.findIndex(u => {
      return u._id === unitId
    })
    const components = rooms[roomIndex].units[unitIndex].components
    const newCompnent = { _id: components.length + 1, desc: '', quantity: '', rate: '', unit: '', vendorMaterials: [] }
    components.push(newCompnent)
    rooms[roomIndex].units[unitIndex].components = [...components]
    setUnit(rooms[roomIndex].units[unitIndex])
    setRoom(rooms[roomIndex])
  }

  const addComponentToUnit = (component) => {
    const tempUnit = { ...unit }
    tempUnit.components = [...component]
    setUnit(tempUnit)
  }

  const addVendorMaterial = (componentId) => {
    const roomIndex = rooms.findIndex(r => {
      return r.id === room.id
    })

    const unitIndex = rooms[roomIndex].units.findIndex(u => {
      return u._id === unit._id
    })

    const compnentIndex = rooms[roomIndex].units[unitIndex].components.findIndex(c => {
      return c._id === componentId
    })

    const oneComponent = rooms[roomIndex].units[unitIndex].components[compnentIndex]
    const vendorMaterials = [...oneComponent.vendorMaterials]
    console.log(vendorMaterials)
    if (vendorMaterials !== null) {
      const newVM = { _id: vendorMaterials.length + 1, milestone: '', percentage: '' }
      vendorMaterials.push(newVM)
      rooms[roomIndex].units[unitIndex].components[compnentIndex].vendorMaterials = [...vendorMaterials]
      setCompnent(rooms[roomIndex].units[unitIndex].components[compnentIndex])
      setUnit(rooms[roomIndex].units[unitIndex])
      setRoom(rooms[roomIndex])
    }
  }

  const addMilestone = (workId) => {

  }

  return (
    <div className="App">
      <div className="row head">
        <div className="col-md-6"><a href="#workmenu" role="button">&lt; &nbsp; Blank</a></div>
        <div className="col-md-2"><a href="#materialmenu" role="button">BOQ Total:4800/-</a></div>
        <div className="col-md-2"><a href="#materialmenu" role="button" >Project Total:6000/-</a></div>
        <div className="col-md-2"><a href="#materialmenu" role="button">BOQ&nbsp;<span className='bi bi-download'></span></a></div>
      </div>
      <div className="row ex-row">
        <div className="col-md-2 ex-col text-left"><AddUnit addComponent={addComponentToRoom} /></div>
        {unit.components?.length > 0 && <div className="col-md-2 ex-col text-left roomcomponent"><RoomComponents unit={unit} addComponents={addComponentToUnit} addVendorMaterial={addVendorMaterial} /></div>}
        {component.vendorMaterials?.length > 0 && <div className="col-md-4 ex-col text-left"><RoomThirdComponent /></div>}
        {vendorMaterial.vendor?.length > 0 && <div className="col-md-2 ex-col text-left roomcomponent"><Vendor id='1' /></div>}
      </div>
    </div >
  );
}

export default App;
