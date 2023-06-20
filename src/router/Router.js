import { React, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import ComponentLoading from "../components/ComponentLoading";
import PageLoading from "../components/PageLoading";

import {
  Home,
  Login,
  Kategory,
  Markets,
  Market,
  Brend,
  Brends,
  Product,
  Basket,
  Orders,
  Order,
  Favorites,
  Info,
  Address,
  Sargyt,
  Signup,
  Verification,
  FirstPage,
  DiscountProduct,
  MoreSaleProduct,
  Kategories,
  SearchProducts,
  Profile,
} from "../pages/index";
import {
  HomeFood,
  KategoryFood,
  MarketsFood,
  MarketFood,
  CategoryFood,
  CategoriesFood,
  ProductFood,
  BasketFood,
  OrdersFood,
  OrderFood,
  FavoritesFood,
  InfoFood,
  AddressFood,
  SargytFood,
  DiscountProductFood,
  MoreSaleProductFood,
  SearchProductsFood,
} from "../pagesFood/index";
import ScrollIntoView from "./ScrollIntoView";

const PrivateRoute = lazy(() => import("./PrivateRoute"));
const PublicRoute = lazy(() => import("./PublicRoute"));
const PrivateRouteFood = lazy(() => import("./PrivateRouteFood"));
const PublicRouteFood = lazy(() => import("./PublicRouteFood"));
const App = () => {
  return (
    // forceRefresh={true}
    // history={history}
    <BrowserRouter>
      <ScrollIntoView>
        <Suspense fallback={<PageLoading />}>
          <Switch>
            <PublicRoute
              restricted={true}
              component={Home}
              path="/mrt/home"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Kategories}
              path="/mrt/kategories"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Kategory}
              path="/mrt/kategory/:id"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Markets}
              path="/mrt/markets"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Market}
              path="/mrt/market/:id"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Brends}
              path="/mrt/brends"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Brend}
              path="/mrt/brend/:id"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Product}
              path="/mrt/product/:id"
              exact
            />
            <PublicRoute
              restricted={true}
              component={SearchProducts}
              path="/mrt/search/:product_name"
              exact
            />
            <PublicRoute
              restricted={true}
              component={DiscountProduct}
              path="/mrt/discount"
              exact
            />
            <PublicRoute
              restricted={true}
              component={MoreSaleProduct}
              path="/mrt/moreSale"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Basket}
              path="/mrt/basket"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Sargyt}
              path="/mrt/sargyt"
              exact
            />
            <PrivateRoute
              restricted={true}
              component={Orders}
              path="/mrt/profile/orders"
              exact
            />
            <PrivateRoute
              restricted={true}
              component={Order}
              path="/mrt/profile/orders/:id"
              exact
            />
            <PrivateRoute
              restricted={true}
              component={Favorites}
              path="/mrt/profile/favorites"
              exact
            />
            <PrivateRoute
              restricted={true}
              component={Info}
              path="/mrt/profile/info"
              exact
            />{" "}
            <PrivateRoute
              restricted={true}
              component={Profile}
              path="/mrt/profile"
              exact
            />
            <PrivateRoute
              restricted={true}
              component={Address}
              path="/mrt/profile/address"
              exact
            />
            {/* Food Routes */}
            <PublicRouteFood
              restricted={true}
              component={HomeFood}
              path="/rtn/home"
              exact
            />
            <PublicRouteFood
              restricted={true}
              component={KategoryFood}
              path="/rtn/kategory/:id"
              exact
            />
            <PublicRouteFood
              restricted={true}
              component={MarketsFood}
              path="/rtn/markets"
              exact
            />
            <PublicRouteFood
              restricted={true}
              component={MarketFood}
              path="/rtn/market/:id"
              exact
            />
            <PublicRouteFood
              restricted={true}
              component={CategoriesFood}
              path="/rtn/categories"
              exact
            />
            <PublicRouteFood
              restricted={true}
              component={CategoryFood}
              path="/rtn/category/:id"
              exact
            />
            <PublicRouteFood
              restricted={true}
              component={ProductFood}
              path="/rtn/product/:id"
              exact
            />
            <PublicRouteFood
              restricted={true}
              component={DiscountProductFood}
              path="/rtn/discount"
              exact
            />
            <PublicRouteFood
              restricted={true}
              component={MoreSaleProductFood}
              path="/rtn/moreSale"
              exact
            />
            <PublicRouteFood
              restricted={true}
              component={SearchProductsFood}
              path="/rtn/search"
              exact
            />
            <PublicRouteFood
              restricted={true}
              component={BasketFood}
              path="/rtn/basket"
              exact
            />
            <PublicRouteFood
              restricted={true}
              component={SargytFood}
              path="/rtn/sargyt"
              exact
            />
            <PrivateRouteFood
              restricted={true}
              component={OrdersFood}
              path="/rtn/profile/orders"
              exact
            />
            <PrivateRouteFood
              restricted={true}
              component={OrderFood}
              path="/rtn/profile/orders/:id"
              exact
            />
            <PrivateRouteFood
              restricted={true}
              component={FavoritesFood}
              path="/rtn/profile/favorites"
              exact
            />
            <PrivateRouteFood
              restricted={true}
              component={InfoFood}
              path="/rtn/profile/info"
              exact
            />
            <PrivateRouteFood
              restricted={true}
              component={AddressFood}
              path="/rtn/profile/address"
              exact
            />
            {/* Global Pages Routes */}
            <Route
              restricted={true}
              component={FirstPage}
              path="/first"
              exact
            />
            <Route restricted={true} component={FirstPage} path="/" exact />
            <Route restricted={true} component={Login} path="/login" exact />
            <Route restricted={true} component={Signup} path="/signup" exact />
            <Route
              restricted={true}
              component={Verification}
              path="/verification/:phone"
              exact
            />
            <PublicRoute component={Home} path="*" />
            {/* <Route path="*" component={Home} /> */}
          </Switch>
        </Suspense>
      </ScrollIntoView>
    </BrowserRouter>
  );
};

export default App;
