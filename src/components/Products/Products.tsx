import type { ReactElement } from "react";
import type { Product } from "../../general.types.ts";
import { useState, useEffect } from "react";
import fetchProducts from "../../utils/getProducts.ts";
import ProductCard from "../ProductCard/ProductCard.tsx";
import "./Products.css";

// Dummy hardcoded data. This should no longer be needed once the products are fetched from GitHub.
const SAMPLE_DATA: Product[] = [
	{
		title: "Water Cartons",
		price: 9.99,
		quantity: 5,
		id: 1
	},
	{
		title: "Protein Shakes",
		price: 12.99,
		quantity: 9,
		id: 2
	},
	{
		title: "Laptop",
		price: 9999.99,
		quantity: 0,
		id: 3
	},
	{
		title: "Blueberries",
		price: 3.99,
		quantity: 6,
		id: 4
	},
	{
		title: "Dumbbells",
		price: 5.99,
		quantity: 3,
		id: 5
	}
];

function Products(): ReactElement {
	// TODO: Fetch the products from GitHub and render them using the `ProductCard` component.
   const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
	// TODO: Create state to hold the products and a loading state to show a loading message while the products are being fetched.
     useEffect(() =>{
      fetchProduts<Product[]>()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false))
     }, []);
	// TODO: Fetch the products from GitHub when the component mounts.

	return (
		<>
			<div className="products">
				{
					/**
					 * TODO: Render the products using the `ProductCard` component.
					 * HINT: Use the `map` function to render each product in the `products` state variable.
					 * HINT: Pass the product's title, price, and quantity as props to the `ProductCard` component.
					 * HINT: React requires a unique `key` prop for each child in a list. Use the product's `id` as the `key` prop. How should we handle this?
					 * HINT: Use the `loading` state variable to conditionally render a loading message while the products are being fetched.
					 * HINT: If loading is finished and there are no products, render a message that says "No products found."
					 */
					products.map((product) => <ProductCard{...product} key={product.id} />)
				}
			</div>
		</>
	);
}

export default Products;
