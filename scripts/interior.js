import { setInteriorMaterialChosen } from "./transientState.js"

export const interiorComponent=async()=>{
    const response= await fetch("http://localhost:8088/interiors")
    const interiors=await response.json()

    document.addEventListener("change",handleInteriorChangeEvent)

    let html=`<div><select id="interior">
    <option value="0">select an interior material</option>`
    const interiorStringArray=interiors.map(interior=>{
        html+=`<option value="${interior.id}">${interior.seatType}</option>`
    })
    html+=interiorStringArray.join("")
    html+=`</div></select>`

    return html
}


const handleInteriorChangeEvent=(changeEvent)=>{
    if(changeEvent.target.id==="interior"){
        const chosenInterior=changeEvent.target.value
        setInteriorMaterialChosen(chosenInterior)
        //console.log(chosenInterior)
    }
}