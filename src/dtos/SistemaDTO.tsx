interface Secao {
  id: number;
  titulo: string;
  descricao: string;
  cor: string;
  descricaoClean: string;
}

interface Video {
  titulo: string;
  link: string;
}

interface Pergunta {
  pergunta: string;
  resposta: string;
}

export default interface SistemaDTO {
  id: number;
  titulo: string;
  sigla: string;
  slug: string;
  capa: string;
  descricao: string;
  link: string;
  descricaoClean: string;
  secoes: Secao[];
  videos: Video[];
  perguntas: Pergunta[];
}
