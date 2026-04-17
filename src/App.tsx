import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantSaintDenisPage from './pages/RestaurantSaintDenisPage';
import RestaurantAboukirPage from './pages/RestaurantAboukirPage';
import MenuSaintDenisPage from './pages/MenuSaintDenisPage';
import MenuAboukirPage from './pages/MenuAboukirPage';

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/restaurant-saint-denis" element={<RestaurantSaintDenisPage />} />
          <Route path="/restaurant-aboukir" element={<RestaurantAboukirPage />} />
          <Route path="/menu-saint-denis" element={<MenuSaintDenisPage />} />
          <Route path="/menu-aboukir" element={<MenuAboukirPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
