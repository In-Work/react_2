import { CartItem } from "./CartItem";

function CartList(props) {
    const {
        orders = [],
        handleCartShow = Function.prototype,
        removeFromBascet = Function.prototype,
        incrementQuantity = Function.prototype,
        decrementQuantity = Function.prototype,
    } = props;

    const totalPrice = orders.reduce((sum, item) => {
        return sum + item.regularPrice * item.quantity;
    }, 0);

    return (
        <ul class="collection cart-list z-depth-2">
            <li class="collection-item active ">
                Basket
                <span class="secondary-content">
                    <i
                        class="material-icons red"
                        onClick={handleCartShow}
                        style={{ cursor: "pointer" }}
                    >
                        close
                    </i>
                </span>
            </li>
            {orders.length ? (
                orders.map((order) => (
                    <CartItem
                    key={order.offerId}
                    {...order}
                    removeFromBascet={removeFromBascet}
                    incrementQuantity = {incrementQuantity}
                    decrementQuantity = {decrementQuantity}
                    />
                ))
            ) : (
                <li class="collection-item">Empty basket</li>
            )}
            <li class="collection-item active ">Total cost: {totalPrice}$</li>
        </ul>
    );
}

export { CartList };
