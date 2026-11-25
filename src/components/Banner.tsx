export default function Banner() {
  return (
    <section className="container">
      <div className="banner">
        <div className="banner-text">
          <span className="banner-tag">Hội sách cuối năm</span>
          <h1>Giảm đến 50% cho hàng ngàn đầu sách</h1>
          <p>Văn học, kỹ năng sống, công nghệ, thiếu nhi – miễn phí giao hàng cho đơn từ 200.000 đ.</p>
          <a href="#sach-noi-bat" className="btn btn-light">
            Mua ngay →
          </a>
        </div>
        <img
          className="banner-image"
          src="/images/banner-books.svg"
          alt="Chồng sách minh họa"
          width={320}
          height={240}
        />
      </div>
    </section>
  );
}
