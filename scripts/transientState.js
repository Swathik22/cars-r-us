const transientState={
    "paintId":0,
    "interiorId":0,
    "technologyId":0,
    "wheelId":0
}

export const setPaintColorChosen=(chosenColor)=>{
    transientState.paintId=parseInt(chosenColor)
}

export const setInteriorMaterialChosen=(chosenInterior)=>{
    transientState.interiorId=parseInt(chosenInterior)
}

export const setWheelStyleChosen=(chosenWheelStyle)=>{
    transientState.wheelId=parseInt(chosenWheelStyle)
}

export const setTechnologyChosen=(chosenTechnology)=>{
    transientState.technologyId=parseInt(chosenTechnology)
}

export const postOrder=async ()=>{
    const postOptions={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(transientState)
    }

    const response=await fetch("http://localhost:8088/orders",postOptions)

    const customEvent=new CustomEvent("savedCarOrder")
    document.dispatchEvent(customEvent)
}