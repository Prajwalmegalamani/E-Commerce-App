import React, { useEffect, useState } from "react";

import Loader from "../../atoms/Loader";
import "./CartPage.scss";
import CartDetails from "../../organisms/CartDetails";
import OrderSummary from "../../organisms/OrderSummary";
import { useSelector } from "react-redux";
import EmptyCart from "../../atoms/Icons/EmptyCart";

function CartPage() {
  const [cartData, setUserCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const { products } = useSelector((state) => state.cart);
  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  useEffect(() => {
    setLoading(true);
    setQuantity(products?.length)
    setUserCartData(products)
    const CalculatedPrice = products?.reduce((acc, data) => {
      return (parseFloat(acc) + Number(data.quantity * data.price * (100 - data.discountPercentage) / 100)).toFixed(2)
    }, 0)
    setPrice(Number(CalculatedPrice))
    setLoading(false);
  }, [products]);
  return (
    <div className="box-center">
      {!loading ? (
        <div className="cart-layout">
          <div className="space"></div>
          {price <= 0 && products?.length <= 0 ?
            <div className="emptyCart">
              <div>
                <EmptyCart />
              </div>
              <div>
                Your Shopping cart is empty
              </div>
            </div>
            : <CartDetails quantity={quantity} cartData={cartData} />}
          <div className="space"></div>
          {price <= 0 && products?.length <= 0 ? <></> : <OrderSummary data={price} cartPage={"cart"} />}
        </div>
      ) : (
        <>
          <div className="empty-page" data-testid="empty-page"></div>
          <Loader />
        </>
      )}
    </div>
  );
}

export default CartPage;
