import Plot from "./Plot";
import { useState } from "react";
import WaterDry from "./WaterDry";

function Tower({tower: [tower, towerIndex], waterDry }) {
    
    
    
    
    return ( 
        <div className={`TowerStack`}>
            {Object.values(tower).map((plot,i) => {
                return <Plot key={i} plot={[plot, i]} waterDry={waterDry}/>
            })}
        </div>
    )
    
    
}

export default Tower