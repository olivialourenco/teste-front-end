import { type FC } from 'react';
import './styles.scss';
import bannerImage from '../../assets/banner_apoio1/image 45.png';

const loremExcerpt = 'Lorem ipsum dolor sit amet, consectetur';

const SupportBanner: FC = () => {
  return (
    <section
      className="support-banner"
      aria-label="Banners de apoio"
    >
      <div className="container support-banner__inner">
        <div className="support-banner__row">
          {[0, 1].map((key) => (
            <article key={key} className="support-banner__card">
              <div
                className="support-banner__media"
                style={{ backgroundImage: `url(${bannerImage})` }}
                role="img"
                aria-hidden="true"
              />
              <div className="support-banner__overlay" aria-hidden="true" />
              <div className="support-banner__content">
                <h2 className="support-banner__title">Parceiros</h2>
                <p className="support-banner__text">{loremExcerpt}</p>
                <a className="support-banner__cta" href="#">
                  Confira
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportBanner;
