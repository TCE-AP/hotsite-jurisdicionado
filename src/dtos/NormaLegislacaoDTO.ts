export default interface NormaLegislacaoDTO {
    id: number;
    numero: number;
    exercicio: string;
    titulo: string;
    tipo: number;
    tipo_nome: string;
    descricao: string;
    arquivo: string;
    prestacao_contas: boolean | null;
}
