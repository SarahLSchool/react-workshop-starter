import type { ReactElement } from "react";
import useCart from "../../hooks/useCart";
import { Product } from "../../general.types";
import ProductCard from "../ProductCard/ProductCard";
import "./Cart.css";

function Cart(): ReactElement {
  // --- Do not add the below code until we go over React context and have implemented cart functionality. ---
  // TODO: Implement a way that grants access to the cart and a function to remove items from the cart

  // TODO: Implement a function that removes a product from the cart

  return (
    <div className="cart-items">
      {
        /**
         * TODO: If the cart is empty, display a message that says "You have no items!".
         * Otherwise, map over the cart and display each product in the cart.
         * HINT: In the `map` function, return a component that displays BOTH the product and a button to remove the product from the cart.
         */
      }
    </div>
  )
}

export default Cart;