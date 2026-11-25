export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="/" className="logo">
            <span className="logo-icon" aria-hidden="true">📚</span>
            <span>
              Book<span className="logo-accent">Mini</span>
            </span>
          </a>
          <p className="footer-desc">
            Nhà sách online nhỏ xinh – sách hay, giá tốt, giao nhanh toàn quốc.
          </p>
        </div>
        <div>
          <h4>Khám phá</h4>
          <a href="/">Trang chủ</a>
          <a href="/products">Sách</a>
          <a href="/about">Giới thiệu</a>
        </div>
        <div>
          <h4>Liên hệ</h4>
          <p>Hotline: 1900 0000</p>
          <p>Email: hotro@bookmini.vn</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {year} BookMini · Bài tập môn Công nghệ lập trình hiện đại</p>
      </div>
    </footer>
  );
}
