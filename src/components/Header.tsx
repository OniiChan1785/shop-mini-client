export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo" aria-label="BookMini – Trang chủ">
          <span className="logo-icon" aria-hidden="true">📚</span>
          <span>
            Book<span className="logo-accent">Mini</span>
          </span>
        </a>
        <nav className="nav" aria-label="Điều hướng chính">
          <a href="/" className="active">Trang chủ</a>
          <a href="/products">Sách</a>
          <a href="/about">Giới thiệu</a>
        </nav>
        <a href="/cart" className="cart-link">
          <span aria-hidden="true">🛒</span>
          <span className="cart-text">Giỏ hàng</span>
          <span className="cart-count">0</span>
        </a>
      </div>
    </header>
  );
}
