import React, { useEffect } from "react";
import axios from "axios";

import { useLocation, useHistory } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosIntance";

const CheckoutResultPage = () => {
	const update_paymentOrder = async ({ type, order_id }) => {
		//http://localhost:3000/checkout-result/?type=success&order_id=abc
		const response =
			type === "success"
				? await axiosInstance.post("/api/grocery_order_payment", {
						order_id,
						is_paid: 1,
				  })
				: await axiosInstance.post("/api/grocery_order_payment", {
						order_id,
						is_paid: 0,
				  });

		// console.log(response);

		setTimeout(() => {
			history.push("/mrt/home");
		}, 5000);
	};
	const history = useHistory();
	const location = useLocation();
	useEffect(() => {
		const search_params = new URLSearchParams(location.search);
		const type = search_params.get("type");
		const order_id = search_params.get("order_id");
		update_paymentOrder({ type, order_id });
	}, []);

	return (
		<div>
			<p>Sargyt ustunlikli yerine yetirildi</p>
		</div>
	);
};

export default CheckoutResultPage;
