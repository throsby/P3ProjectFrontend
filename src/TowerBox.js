import { useEffect, useState } from "react"
import Tower from "./Tower"
import AddTower from "./AddTower"

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
        <div className="TowerBox">
            {Object.values(towers).map((tower,i) => {
                return <Tower key={i} tower={[tower, i]}/>
            })}
            <AddTower setTowers={setTowers}/>
        </div>
    )
}

export default TowerBox;