import Image from "next/image";
import { Container } from "../components/container";
import WebInfo from "../../public/office.jpg";

export default function SobreNos() {
  return (
    <Container>
      <h1 className="py-8 text-4xl font-bold text-zinc-800">Sobre a WebInfo</h1>
      <Image src={WebInfo} alt="Imagem de um computador escrito WEB INFO" className=""/>
      <p className="text-lg py-6">
        Bem-vindo à <span className="font-semibold">WebInfo</span>, sua fonte principal para se manter atualizado
        sobre o universo da tecnologia! Aqui, nossa missão é simplificar o
        complexo, trazendo notícias frescas, análises e tendências sobre
        inovações que impactam nosso dia a dia. Desde lançamentos de produtos e
        avanços em IA até dicas de segurança digital e insights sobre o futuro
        das tecnologias, oferecemos um conteúdo pensado para todos — do
        entusiasta ao profissional.
        <br /><br />
        Acompanhe nossas atualizações e explore o que há de novo no mundo tech
        com a gente!
      </p>
    </Container>
  );
}
