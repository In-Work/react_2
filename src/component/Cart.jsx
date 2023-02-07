function Cart(props) {
    const { quantity = 0, handleCartShow = Function.prototype } = props;
    return (
        <div className="cart deep-purple white-text darken-4 z-depth-2" onClick={handleCartShow}>
            <i class="material-icons ">shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}

export { Cart };
