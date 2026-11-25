import type { Product } from "../data/products";

type Props = {
  items: Product[];
};

// Biểu tượng cho từng danh mục
const icons: Record<string, string> = {
  "Kỹ năng sống": "🌱",
  "Văn học": "📖",
  "Công nghệ": "💻",
  "Thiếu nhi": "🧸",
};

export default function CategoryList({ items }: Props) {
  // Lấy danh mục không trùng lặp từ mảng sản phẩm
  const categories = [...new Set(items.map((p) => p.category))];

  return (
    <section className="container section">
      <h2 className="section-title">Danh mục</h2>
      <div className="category-list">
        {categories.map((c) => {
          const count = items.filter((p) => p.category === c).length;
          return (
            <a key={c} href="#sach-noi-bat" className="category-item">
              <span className="category-icon" aria-hidden="true">
                {icons[c] ?? "📚"}
              </span>
              <span className="category-name">{c}</span>
              <span className="category-count">{count} cuốn</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
