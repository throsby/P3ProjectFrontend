import Plot from "./Plot";

function Tower({tower: [tower, towerIndex]}) {

    let logging = false

    // console.log(towerIndex, tower)
    
    // logging ? console.log("* " + "** * ".repeat(3) + " Plots of Tower " + towerIndex + " * " + "** * ".repeat(3)) : console.log()
    // tower.forEach((plot) => {
    //     logging ? console.log(plot) : console.log()
    // });
    
    
 
    return (
        <div className={`TowerStack`}>
            {Object.values(tower).map((plot,i) => {
                return <Plot key={i} plot={[plot, i]}/>
            })}
        </div>
    )
}

export default Tower