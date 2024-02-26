import { postOrder } from "./transientState.js"

export const placeCarOrder=()=>{
    document.addEventListener("click",handleClickEvent)
    return `<button id="placeCarOrder">place Car Order</button>`
}

const handleClickEvent=(clickEvent)=>{
    if(clickEvent.target.id==="placeCarOrder"){
        postOrder()
    }
}