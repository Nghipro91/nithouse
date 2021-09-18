const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxlength: [100, "Product name cannot exceed 100 character"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxlength: [10, "Product name cannot exceed 5 character"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please select category for this product"],
    enum: {
      values: [
        // 'Electronics',
        // 'Cameras',
        // 'Laptops',
        // 'Accessories',
        // 'Headphones',
        // 'Food',
        // 'Books',
        // 'Clothes/Shoes',
        // 'Beauty/Health',
        // 'Sports',
        // 'Outdoor',
        // 'Home'
        "Lựa chọn danh mục",
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
      ],
      message: "Please select correct category for product",
    },
  },
  seller: {
    type: String,
    required: [true, "Please enter product seller"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxLength: [5, "Product name cannot exceed 5 characters"],
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
