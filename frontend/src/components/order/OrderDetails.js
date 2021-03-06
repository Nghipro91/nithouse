import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails, clearErrors } from '../../actions/orderActions'

const OrderDetails = ({ match }) => {
  //Thêm vào dấu 3 chấm cho số
  const numberFormat = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const alert = useAlert();
  const dispatch = useDispatch();

  const {
    loading,
    error,
    order = {},
  } = useSelector((state) => state.orderDetails);
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    user,
    totalPrice,
    orderStatus,
  } = order;

  useEffect(() => {
    dispatch(getOrderDetails(match.params.id));

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, match.params.id]);

  const shippingDetails =
    shippingInfo &&
    `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`;

  const isPaid =
    paymentInfo && paymentInfo.status === "succeeded" ? true : false;

  return (
    <Fragment>
      <MetaData title={"Order Details"} />

      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8 mt-5 order-details">
              <h1 className="my-5">Đơn Hàng # {order._id}</h1>

              <h4 className="mb-4">Thông Tin Giao Hàng</h4>
              <p>
                <b>Tên:</b> {user && user.name}
              </p>
              <p>
                <b>Điện Thoại:</b> {shippingInfo && shippingInfo.phoneNo}
              </p>
              <p className="mb-4">
                <b>Địa Chỉ:</b>
                {shippingDetails}
              </p>
              <p>
                <b>Tổng Tiền:</b> {numberFormat.format(totalPrice)}
              </p>

              <hr />

              <h4 className="my-4">Thanh Toán</h4>
              <p className={isPaid ? "greenColor" : "redColor"}>
                <b>{isPaid ? "ĐÃ THANH TOÁN" : "CHƯA THANH TOÁN"}</b>
              </p>

              <h4 className="my-4">Tình Trạng Đơn Hàng:</h4>
              <p
                className={
                  order.orderStatus &&
                  String(order.orderStatus).includes("Delivered")
                    ? "greenColor"
                    : "redColor"
                }
              >
                <b>{orderStatus}</b>
              </p>

              <h4 className="my-4">Sản Phẩm Đã Đặt:</h4>

              <hr />
              <div className="cart-item my-1">
                {orderItems &&
                  orderItems.map((item) => (
                    <div key={item.product} className="row my-5">
                      <div className="col-4 col-lg-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          height="45"
                          width="65"
                        />
                      </div>

                      <div className="col-5 col-lg-5">
                        <Link to={`/products/${item.product}`}>
                          {item.name}
                        </Link>
                      </div>

                      <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p>{numberFormat.format(item.price)}</p>
                      </div>

                      <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                        <p>{item.quantity} (SP)</p>
                      </div>
                    </div>
                  ))}
              </div>
              <hr />
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default OrderDetails