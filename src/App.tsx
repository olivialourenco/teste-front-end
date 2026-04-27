// Ordem = fluxo do layout Figma (header → conteúdo → rodapé)
import Header from './components/Header';
import Banner from './components/Banner';
import CategorySection from './components/CategorySection';
import Vitrine from './components/Vitrine';
import SupportBanner from './components/SupportBanner';
import SupportBanner2 from './components/SupportBanner2';
import Vitrine2 from './components/Vitrine2';
import NavegueMarcas from './components/NavegueMarcas';
import Vitrine3 from './components/Vitrine3';
import NewsletterFooter from './components/NewsletterFooter';
import { VitrineProductsProvider } from './components/vitrine-shared';

function App() {
  return (
    <VitrineProductsProvider>
      <main>
        <Header />
        <Banner />
        <CategorySection />
        <Vitrine />
        <SupportBanner />
        <Vitrine2 />
        <SupportBanner2 />
        <NavegueMarcas />
        <Vitrine3 />
        <NewsletterFooter />
      </main>
    </VitrineProductsProvider>
  );
}

export default App