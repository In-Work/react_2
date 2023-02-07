function CartItem(props) {
    const {
        offerId,
        displayName,
        regularPrice,
        quantity,
        removeFromBascet = Function.prototype,
        incrementQuantity = Function.prototype,
        decrementQuantity = Function.prototype,
    } = props;
    return (
        <li class="collection-item cart-item">
            {displayName} x {quantity} = {regularPrice * quantity}$
            
            <span class="secondary-content">
                <i
                    style={{ cursor: "pointer" }}
                    class="material-icons "
                    onClick={() => removeFromBascet(offerId)}
                >
                    remove_shopping_cart
                </i>
            </span>
            <span>
                <i
                    style={{ cursor: "pointer" }}
                    className="material-icons secondary-content cart-quantity"
                    onClick={() => incrementQuantity(offerId)}
                >
                    add
                </i>
            </span>
            <span>
                <i
                    style={{ cursor: "pointer" }}
                    className="material-icons secondary-content cart-quantity"
                    onClick={() => decrementQuantity(offerId)}
                >
                    remove
                </i>
            </span>
        </li>
    );
}

export { CartItem };
