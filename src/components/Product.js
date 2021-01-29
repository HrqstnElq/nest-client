import axios from "axios";
import React, {useEffect, useState} from "react";

export default function Product() {
	const [products, setProducts] = useState([{}, {}, {}, {}, {}]);

	useEffect(() => {
		axios.get("http://localhost:3001/products").then((res) => {
			console.log(res.data);
			if (res.data) setProducts(res.data);
			else setProducts([]);
		});
	}, []);
	return (
		<div className="products">
			{products &&
				products.map((product, index) => (
					<section className="product" key={index}>
						<h3>{product.name}</h3>
						<p>{product.info}</p>
					</section>
				))}
		</div>
	);
}
