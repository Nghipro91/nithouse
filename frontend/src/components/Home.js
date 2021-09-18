import React, { Fragment, useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import MetaData from "./layout/MetaData";
import Product from "./product/Product";
import Loader from "./layout/Loader";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getProducts } from "../actions/productActions";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = ({ match }) => {
  //Thêm vào dấu 3 chấm cho số
  const numberFormat = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000000000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);

  const categories = [
    // 'Electronics',
    //         'Cameras',
    //         'Laptops',
    //         'Accessories',
    //         'Headphones',
    //         'Food',
    //         'Books',
    //         'Clothes/Shoes',
    //         'Beauty/Health',
    //         'Sports',
    //         'Outdoor',
    //         'Home'

    "Điện Thoại - Máy Tính Bảng",
    "Điện Tử - Điện Lạnh",
    "Phụ Kiện - Thiết Bị Số",
    "LapTop - Thiết Bị IT",
    "Máy Ảnh - Quay Phim",
    "Điện Gia Dụng",
    "Nhà Cửa Đời Sống",
    "Hàng Tiêu Dùng - Thực Phẩm",
    "Đồ Chơi, Mẹ Và Bé",
    "Làm Đẹp - Sức Khỏe",
    "Thời Trang - Phụ Kiện",
    "Thể Thao - Dã Ngoại",
    "Xe máy, Ô tô , Xe Đạp",
    "Hàng Quốc Tế",
    "Sách , Quà Tặng",
    "Voucher - Dịch Vụ - Thẻ Cào",
  ];

  const alert = useAlert();
  const dispatch = useDispatch();

  const {
    loading,
    products,
    error,
    productsCount,
    resPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts(keyword, currentPage, price, category, rating));
  }, [dispatch, alert, error, keyword, currentPage, price, category, rating]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  let count = productsCount;
  if (keyword) {
    count = filteredProductsCount;
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Sản Phẩm Online Giá Tốt"} />
          <h1 id="products_heading">Sản Phẩm Mới</h1>

          <section id="products" className="container mt-5">
            <div className="row">
              {keyword ? (
                <Fragment>
                  <div className="col-6 col-md-3 mt-5 mb-5">
                    <div className="px-5">
                      <Range
                        marks={{
                          20000: `20k`,
                          50000000: `50.000k`,
                        }}
                        min={20000}
                        max={50000000}
                        defaultValue={[10000, 100000000]}
                        tipFormatter={(value) => `${value}`}
                        tipProps={{
                          placement: "top",
                          visible: true,
                        }}
                        value={price}
                        onChange={(price) => setPrice(price)}
                      />

                      <hr className="my-5" />

                      <div className="mt-5">
                        <h4 className="mb-3">Danh Mục</h4>

                        <ul className="pl-0">
                          {categories.map((category) => (
                            <li
                              style={{
                                cursor: "pointer",
                                listStyleType: "none",
                                fontSize: "12px",
                              }}
                              key={category}
                              onClick={() => setCategory(category)}
                            >
                              {category}
                              <hr className="my-1" />
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* <hr className="my-3" /> */}

                      <div className="mt-5">
                        <h4 className="mb-3">Đánh Giá</h4>

                        <ul className="pl-0">
                          {[5, 4, 3, 2, 1].map((star) => (
                            <li
                              style={{
                                cursor: "pointer",
                                listStyleType: "none",
                              }}
                              key={star}
                              onClick={() => setRating(star)}
                            >
                              <div className="rating-outer">
                                <div
                                  className="rating-inner"
                                  style={{
                                    width: `${star * 20}%`,
                                  }}
                                ></div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-9">
                    <div className="row">
                      {products &&
                        products.map((product) => (
                          <Product key={product.id} product={product} col={3} />
                        ))}
                    </div>
                  </div>
                </Fragment>
              ) : (
                products &&
                products.map((product) => (
                  <Product key={product.id} product={product} col={2} />
                ))
              )}
            </div>
          </section>

          {resPerPage <= count && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText={"Sau"}
                prevPageText={"Trước"}
                firstPageText={"Trang Đầu"}
                lastPageText={"Trang Cuối"}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
