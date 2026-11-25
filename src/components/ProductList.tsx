import ProductCard from "./ProductCard";
import type { Product } from "../data/products";

type Props = {
  title: string;
  items: Product[];
};

export default function ProductList({ title, items }: Props) {
  return (
    <section className="container section" id="sach-noi-bat">
      <div className="section-head">
        <h2 className="section-title">{title}</h2>
        <span className="section-sub">{items.length} cuốn sách</span>
      </div>
      <div className="product-grid">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
