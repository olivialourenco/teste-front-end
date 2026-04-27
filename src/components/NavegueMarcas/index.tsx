import { type FC } from 'react';
import './styles.scss';
import logoMarca from '../../assets/navegue/Logo.png';

const NavegueMarcas: FC = () => {
  return (
    <section className="navegue-marcas" aria-labelledby="navegue-marcas-heading">
      <div className="container navegue-marcas__inner">
        <h2 className="navegue-marcas__title" id="navegue-marcas-heading">
          Navegue por marcas
        </h2>
        <ul className="navegue-marcas__row">
          {[0, 1, 2, 3, 4].map((i) => (
            <li key={i} className="navegue-marcas__cell">
              <a
                className="navegue-marcas__item"
                href="#"
                aria-label={`Marca parceira ${i + 1}`}
              >
                <img
                  src={logoMarca}
                  alt=""
                  className="navegue-marcas__logo"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NavegueMarcas;
