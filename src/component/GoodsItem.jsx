function GoodsItem(props) {
    const {
        addToCart = Function.prototype,
        offerId,
        granted: [{ description }],
    } = props;

    const {
        displayType,
        displayName,
        price: { regularPrice },
        displayAssets: [{ full_background }],
    } = props;

    return (
        <div className="card z-depth-2">
            <div className="card-image">
                <img src={full_background} alt={displayType} />
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() => addToCart({ offerId, displayName, regularPrice })}
                >
                    Buy
                </button>
                <span className="right" style={{ fontSize: "24px" }}>
                    {regularPrice}$
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };
