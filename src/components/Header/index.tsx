import { type FC } from 'react';
import './styles.scss';
import ShieldCheck from '../../assets/header/ShieldCheck.svg';
import Truck from '../../assets/header/ShieldCheck.svg';
import CreditCard from '../../assets/header/ShieldCheck.svg';
import MagnifyingGlass from '../../assets/header/MagnifyingGlass.svg';
import Heart from '../../assets/header/Heart.svg';
import UserCircle from '../../assets/header/UserCircle.svg';
import ShoppingCart from '../../assets/header/ShoppingCart.svg';
import Logo from '../../assets/header/Logo.png';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__top-bar" aria-label="Institucional e benefícios">
        <div className="container-top">
          <div className="info-item">
            <img src={ShieldCheck} alt="Segurança" />
            <p>Compra <span>100% segura</span></p>
          </div>
          <div className="info-item">
            <img src={Truck} alt="Frete" />
            <p><span>Frete grátis</span> acima de R$ 200</p>
          </div>
          <div className="info-item">
            <img src={CreditCard} alt="Pagamento" />
            <p><span>Parcele</span> suas compras</p>
          </div>
        </div>
      </div>

      <div className="header__main">
        <div className="container">
          <img src={Logo} alt="Econverse" className="logo" />
          
          <div className="search-bar">
            <input type="text" placeholder="O que você está buscando?" />
            <button><img src={MagnifyingGlass} alt="Buscar" /></button>
          </div>

          <div className="actions">
            <img src={Heart} alt="Favoritos" />
            <img src={UserCircle} alt="Minha Conta" />
            <img src={ShoppingCart} alt="Carrinho" />
          </div>
        </div>
      </div>

      <nav className="header__nav" aria-label="Categorias da loja">
        <div className="container">
          <ul>
            <li>Todas Categorias</li>
            <li>Supermercado</li>
            <li>Livros</li>
            <li>Moda</li>
            <li>Lançamentos</li>
            <li>Ofertas do dia</li>
            <li>Assinatura</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;