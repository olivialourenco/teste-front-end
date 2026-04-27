import { useCallback, useEffect, useId, useState, type FC } from 'react';
import { createPortal } from 'react-dom';
import './styles.scss';
import { formatBRLPrice } from '../vitrine-shared/api';
import type { VitrineApiProduct } from '../vitrine-shared/types';
import popupImage from '../../assets/popup/Grupo de máscara 20 1.png';

const STATIC_DESCRIPTION =
  'Many desktop publishing packages and web page editors now many desktop publishing';

export type ProductPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  /** Vitrines passam o item da API; sem isso mantemos o placeholder do layout (ex.: banner). */
  product?: VitrineApiProduct | null;
};

const ProductPopup: FC<ProductPopupProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const [qty, setQty] = useState(1);
  const headingId = useId();

  const dec = useCallback(() => {
    setQty((q) => Math.max(1, q - 1));
  }, []);

  const inc = useCallback(() => {
    setQty((q) => Math.min(99, q + 1));
  }, []);

  // Escape fecha o modal; o listener fica ativo só com o popup aberto
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Trava o scroll da página enquanto o overlay está ativo
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Toda abertura volta a quantidade 1
  useEffect(() => {
    if (!isOpen) setQty(1);
  }, [isOpen]);

  const displayName = product?.productName ?? 'LOREM IPSUM DOLOR SIT AMET';
  const displayPrice =
    product != null
      ? formatBRLPrice(product.price)
      : 'R$ 1.499,90';
  const imageSrc = product?.photo ?? popupImage;
  const descriptionText = product?.descriptionShort ?? STATIC_DESCRIPTION;
  const imageAlt = product?.productName ?? '';

  if (!isOpen) return null;

  // Portal no document.body para o modal ficar acima do hero/banner
  return createPortal(
    <div className="product-popup-root">
      <div
        className="product-popup__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="product-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
      >
        <button
          type="button"
          className="product-popup__close"
          onClick={onClose}
          aria-label="Fechar"
        >
          <span className="product-popup__close-line" aria-hidden />
          <span className="product-popup__close-line" aria-hidden />
        </button>
        <div className="product-popup__body">
          <div className="product-popup__media">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="product-popup__image"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="product-popup__col">
            <div className="product-popup__stack">
              <div className="product-popup__titles">
                <p className="product-popup__name" id={headingId}>
                  {displayName}
                </p>
                <p className="product-popup__price">{displayPrice}</p>
              </div>
              <div className="product-popup__blurb">
                <p className="product-popup__description">{descriptionText}</p>
                <a className="product-popup__more" href="#">
                  Veja mais detalhes do produto &gt;
                </a>
              </div>
            </div>
            <div className="product-popup__actions">
              <div className="product-popup__stepper">
                <button
                  type="button"
                  className="product-popup__step product-popup__step--minus"
                  onClick={dec}
                  aria-label="Diminuir quantidade"
                />
                <span className="product-popup__qty" aria-live="polite">
                  {String(qty).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  className="product-popup__step product-popup__step--plus"
                  onClick={inc}
                  aria-label="Aumentar quantidade"
                />
              </div>
              <button
                type="button"
                className="product-popup__buy"
                onClick={onClose}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProductPopup;
