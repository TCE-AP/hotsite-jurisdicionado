export interface MenuTreeItem {
  id: number;
  titulo: string;
  descricao?: string;
  novaJanela: number;
  paginaId?: number;
  child?: MenuTreeItem[];
  url: string;
}

export default interface MenuTree {
  tree: MenuTreeItem[];
}
