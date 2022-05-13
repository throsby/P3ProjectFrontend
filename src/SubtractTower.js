function SubtractTower({ setTowers }) {

    async function handleOnClick() {
        let config = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let req = await fetch("http://localhost:9292/remove_tower", config)
        let res = await req.json()
        // console.log(res)
        // setTowers((prevTowers) => {return Object.assign(prevTowers, res)})
        setTowers((prevTowers) => {
            
            
            
            return {...res}
        })
    }

    return (
        <div className="SubtractTower">
            <h2 onClick={handleOnClick}> - </h2>
        </div>
    )
}

export default SubtractTower;