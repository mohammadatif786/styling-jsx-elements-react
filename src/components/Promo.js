function Promo(props){

    const promoStyle = {
        color: 'orange',
        fontSize: "40px",
        fontWeight: "bold"
    }

    return (
        // <div className="promo-section" style={{ color:'tomato', fontSize:"40px", fontWeight:"bold" }}>
        <div style={ promoStyle }>
            <div>
                <h1>{ props.Heading }</h1>
            </div>
            <div>
                <h2> { props.subHeading } </h2>
            </div>
        </div>
    )
}

export default Promo