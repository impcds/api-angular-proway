export class Curso{
    // o sinal de interrogação em idCurso significa que aquele parâmetro pode ou não ser passado
    // ao criar o objeto
    nomeCurso!: string | null;
    valorCurso!: number | null;
    idCurso?:number

}
export interface ICurso {
    idCurso: number;
    cursoNome: string;
    cursoValor: number;
}
