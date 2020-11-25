export interface SecaoDTO {
  id: number;
  titulo: string;
  descricao: string;
  cor: string;
  descricaoClean: string;
}

export interface VideoDTO {
  id: number;
  titulo: string;
  link: string;
}

export interface PerguntaDTO {
  id: number;
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
  secoes: SecaoDTO[];
  videos: VideoDTO[];
  perguntas: PerguntaDTO[];
}
