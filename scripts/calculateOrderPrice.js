export const carOrderPrice=async ()=>{
    const response=await fetch("http://localhost:8088/orders?_expand=paint&_expand=wheel&_expand=interior&_expand=technology")
    const orderPriceList=await response.json()

    let html=`<div>`
    const orderStringArray=orderPriceList.map((order)=>{
        let totalPrice=order.paint.price+order.wheel.price+order.interior.price+order.technology.price
        html+=`<div class="eachOrder">
        ${order.paint.color} car ${order.wheel.wheelStyle} wheels, ${order.interior.seatType}, and the 
        ${order.technology.technology} for total cost of ${totalPrice}
        </div>`
    })

    html+=orderStringArray.join("")

    return html
}