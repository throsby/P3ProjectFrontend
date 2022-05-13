import React from "react";

function Plot({plot: [plot, plotIndex], waterDry }) {

    // console.log(plotIndex, plot)

    async function waterPlants() {
        console.log(plot.water_level.toFixed(1))
        let config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let req = await fetch(`http://localhost:9292/water/${plot["tower_id"]}/${plotIndex}`, config)
        let res = await req.json()
        return 
    }

    async function takeWaterSample() {
        console.log(plot.water_level.toFixed(1))
        let config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let req = await fetch(`http://localhost:9292/sample/${plot["tower_id"]}/${plotIndex}`, config)
        let res = await req.json()

        return 
    }


    return(
        <div onClick={waterDry ? waterPlants : takeWaterSample} className={`Plot tower-${plot["tower_id"]}-plot-${plotIndex}`}> 
            <h4>{plot.water_level.toFixed(1)}</h4>
        </div>
    )
}

export default Plot