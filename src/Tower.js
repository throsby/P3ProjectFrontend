import Plot from "./Plot";
import { useState } from "react";

function Tower({tower: [tower, towerIndex]}) {

    
    const [ waterDry, setWaterDry ] = useState(true)
    
    
    
 
    return (
        <div className={`TowerStack`}>
            {Object.values(tower).map((plot,i) => {
                return <Plot key={i} plot={[plot, i]}/>
            })}
            <span className={"water-dry"} onClick={setWaterDry(!waterDry)}>{waterDry ? "⛲️" : "🧪" }</span>
        </div>
        
    )
}

export default Tower