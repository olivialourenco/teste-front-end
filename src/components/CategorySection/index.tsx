import { type FC } from 'react';
import './styles.scss';
import categoria1 from '../../assets/categoria/Group 2410.svg';
import categoria2 from '../../assets/categoria/Group 2404.svg';
import categoria3 from '../../assets/categoria/Group 2405.svg';
import categoria4 from '../../assets/categoria/Group 2406.svg';
import categoria5 from '../../assets/categoria/Group 2407.svg';
import categoria6 from '../../assets/categoria/Group 2408.svg';
import categoria7 from '../../assets/categoria/Group 2409.svg';

const CATEGORIES: { id: string; image: string; label: string }[] = [
  { id: 'tecnologia', image: categoria1, label: 'Tecnologia' },
  { id: 'supermercado', image: categoria2, label: 'Supermercado' },
  { id: 'bebidas', image: categoria3, label: 'Bebidas' },
  { id: 'ferramentas', image: categoria4, label: 'Ferramentas' },
  { id: 'saude', image: categoria5, label: 'Saúde' },
  { id: 'esportes', image: categoria6, label: 'Esportes e Fitness' },
  { id: 'moda', image: categoria7, label: 'Moda' },
];

const CategorySection: FC = () => {
  return (
    <section className="category-section" aria-label="Compre por categoria">
      <div className="container category-section__inner">
        <div className="category-section__row">
          {CATEGORIES.map((item) => (
            <a
              key={item.id}
              className="category-section__item"
              href="#"
              aria-label={item.label}
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="category-section__img"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
