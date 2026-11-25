export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  { id: 1, name: "Đắc Nhân Tâm", price: 86000, image: "https://placehold.co/400x300/1f5fd1/ffffff?text=Dac+Nhan+Tam", category: "Kỹ năng sống", stock: 25 },
  { id: 2, name: "Nhà Giả Kim", price: 79000, image: "https://placehold.co/400x300/e07a1f/ffffff?text=Nha+Gia+Kim", category: "Văn học", stock: 18 },
  { id: 3, name: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh", price: 125000, image: "https://placehold.co/400x300/16a34a/ffffff?text=Hoa+Vang+Co+Xanh", category: "Văn học", stock: 0 },
  { id: 4, name: "Clean Code", price: 395000, image: "https://placehold.co/400x300/0f1b2d/ffffff?text=Clean+Code", category: "Công nghệ", stock: 7 },
  { id: 5, name: "Dế Mèn Phiêu Lưu Ký", price: 65000, image: "https://placehold.co/400x300/b45309/ffffff?text=De+Men", category: "Thiếu nhi", stock: 30 },
  { id: 6, name: "Tư Duy Nhanh Và Chậm", price: 239000, image: "https://placehold.co/400x300/7c3aed/ffffff?text=Tu+Duy+Nhanh+Cham", category: "Kỹ năng sống", stock: 10 },
];
