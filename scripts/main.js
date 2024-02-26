import { carOrderPrice } from "./calculateOrderPrice.js"
import { interiorComponent } from "./interior.js"
import { placeCarOrder } from "./orders.js"
import { paintComponent } from "./paints.js"
import { technologyComponent } from "./technologies.js"
import { wheelComponent } from "./wheels.js"

const mainElement=document.querySelector("#container")

const render=async ()=>{
    const paintHTML=await paintComponent()
    const interiorHTML=await interiorComponent()
    const wheelHTMl=await wheelComponent()
    const technologyHTML=await technologyComponent()
    const buttonHTML=placeCarOrder()
    const orderHTML=await carOrderPrice()

    const bodyHTML=` 
        <h1>Cars R Us: Personal Car Builder</h1>

    <article class="choices">
        <section class="choices__paints options">
            <h2>Paints</h2>
            ${paintHTML}
        </section>

        <section class="choices__paints options">
            <h2>Interior</h2>
            ${interiorHTML}
        </section>

        <section class="choices__paints options">
        <h2>Wheels</h2>
        ${wheelHTMl}
    </section>

        <section class="choices__paints options">
            <h2>Technology</h2>
            ${technologyHTML}
        </section>
    </article>

    <article class="order">
    ${buttonHTML}
    </article>

    <article class="customOrders">
        <h2>Custom Car Orders</h2>
       ${orderHTML}
    </article>`

    mainElement.innerHTML=bodyHTML
}

document.addEventListener("savedCarOrder",render())
render()