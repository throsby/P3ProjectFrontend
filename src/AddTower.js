import { useEffect, useState } from "react"

function AddTower({ setTowers }) {

    async function handleOnClick() {
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let req = await fetch("http://localhost:9292/add_tower", config)
        let res = await req.json()
        // console.log(res)
        // setTowers((prevTowers) => {return Object.assign(prevTowers, res)})
        setTowers((prevTowers) => {return {...prevTowers, ...res}})
    }

return ( 
    <div className="AddTower">
        <h2 onClick={handleOnClick}> + </h2> 
    </div>
)

}

export default AddTower