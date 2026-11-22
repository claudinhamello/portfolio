import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GerenciaRolagem } from './components/GerenciaRolagem';
import { Home } from './paginas/Home';
import { BeReady } from './paginas/BeReady';
import { FocusClinica } from './paginas/FocusClinica';
import { FastMoney } from './paginas/FastMoney';
import { Placas } from './paginas/Placas';
import { rotas } from './conteudo';

export default function App() {
  return (
    <BrowserRouter>
      <GerenciaRolagem />
      <Routes>
        <Route path={rotas.home} element={<Home />} />
        <Route path={rotas.beready} element={<BeReady />} />
        <Route path={rotas.focusClinica} element={<FocusClinica />} />
        <Route path={rotas.fastMoney} element={<FastMoney />} />
        <Route path={rotas.placas} element={<Placas />} />
        {/* Endereço que não existe: volta para a Home */}
        <Route path="*" element={<Navigate to={rotas.home} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
