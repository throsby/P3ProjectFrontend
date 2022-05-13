import Plot from "./Plot";
import { useState } from "react";
import WaterDry from "./WaterDry";

function Tower({tower: [tower, towerIndex]}) {
    
    const [ waterDry, setWaterDry ] = useState(true)
    
    if(towerIndex > 0){
        return (
            <>
                <div className={`TowerStack`}>
                    {Object.values(tower).map((plot,i) => {
                        return <Plot key={i} plot={[plot, i]}/>
                    })}
                </div>
            </>
        )
    }
    else {
        return(
        <>
            <div className={`TowerStack`}>
                {Object.values(tower).map((plot,i) => {
                    return <Plot key={i} plot={[plot, i]} waterDry={waterDry}/>
                })}
            </div>            
            <div style={{"position": "absolute"}}>
                    <WaterDry setWaterDry={setWaterDry} waterDry={waterDry}/>
            </div>
        </>
        )
    }
}

export default Tower