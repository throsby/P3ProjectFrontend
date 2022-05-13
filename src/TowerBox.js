import { useEffect, useState } from "react"
import Tower from "./Tower"
import AddTower from "./AddTower"
import SubtractTower from "./SubtractTower"

function TowerBox() {
    const [towers, setTowers] = useState({})
    
    useEffect(() => {
        async function fetchData() {
            let req = await fetch("http://localhost:9292/towers")
            let res = await req.json()
            setTowers(res)
        }
        fetchData()
    }, [])
    

    return (
        <div style={{ "--towers": Object.keys(towers).length }} className="TowerBox">
            {Object.values(towers).map((tower,i) => {
                return <Tower key={i} tower={[tower, i]}/>
            })}
            <div className="addAndSubtract">
                <AddTower setTowers={setTowers}/>
                <SubtractTower setTowers={setTowers}/>
            </div>
        </div>
    )
}

export default TowerBox;