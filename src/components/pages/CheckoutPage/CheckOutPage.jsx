import React, { useEffect, useState } from "react";

import Loader from "../../atoms/Loader";
import Accordion from "../../atoms/Accordion";
import { defaultAddress } from "../../../utils/constants";
import ShippingCard from "../../organisms/ShippingCard";
import "./CheckOutPage.scss"
import OrderSummary from "../../organisms/OrderSummary";
import DisplayCartDetails from "../../organisms/DisplayCartDetails";
import PaymentOptionsCard from "../../organisms/PaymentOptionsCard"
import OrderReview from "../../organisms/OrderReview"
import { useNavigate } from "react-router-dom";
import getFromStorage from "../../../utils/getFromLocalStorage";
import setToLocalStorage from "../../../utils/setToLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllFromCart } from "../../../redux/actions/deleteAllCartItem";

function CheckOutPage() {
    let dispatch = useDispatch();
    const [cartData, setUserCartData] = useState([]);
    const [detailsFilled, setDetailsFilled] = useState(true);
    const [paymentDetailsFilled, setPaymentDetailsFilled] = useState(false);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [address, setAddress] = useState(getFromStorage("address") || defaultAddress)
    const { products } = useSelector((state) => state.cart);

    const navigate = useNavigate();
    function placeOrder() {
        setToLocalStorage('orderDetails', { cartData, price })
        dispatch(deleteAllFromCart());
        navigate('/order-confirmation')
    }

    useEffect(() => {
        window.scroll(0, 0)
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
                <div className="align-center">
                    <div className="mobile-order-summary">
                        <Accordion
                            titleClassName="text-size-title"
                            subTitleClassName="sub-title"
                            defaultOpen={false}
                            title={`Cart (${quantity})`}
                            subtitle={`$${price}`}
                        >
                            <div >
                                <div >
                                    {cartData?.map((product) => {
                                        return (
                                            <DisplayCartDetails data={product} key={product.id} cartPage={"checkout"} />
                                        );
                                    })}
                                </div>
                                <hr />
                                {price <= 0 && products?.length <= 0 ? <></> : <OrderSummary data={price} cartPage={"checkout"} />}

                            </div>
                        </Accordion>
                    </div>
                    <div className="checkout-form-display">
                        <div className="form-section">
                            <ShippingCard address={address} setAddress={setAddress} detailsFilled={detailsFilled} setDetailsFilled={setDetailsFilled}></ShippingCard>
                            <div className="space-between"></div>
                            <PaymentOptionsCard detailsFilled={detailsFilled} address={address} paymentDetailsFilled={paymentDetailsFilled} setPaymentDetailsFilled={setPaymentDetailsFilled}></PaymentOptionsCard>
                            <div className="space-between"></div>
                            <OrderReview detailsFilled={detailsFilled} paymentDetailsFilled={paymentDetailsFilled} placeOrder={placeOrder}></OrderReview>

                        </div>
                        <div className="order-summary-section desktop-order-summary">
                            {price <= 0 && products?.length <= 0 ? <></> : <OrderSummary data={price} cartPage={"checkout"} cartData={cartData} />}
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="empty-page"></div>
                    <Loader />
                </>
            )}
        </div>
    )
}

export default CheckOutPage