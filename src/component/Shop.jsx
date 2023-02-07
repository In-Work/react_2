import { useState, useEffect } from "react";
import { Cart } from "./Cart";
import { CartList } from "./CartList";
import { GoodsList } from "./GoodsList";
import { Preloder } from "./Preloder";
import { Alert } from "./Alert";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCartShow, setCartShow] = useState(false);
    const [orders, setOrder] = useState([]);
    const [alertName, setAlertName] = useState("");

    const removeFromBascet = (itemId) => {
        const newOrder = orders.filter((item) => item.offerId !== itemId);
        setOrder(newOrder);
    };

    const closeAlert = () => {
        setAlertName("");
    };

    const incrementQuantity = (itemId) => {
        const newOrder = orders.map((item) => {
            if (item.offerId === itemId) {
                const newQuantity = item.quantity + 1;
                return {
                    ...item,
                    quantity: newQuantity,
                };
            } else {
                return item;
            }
        });
        setOrder(newOrder);
    };

    const decrementQuantity = (itemId) => {
        const newOrder = orders.map((item) => {
            if (item.offerId === itemId) {
                const newQuantity = item.quantity - 1;
                return {
                    ...item,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return item;
            }
        });
        setOrder(newOrder);
    };

    const handleCartShow = function () {
        setCartShow(!isCartShow);
    };

    const addToCart = (item) => {
        const itemIndex = orders.findIndex(
            (orderItem) => orderItem.offerId === item.offerId
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...orders, newItem]);
        } else {
            const newOrder = orders.map((orderItem, index) => {
                if (index === itemIndex) {
                    return { ...orderItem, quantity: orderItem.quantity + 1 };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        setAlertName(item.displayName);
    };

    useEffect(function GetGoods() {
        fetch("https://fortniteapi.io/v2/shop?lang=en", {
            headers: {
                Authorization: "f1362719-222f90ba-391917b7-4805cc70",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            <Cart quantity={orders.length} handleCartShow={handleCartShow} />
            {loading ? (
                <Preloder />
            ) : (
                <GoodsList goods={goods} addToCart={addToCart} />
            )}
            {isCartShow && (
                <CartList
                    orders={orders}
                    handleCartShow={handleCartShow}
                    removeFromBascet={removeFromBascet}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                />
            )}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
    );
}

export { Shop };
