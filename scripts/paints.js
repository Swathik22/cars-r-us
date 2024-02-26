import { setPaintColorChosen } from "./transientState.js"

export const paintComponent=async ()=>{
    const response= await fetch("http://localhost:8088/paints")
    const paints=await response.json()

    document.addEventListener("change",handlePaintChangeEvent)

    let html=`<div class="paint"><select id="paint">
    <option value="0">select a Paint Color</option>`
    const colorStringArray=paints.map(paint=>{
        html+=`<option value="${paint.id}">${paint.color}</option>`
    })
    html+=colorStringArray.join("")
    html+=`</div></select>`

    return html
}


const handlePaintChangeEvent=(changeEvent)=>{
    if(changeEvent.target.id==="paint"){
        const chosenColor=changeEvent.target.value
        setPaintColorChosen(chosenColor)
        //console.log(chosenColor)
    }
}