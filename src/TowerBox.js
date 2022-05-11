import { useEffect, useState } from "react"

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

    

    for (const key in towers){
        towers[key].forEach((plot) => {
            console.log(plot)
        });
    }
    
    
    return ( 
        <div > 
            {/* {{Object.entries(data)}.forEach((e,i) => {
                console.log(e)
            })}   */}
        </div>
    )
}

export default TowerBox;