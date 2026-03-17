import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantCategories = {
  "Air Purifying Plants": [
    {
      id: 1,
      name: "Snake Plant",
      price: 20,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 25,
      image: "https://via.placeholder.com/150"
    }
  ],

  "Succulents": [
    {
      id: 3,
      name: "Aloe Vera",
      price: 15,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Jade Plant",
      price: 18,
      image: "https://via.placeholder.com/150"
    }
  ],

  "Indoor Plants": [
    {
      id: 5,
      name: "Spider Plant",
      price: 17,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      name: "Rubber Plant",
      price: 22,
      image: "https://via.placeholder.com/150"
    }
  ]
};

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Paradise Nursery Plant Shop</h1>

      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <strong>Cart Items: {cartCount}</strong>
      </div>

      {Object.entries(plantCategories).map(([category, plants]) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h2>{category}</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >
            {plants.map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "15px",
                  width: "200px",
                  textAlign: "center"
                }}
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  style={{ width: "150px", height: "150px" }}
                />

                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  style={{
                    padding: "10px",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
