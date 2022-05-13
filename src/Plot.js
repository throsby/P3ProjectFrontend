function Plot({plot: [plot, plotIndex]}) {

    // console.log(plotIndex, plot)

    async function handleOnClick() {
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let req = await fetch("http://localhost:9292/add_tower", config)
        let res = await req.json()
        
        
    }



    return(
        <div className={`Plot tower-${plot["tower_id"]}-plot-${plotIndex}`}>
        </div>
    )
}

export default Plot