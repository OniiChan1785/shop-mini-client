import type { Product } from "../data/products";

type Props = {
  product: Product;
};

const formatPrice = (value: number) => `${value.toLocaleString("vi-VN")} đ`;

export default function ProductCard({ product }: Props) {
  const outOfStock = product.stock === 0;
  const lowStock = product.stock > 0 && product.stock <= 5;
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <article className={`product-card${outOfStock ? " is-out" : ""}`}>
      <div className="product-image">
        <img src={product.image} alt={`Bìa sách ${product.name}`} loading="lazy" />
        {outOfStock && <span className="badge badge-out">Hết hàng</span>}
        {!outOfStock && discount > 0 && (
          <span className="badge badge-sale">-{discount}%</span>
        )}
      </div>
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name" title={product.name}>
          {product.name}
        </h3>
        <p className="product-author">{product.author}</p>
        <div className="product-price-row">
          <span className="product-price">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="product-old-price">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
        <p className={`product-stock${lowStock ? " low" : ""}${outOfStock ? " out" : ""}`}>
          {outOfStock
            ? "Tạm hết hàng"
            : lowStock
              ? `Chỉ còn ${product.stock} cuốn`
              : "Còn hàng"}
        </p>
        <button className="btn" disabled={outOfStock}>
          {outOfStock ? "Hết hàng" : "Thêm vào giỏ"}
        </button>
      </div>
    </article>
  );
}
