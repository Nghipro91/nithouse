import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({ shipping, confirmOrder, payment }) => {
    return (
      <div className="checkout-progress d-flex justify-content-center mt-5">
        {shipping ? (
          <Link to="shippping" className="float-right">
            <div className="triangle2-active"></div>
            <div className="step active-step">Giao Đến</div>
            <div className="triangle-active"></div>
          </Link>
        ) : (
          <Link to="#!" disabled>
            <div className="triangle2-incomplete"></div>
            <div className="step incomplete">Giao Đến</div>
            <div className="triangle-incomplete"></div>
          </Link>
        )}

        {confirmOrder ? (
          <Link to="/order/confirm" className="float-right">
            <div className="triangle2-active"></div>
            <div className="step active-step">Xác Nhận Thông Tin</div>
            <div className="triangle-active"></div>
          </Link>
        ) : (
          <Link to="#!" disabled>
            <div className="triangle2-incomplete"></div>
            <div className="step incomplete">Xác Nhận Thông Tin</div>
            <div className="triangle-incomplete"></div>
          </Link>
        )}

        {payment ? (
          <Link to="/payment" className="float-right">
            <div className="triangle2-active"></div>
            <div className="step active-step">Đặt Hàng</div>
            <div className="triangle-active"></div>
          </Link>
        ) : (
          <Link to="#!" disabled>
            <div className="triangle2-incomplete"></div>
            <div className="step incomplete">Đặt Hàng</div>
            <div className="triangle-incomplete"></div>
          </Link>
        )}
      </div>
    );
}

export default CheckoutSteps