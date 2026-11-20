import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GerenciaRolagem } from './components/GerenciaRolagem';
import { Home } from './paginas/Home';
import { BeReady } from './paginas/BeReady';
import { FocusClinica } from './paginas/FocusClinica';
import { rotas } from './conteudo';

export default function App() {
  return (
    <BrowserRouter>
      <GerenciaRolagem />
      <Routes>
        <Route path={rotas.home} element={<Home />} />
        <Route path={rotas.beready} element={<BeReady />} />
        <Route path={rotas.focusClinica} element={<FocusClinica />} />
        {/* Endereço que não existe: volta para a Home */}
        <Route path="*" element={<Navigate to={rotas.home} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
