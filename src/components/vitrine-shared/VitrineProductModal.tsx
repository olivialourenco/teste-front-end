import { useCallback, useEffect, useId, type FC } from 'react';
import { createPortal } from 'react-dom';
import { formatBRLPrice } from './api';
import type { VitrineApiProduct } from './types';
import './vitrineModal.scss';

type VitrineProductModalProps = {
  product: VitrineApiProduct | null;
  onClose: () => void;
};

const VitrineProductModal: FC<VitrineProductModalProps> = ({
  product,
  onClose,
}) => {
  const modalTitleId = useId();

  const closeModal = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [product, closeModal]);

  useEffect(() => {
    if (!product) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [product]);

  if (!product) return null;

  return createPortal(
    <div className="vitrine-modal-root">
      <div
        className="vitrine-modal__backdrop"
        onClick={closeModal}
        aria-hidden="true"
      />
      <div
        className="vitrine-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={modalTitleId}
      >
        <button
          type="button"
          className="vitrine-modal__close"
          onClick={closeModal}
          aria-label="Fechar"
        >
          <span className="vitrine-modal__close-line" aria-hidden />
          <span className="vitrine-modal__close-line" aria-hidden />
        </button>
        <div className="vitrine-modal__image-wrap">
          <img
            className="vitrine-modal__image"
            src={product.photo}
            alt={product.productName}
          />
        </div>
        <h3 className="vitrine-modal__title" id={modalTitleId}>
          {product.productName}
        </h3>
        <p className="vitrine-modal__price">
          {formatBRLPrice(product.price)}
        </p>
        <p className="vitrine-modal__desc">{product.descriptionShort}</p>
      </div>
    </div>,
    document.body
  );
};

export default VitrineProductModal;
