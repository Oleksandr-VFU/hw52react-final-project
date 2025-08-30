
import React from 'react';

const logoUrl = "https://cdn-icons-png.flaticon.com/512/1087/1087815.png"; // сучасний логотип електромобіля

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
  <img src={logoUrl} alt="ElectroCars Logo" className="home-logo" />
        <h1 className="home-title">Сучасні електромобілі — Ваш новий стиль життя</h1>
        <p className="home-subtitle">Виберіть авто майбутнього вже сьогодні!</p>
      </header>

      <section className="home-description">
        <p>
          Наш автосалон пропонує найкращий вибір сучасних електромобілів, кросоверів, купе та пікапів. Всі авто — з офіційною гарантією, сервісом та швидкою доставкою по Україні.
        </p>
      </section>

      <section className="home-benefits">
        <h2>Чому обирають нас?</h2>
        <ul>
          <li>Тільки перевірені моделі від світових брендів</li>
          <li>Офіційна гарантія та сервіс</li>
          <li>Безкоштовна консультація та тест-драйв</li>
          <li>Індивідуальний підбір авто під ваші потреби</li>
          <li>Швидка доставка по всій Україні</li>
        </ul>
      </section>

      <section className="home-cta">
        <h2>Залиште заявку на консультацію</h2>
        <p>Наш менеджер зв'яжеться з вами протягом 15 хвилин!</p>
        <div className="home-contact">
          <p><strong>Телефон:</strong> <a href="tel:+380441234567">+38 (044) 123-45-67</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@electrocars.ua">info@electrocars.ua</a></p>
          <p><strong>Адреса:</strong> м. Київ, вул. Електромобільна, 1</p>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2025 ElectroCars — сучасні авто для сучасних людей</p>
      </footer>
    </div>
  );
};

export default Home;