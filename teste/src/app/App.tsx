import { Routes } from "./routes";
import { Imagem } from "./pages/imagem/Imagem";
import { Imagem2 } from "./pages/imagem/Imagem";

export const App = () => {
  return (
    <div>
      <Routes />
      <Imagem />
      <Imagem2 />
    </div>
  );
}