import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product, col }) => {
  const numberFormat = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  console.log(numberFormat.format(12345.6789));
  // 12.346 ₫

  console.log(numberFormat.format(2345.67891));
  // 2.346 ₫

  return (
    <div className={`{col-sm-12 col-md-6 col-lg-${col} my-1 color-text`}>
      {/* <div className="card p-3 rounded"> */}
      <Link
        to={`/product/${product._id}`}
        id=""
        className=" card p-3 rounded color-text"
      >
        <img className="card-img-top mx-auto" src={product.images[0].url} />
        <div className="card-body d-flex flex-column">
          <p className="card-title text-home">
            {/* <Link to={`/product/${product._id}`}>{product.name}</Link> */}
            {product.name}
          </p>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}
              />
            </div>
            <span id="no_of_reviews">{product.numOfReviews}</span>
          </div>
          <p className="card-text">{numberFormat.format(product.price)}</p>
          {/* <Link
            to={`/product/${product._id}`}
            id="view_btn"
            className="btn btn-block"
          >
            View Details
          </Link> */}
        </div>

        {/* </div> */}
      </Link>
    </div>
  );
};

export default Product
