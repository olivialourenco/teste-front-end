import { useId, type FC } from 'react';
import './styles.scss';
import logoGrupo8 from '../../assets/newsletter_footer/Logo.png';
import iconInstagram from '../../assets/newsletter_footer/instagram.svg';
import iconFacebook from '../../assets/newsletter_footer/facebook.svg';
import iconLinkedin from '../../assets/newsletter_footer/linkedin.svg';

const newsletterSubtitle =
  'Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.';
const aboutText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const legalText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const NewsletterFooter: FC = () => {
  const termsId = useId();

  return (
    <div className="newsletter-footer">
      <section
        className="newsletter-footer__newsletter"
        aria-labelledby="newsletter-footer-heading"
      >
        <div className="container newsletter-footer__newsletter-inner">
          <div className="newsletter-footer__intro">
            <h2
              className="newsletter-footer__heading"
              id="newsletter-footer-heading"
            >
              Inscreva-se na nossa newsletter
            </h2>
            <p className="newsletter-footer__lede">{newsletterSubtitle}</p>
          </div>
          <form
            className="newsletter-footer__form"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <div className="newsletter-footer__fields">
              <input
                className="newsletter-footer__input"
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                autoComplete="name"
              />
              <input
                className="newsletter-footer__input"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                autoComplete="email"
                inputMode="email"
              />
              <button className="newsletter-footer__submit" type="submit">
                INSCREVER
              </button>
            </div>
            <div className="newsletter-footer__terms-wrap">
              <input
                className="newsletter-footer__checkbox"
                type="checkbox"
                name="termos"
                id={termsId}
                required
              />
              <label
                className="newsletter-footer__terms-label"
                htmlFor={termsId}
              >
                Aceito os termos e condições
              </label>
            </div>
          </form>
        </div>
      </section>

      <footer className="newsletter-footer__main">
        <div className="container newsletter-footer__main-inner">
          <div className="newsletter-footer__brand">
            <div className="newsletter-footer__logo-wrap">
              <img
                src={logoGrupo8}
                alt="Econverse"
                className="newsletter-footer__logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="newsletter-footer__about">{aboutText}</p>
            <ul className="newsletter-footer__socials">
              <li>
                <a
                  className="newsletter-footer__social"
                  href="#"
                  aria-label="Instagram"
                >
                  <img
                    src={iconInstagram}
                    alt=""
                    width={24}
                    height={24}
                    className="newsletter-footer__social-icon"
                  />
                </a>
              </li>
              <li>
                <a
                  className="newsletter-footer__social"
                  href="#"
                  aria-label="Facebook"
                >
                  <img
                    src={iconFacebook}
                    alt=""
                    width={24}
                    height={24}
                    className="newsletter-footer__social-icon"
                  />
                </a>
              </li>
              <li>
                <a
                  className="newsletter-footer__social"
                  href="#"
                  aria-label="LinkedIn"
                >
                  <img
                    src={iconLinkedin}
                    alt=""
                    width={24}
                    height={24}
                    className="newsletter-footer__social-icon"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="newsletter-footer__rule" aria-hidden="true" />

          <div className="newsletter-footer__nav">
            <nav
              className="newsletter-footer__nav-block"
              aria-label="Institucional"
            >
              <h3 className="newsletter-footer__nav-title">Institucional</h3>
              <ul className="newsletter-footer__nav-list">
                <li>
                  <a className="newsletter-footer__link" href="#">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a className="newsletter-footer__link" href="#">
                    Movimento
                  </a>
                </li>
                <li>
                  <a className="newsletter-footer__link" href="#">
                    Trabalhe conosco
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="newsletter-footer__nav-block"
              aria-label="Ajuda"
            >
              <h3 className="newsletter-footer__nav-title">Ajuda</h3>
              <ul className="newsletter-footer__nav-list">
                <li>
                  <a className="newsletter-footer__link" href="#">
                    Suporte
                  </a>
                </li>
                <li>
                  <a className="newsletter-footer__link" href="#">
                    Fale Conosco
                  </a>
                </li>
                <li>
                  <a className="newsletter-footer__link" href="#">
                    Perguntas Frequentes
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="newsletter-footer__nav-block"
              aria-label="Termos e políticas"
            >
              <h3 className="newsletter-footer__nav-title">Termos</h3>
              <ul className="newsletter-footer__nav-list">
                <li>
                  <a
                    className="newsletter-footer__link newsletter-footer__link--poppins"
                    href="#"
                  >
                    Termos e Condições
                  </a>
                </li>
                <li>
                  <a
                    className="newsletter-footer__link newsletter-footer__link--poppins"
                    href="#"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    className="newsletter-footer__link newsletter-footer__link--poppins"
                    href="#"
                  >
                    Troca e Devolução
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>

      <div className="newsletter-footer__legal">
        <p className="newsletter-footer__legal-text">{legalText}</p>
      </div>
    </div>
  );
};

export default NewsletterFooter;
