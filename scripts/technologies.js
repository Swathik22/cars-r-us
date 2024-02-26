import { setTechnologyChosen } from "./transientState.js"

export const technologyComponent=async()=>{
    const response= await fetch("http://localhost:8088/technologies")
    const technologies=await response.json()

    document.addEventListener("change",handleTechnologyChangeEvent)

    let html=`<div><select id="technology">
    <option value="0">select a technology Package</option>`
    const technologyStringArray=technologies.map(technology=>{
        html+=`<option value="${technology.id}">${technology.technology}</option>`
    })
    html+=technologyStringArray.join("")
    html+=`</div></select>`

    return html
}


const handleTechnologyChangeEvent=(changeEvent)=>{
    if(changeEvent.target.id==="technology"){
        const chosenTechnology=changeEvent.target.value
        setTechnologyChosen(chosenTechnology)
        //console.log(chosenTechnology)
    }
}