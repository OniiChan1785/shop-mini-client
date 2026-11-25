export type Product = {
  id: number;
  name: string;
  author: string;
  price: number;
  oldPrice?: number; // giá gốc (nếu đang giảm giá)
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  { id: 1, name: "Đắc Nhân Tâm", author: "Dale Carnegie", price: 86000, oldPrice: 108000, image: "/images/books/dac-nhan-tam.svg", category: "Kỹ năng sống", stock: 25 },
  { id: 2, name: "Nhà Giả Kim", author: "Paulo Coelho", price: 79000, image: "/images/books/nha-gia-kim.svg", category: "Văn học", stock: 18 },
  { id: 3, name: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh", author: "Nguyễn Nhật Ánh", price: 125000, image: "/images/books/hoa-vang-co-xanh.svg", category: "Văn học", stock: 0 },
  { id: 4, name: "Clean Code", author: "Robert C. Martin", price: 395000, oldPrice: 450000, image: "/images/books/clean-code.svg", category: "Công nghệ", stock: 7 },
  { id: 5, name: "Dế Mèn Phiêu Lưu Ký", author: "Tô Hoài", price: 65000, image: "/images/books/de-men.svg", category: "Thiếu nhi", stock: 30 },
  { id: 6, name: "Tư Duy Nhanh Và Chậm", author: "Daniel Kahneman", price: 239000, oldPrice: 299000, image: "/images/books/tu-duy-nhanh-cham.svg", category: "Kỹ năng sống", stock: 3 },
];
