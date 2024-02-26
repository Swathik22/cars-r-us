import { setWheelStyleChosen } from "./transientState.js"

export const wheelComponent=async()=>{
    const response= await fetch("http://localhost:8088/wheels")
    const wheels=await response.json()

    document.addEventListener("change",handleWheelChangeEvent)

    let html=`<div><select id="wheel">
    <option value="0">select a wheel Style</option>`
    const wheelStringArray=wheels.map(wheel=>{
        html+=`<option value="${wheel.id}">${wheel.wheelStyle}</option>`
    })
    html+=wheelStringArray.join("")
    html+=`</div></select>`

    return html
}


const handleWheelChangeEvent=(changeEvent)=>{
    if(changeEvent.target.id==="wheel"){
        const chosenWheel=changeEvent.target.value
        setWheelStyleChosen(chosenWheel)
        //console.log(chosenWheel)
    }
}