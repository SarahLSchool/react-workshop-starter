import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import fetchProducts from "../../utils/getProducts";
import { Link, useSearchParams } from "react-router-dom";
import { Product } from "../../general.types";
import useCart from "../../hooks/useCart";

function ViewProduct(): ReactElement {
	// TODO: Read the product ID from the URL and fetch the product data.
	// HINT: You can use the `useSearchParams` hook to read the product ID from the URL.
	// HINT: You can use the `fetchProducts` function to fetch the product data.
	// HINT: You can use the `useState` hook to store the product data and the loading state.

	// TODO: Add an effect to fetch the data.


	// TODO: Add a function to add the product to the cart.

	return (
		<>
			<Link to="../products">Back to Products</Link>
			{
				/**
				 * TODO: Render the product's title, price, and quantity.
				 * HINT: Use the `loading` state variable to conditionally render a loading message while the product is being fetched.
				 * HINT: If loading is finished and there is no product, render a message that says "No product found."
				 * HINT: If loading is finished and there is a product, render the product's title, price, and quantity.
				 * 
				 * --- Do not add the below code until we go over React context and have implemented cart functionality. ---
				 * 
				 * HINT: Use the `addToCart` function to add the product to the cart. This should be called when the "Add to Cart" button is clicked.
				 * HINT: If the product is out of stock, disable the "Add to Cart" button.
				 */
			}
		</>
	);
}

export default ViewProduct;