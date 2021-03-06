import Plot from "./Plot";
import { useState } from "react";


function Tower({tower: [tower, towerIndex], waterDry, harvestPlant, time}) {
    

    return ( 
        <div className={`TowerStack`}>
            {Object.values(tower).map((plot,i) => {
                return <Plot key={i} plot={[plot, i]} waterDry={waterDry} harvestPlant={harvestPlant}
                time={time}/>
            })}
        </div>
    )
}

export default Tower