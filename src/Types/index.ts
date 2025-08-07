export interface CardProps{
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
    imagemExemploBoolean: boolean;
    imagemExemplo: string;
}

export interface PillUnity{
    id: number;
    nome: string;
    selecionado: boolean;
}

export interface Card{
    id: number;
    nome: string;
    linguagem: string[];
    link:string;
    imagem: string;
}