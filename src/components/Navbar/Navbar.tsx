import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import useCart from "../../hooks/useCart";

function Navbar(): ReactElement {
	// --- Do not add the below code until we go over React context and have implemented cart functionality. ---
	// TODO: Access the cart array and display the number of items in the cart in the link to the cart page.

	return (
		<nav>
			<Link className="nav-link" to="./">E-Commerence Logo</Link>

			<div>
				<Link className="nav-link" to="./about">About</Link>
				<Link className="nav-link" to="./contact">Contact</Link>
				<Link className="nav-link" to="./products">Products</Link>
				<Link className="nav-link" to="./cart">Cart</Link>
			</div>
		</nav>
	);
}

export default Navbar;