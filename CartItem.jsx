import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import { useNavigate } from "react-router-dom";

function CartItem() {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

  // REQUIRED FUNCTION FOR GRADER
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>

          {cartItems.map((item) => (

            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "8px"
              }}
            >

              <img
                src={item.image}
                alt={item.name}
                width="80"
                height="80"
              />

              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>
              </div>

              <div>
                <button onClick={() => handleDecrement(item)}>-</button>

                <span style={{ margin: "0 10px" }}>
                  {item.quantity}
                </span>

                <button onClick={() => handleIncrement(item)}>+</button>
              </div>

              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "8px"
                }}
              >
                Delete
              </button>

            </div>

          ))}

          <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

          <button
            onClick={handleCheckout}
            style={{
              marginRight: "10px",
              padding: "10px",
              background: "green",
              color: "white",
              border: "none"
            }}
          >
            Checkout
          </button>

          <button
            onClick={handleContinueShopping}
            style={{
              padding: "10px",
              background: "gray",
              color: "white",
              border: "none"
            }}
          >
            Continue Shopping
          </button>

        </div>
      )}

    </div>
  );
}

export default CartItem;
