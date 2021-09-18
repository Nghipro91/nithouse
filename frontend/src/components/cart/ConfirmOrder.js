import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import MetaData from '../layout/MetaData'
import CheckoutSteps from './CheckoutSteps'

import { useSelector } from 'react-redux'

const ConfirmOrder = ({ history }) => {

    const numberFormat = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    const { cartItems, shippingInfo } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)

    // Calculate Order Prices
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    // const itemsPrices = numberFormat.format(itemsPrice);
    const shippingPrice = itemsPrice > 500000 ? 0 : 50000   
    // const shippingPrices = numberFormat.format(shippingPrice);
    // const taxPrice = Number((0.05 * itemsPrice).toFixed(2))
    const taxPrice = 0;
    const totalPrice = (
      itemsPrice + shippingPrice + taxPrice
    );
    // const totalPrices = numberFormat.format(totalPrice);

    const processToPayment = () => {
        const data = {
            itemsPrice: itemsPrice.toFixed(2),
            shippingPrice,
            taxPrice,
            totalPrice
        }

        sessionStorage.setItem('orderInfo', JSON.stringify(data))
        history.push('/payment')
    }

    return (
      <Fragment>
        <MetaData title={"Confirm Order"} />

        <CheckoutSteps shipping confirmOrder />

        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-8 mt-5 order-confirm">
            <h4 className="mb-3">Đơn Hàng</h4>
            <p>
              <b>Tên:</b> {user && user.name}
            </p>
            <p>
              <b>Số Điện Thoại:</b> {shippingInfo.phoneNo}
            </p>
            <p className="mb-4">
              <b>Địa Chỉ:</b>{" "}
              {`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`}
            </p>

            <hr />
            <h4 className="mt-4">Giỏ Hàng Của Bạn:</h4>

            {cartItems.map((item) => (
              <Fragment>
                <hr />
                <div className="cart-item my-1" key={item.product}>
                  <div className="row">
                    <div className="col-4 col-lg-2">
                      <img
                        src={item.image}
                        alt="Laptop"
                        height="45"
                        width="65"
                      />
                    </div>

                    <div className="col-5 col-lg-6">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>

                    <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                      <p>
                        {item.quantity} x {numberFormat.format(item.price)} ={" "}
                        <b>{numberFormat.format(item.quantity * item.price)}</b>
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
              </Fragment>
            ))}
          </div>

          <div className="col-12 col-lg-3 my-4">
            <div id="order_summary">
              <h4>Tổng Đơn Hàng</h4>
              <hr />
              <p>
                Subtotal:{" "}
                <span className="order-summary-values">
                  {numberFormat.format(itemsPrice)}
                </span>
              </p>
              <p>
                Shipping:{" "}
                <span className="order-summary-values">
                  {numberFormat.format(shippingPrice)}
                </span>
              </p>
              <p>
                Tax:{" "}
                <span className="order-summary-values">
                  {numberFormat.format(taxPrice)}
                </span>
              </p>

              <hr />

              <p>
                Total:{" "}
                <span className="order-summary-values">{numberFormat.format(totalPrice)}</span>
              </p>

              <hr />
              <button
                id="checkout_btn"
                className="btn btn-primary btn-block"
                onClick={processToPayment}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default ConfirmOrder