import { useState, type FC } from 'react';
import './styles.scss';
import bannerImage from '../../assets/banner/Rectangle 250.png';
import ProductPopup from '../ProductPopup';

// "Ver produto" só abre o ProductPopup, sem uso de rota
const Banner: FC = () => {
  const [productPopupOpen, setProductPopupOpen] = useState(false);

  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="banner__overlay" aria-hidden />
      <div className="container banner__artboard">
        <h1 className="banner__title">
          Venha conhecer nossas
          <br />
          promoções
        </h1>
        <p className="banner__subtitle">
          <span className="banner__subtitle-discount">50% Off</span>{' '}
          <span className="banner__subtitle-regular">nos produtos</span>
        </p>
        <button
          type="button"
          className="banner__cta"
          onClick={() => setProductPopupOpen(true)}
        >
          Ver produto
        </button>
      </div>
      <ProductPopup
        isOpen={productPopupOpen}
        onClose={() => setProductPopupOpen(false)}
      />
    </section>
  );
};

export default Banner;
