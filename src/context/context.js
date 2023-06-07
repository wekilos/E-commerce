import React, { useState, useEffect, createContext } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  let localFav;
  let localPro;
  const favHarytlar = localStorage.getItem("FavHarytlar");
  const localProduct = localStorage.getItem("BasketProducts");

  if (localProduct) {
    localPro = JSON.parse(localProduct);
  } else {
    localPro = [];
  }
  if (favHarytlar) {
    localFav = JSON.parse(favHarytlar);
  } else {
    localFav = [];
  }

  const [favorites, setFavorites] = useState(localFav);
  const [basket, setBasket] = useState(localPro);

  const AddToFav = async (product) => {
    console.log("addtoo", product);
    let id = product.id;
    let barmy = false;
    favorites.map((haryt) => {
      if (haryt.id === product.id) {
        barmy = true;
      }
    });
    if (!barmy) {
      let harytlar = favorites;
      harytlar.push();
      setFavorites([...favorites, product]);
    } else {
      let harytlar = favorites.filter((haryt, i) => {
        return product.id !== haryt.id;
      });
      setFavorites(harytlar);
    }
  };

  useEffect(() => {
    localStorage.setItem("FavHarytlar", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("BasketProducts", JSON.stringify(basket));
  }, [basket]);

  let [dil, setDil] = useState("TM");
  useEffect(() => {
    let dilData = localStorage.getItem("OnlineDil");
    if (dilData) {
      setDil(JSON.parse(dilData));
    } else {
      setDil("TM");
    }
  }, []);

  const ChangeDil = (event) => {
    setDil(event);
    localStorage.setItem("OnlineDil", JSON.stringify(event));
  };

  const addPro = (pro) => {
    console.log(pro);
    let marketHave = false;
    let marketIndex = -1;
    let proHave = false;
    let proIndex = -1;
    if (basket.length > 0) {
      basket?.map((item, i) => {
        if (item.market.id == pro.market.id) {
          marketHave = true;
          marketIndex = i;
          item.products?.map((item, index) => {
            if (item.id == pro.id) {
              proHave = true;
              proIndex = index;
              let array = basket;
              marketHave &&
                (array[marketIndex].products[index].quantity =
                  array[marketIndex].products[index].quantity + 1);
              setBasket([...array]);
            } else {
              let array = basket;
              marketHave &&
                array[marketIndex].products.push({ quantity: 1, pro: pro });
              setBasket([...array]);
            }
          });
        } else {
          let array = basket;
          let market = pro.market;
          market.products = [
            {
              quantity: 1,
              pro: pro,
            },
          ];
          array.push(market);
          setBasket([...array]);
        }
      });
    } else {
      let array = [];
      let market = pro.market;
      market.products = [
        {
          quantity: 1,
          pro: pro,
        },
      ];

      array.push(market);
      console.log(array);
      setBasket(array);
    }
  };
  const removePro = (pro) => {};

  const incPro = (pro) => {};
  const decPro = (pro) => {};

  return (
    <Context.Provider
      value={{
        dil,
        favorites,
        ChangeDil,
        AddToFav,
        addPro,
        removePro,
        incPro,
        decPro,
        basket,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
