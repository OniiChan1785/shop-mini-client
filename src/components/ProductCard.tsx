import type { Product } from "../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const outOfStock = product.stock === 0;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {outOfStock && <span className="badge-out">Hết hàng</span>}
      </div>
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-price">
          {product.price.toLocaleString("vi-VN")} đ
        </p>
        <button className="btn" disabled={outOfStock}>
          {outOfStock ? "Tạm hết hàng" : "Thêm vào giỏ"}
        </button>
      </div>
    </div>
  );
}
