import { lazy } from "react";

export const Login = lazy(() => import("./login/login"));
export const Signup = lazy(() => import("./login/signup"));
export const Verification = lazy(() => import("./login/verification"));
export const FirstPage = lazy(() => import("./login/firstPage"));
export const Home = lazy(() => import("./home/Home"));
export const Kategories = lazy(() => import("./kategory/categories"));
export const Kategory = lazy(() => import("./kategory/kategory"));
export const Market = lazy(() => import("./markets/market"));
export const Markets = lazy(() => import("./markets/markets"));
export const Brend = lazy(() => import("./brends/brend"));
export const Brends = lazy(() => import("./brends/brends"));
export const Product = lazy(() => import("./product/product"));
export const SearchProducts = lazy(() => import("./product/searchProducts"));
export const DiscountProduct = lazy(() => import("./product/discountProducts"));
export const MoreSaleProduct = lazy(() => import("./product/moreSaleProducts"));
export const Basket = lazy(() => import("./basket/basket"));
export const Orders = lazy(() => import("./profile/orders"));
export const Order = lazy(() => import("./profile/order"));
export const Favorites = lazy(() => import("./profile/favorites"));
export const Info = lazy(() => import("./profile/info"));
export const Profile = lazy(() => import("./profile/profile"));
export const Address = lazy(() => import("./profile/address"));
export const Sargyt = lazy(() => import("./basket/sargyt"));

export const CheckoutResultPage = lazy(() =>
	import("./CheckoutResultPage/CheckoutResultPage")
);
