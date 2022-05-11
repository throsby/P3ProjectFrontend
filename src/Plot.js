function Plot({plot: [plot, plotIndex]}) {

    // console.log(plotIndex, plot)

    return(
        <div className={`Plot tower-${plot["tower_id"]}-plot-${plotIndex}`}>
        <h2>{`${plotIndex}`}</h2>
        </div>
    )
}

export default Plot