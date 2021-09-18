import React, {Fragment} from 'react'
import { Route, Link } from 'react-router-dom'

const FooterFinal = () => {
    return (
        <Fragment>
            {/* Footer */}
<footer className="page-footer font-small unique-color-dark">
  <div style={{backgroundColor: '#212529'}}>
    <div className="container">
      {/* Grid row*/}
      <div className="row py-4 d-flex align-items-center">
        {/* Grid column */}
        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0" style={{color: 'white'}}>HỖ TRỢ KHÁCH HÀNG!</h6>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-6 col-lg-7 text-center text-md-right">
          {/* Facebook */}
          {/* <a href="https://www.facebook.com/" className="fb-ic" >
            <i className="fab fa-facebook-f white-text mr-4"> </i>
          </a> */}
          {/* Twitter */}
          {/* <a className="tw-ic">
            <i className="fab fa-twitter white-text mr-4"> </i>
          </a> */}
          {/* Google +*/}
          <a className="gplus-ic">
            <i className="fab fa-google-plus-g white-text mr-4"> </i>
          </a>
          {/*Linkedin */}
          <a className="li-ic">
            <i className="fab fa-linkedin-in white-text mr-4"> </i>
          </a>
          {/*Instagram*/}
          <a className="ins-ic">
            <i className="fab fa-instagram white-text"> </i>
          </a>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row*/}
    </div>
  </div>
  {/* Footer Links */}
  <div className="container text-center text-md-left mt-5">
    {/* Grid row */}
    <div className="row mt-3">
      {/* Grid column */}
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        {/* Content */}
        <h6 className="text-uppercase font-weight-bold">NIT HOUSE</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
        <p>Đơn vị cung cấp sản phẩm chính hãng cho quý khách hàng .</p>
      </div>
      {/* Grid column */}
      {/* Grid column */}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        {/* Links */}
        <h6 className="text-uppercase font-weight-bold">CHÍNH SÁCH</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
        <p>
          <a href="#!">Chính Sách Thanh Toán</a>
        </p>
        <p>
          <a href="#!">Bảo Mật Thông Tin Cá Nhân</a>
        </p>
        <p>
          <a href="#!">Giải Quyết Khiếu Nại</a>
        </p>
        <p>
          <a href="#!">Điều Khoản Sử Dụng</a>
        </p>
      </div>
      {/* Grid column */}
      {/* Grid column */}
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        {/* Links */}
        <h6 className="text-uppercase font-weight-bold">HỢP TÁC LIÊN KẾT</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
        <p>
          <a href="#!">Quy Chế Hoạt Động</a>
        </p>
        <p>
          <a href="#!">Bán Hàng Cùng Nit House</a>
        </p>
        <p>
          <a href="#!">Cẩm Nang Đại Lý</a>
        </p>
 
      </div>
      {/* Grid column */}
      {/* Grid column */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        {/* Links */}
        <h6 className="text-uppercase font-weight-bold">LIÊN HỆ</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
        <p>
          <i className="fas fa-home " />K228/4 Châu Thị Vĩnh Tế,Đà Nẵng</p>
        <p>
          <i className="fas fa-envelope " />info.nithouse@gmail.com</p>
        <p>
          <i className="fas fa-phone " />0905.756.883 </p>
        <p>
          <i className="fas fa-print " />0906.770.795</p>
      </div>
      {/* Grid column */}
    </div>
    {/* Grid row */}
  </div>
  {/* Footer Links */}
  {/* Copyright */}
  <div className="footer-copyright text-center py-3"> 
    <a href="https://mdbootstrap.com/"> </a>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}

        </Fragment>
    )
}

export default FooterFinal
