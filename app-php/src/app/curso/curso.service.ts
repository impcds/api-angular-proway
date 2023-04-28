import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  // url onde estão os arquivos do backend
  url = "http://localhost:81/api/php/";

  // vetor para armazenar os cursos
  vetor!: Curso[];

  curso = new Curso();

  constructor(
    private http: HttpClient
  ) {}

  obterCursos():Observable<Curso[]>{
    return this.http.get(this.url+"listar").pipe(
      map((res:any) => {
        this.vetor = res['cursos'];
        return this.vetor;
      })
      )
    }

    cadastrarCurso(c:Curso):Observable<Curso[]>{
      return this.http.post(this.url+'cadastrar', {cursos:c}).pipe(
        map((res: any) => {
          this.vetor.push(res['cursos']);
          return this.vetor;
        })
      )
    }

    removerCurso(c: Curso):Observable<Curso[]>{
      const params = new HttpParams().set("idCurso", c.idCurso!.toString());
      return this.http.delete(this.url + "excluir", {params: params}).pipe(
       map((res) => {
        const filtro = this.vetor.filter((curso) => {
          return +curso['idCurso']! !== +c.idCurso!;
        });
        return this.vetor = filtro;
       }) 
      )
    }

    atualizarCurso(c:Curso):Observable<Curso[]>{
      // executa a alteração via URL
      return this.http.put(this.url+'alterar', {cursos: c})

      // percorre o vetor para saber qual é o curso alterado
      .pipe(map((res) => {
        const cursoAlterado = this.vetor.find((item) => {
          return +item['idCurso']! === +['idCurso'];
        });
      // altera o valor do vetor local
      if(cursoAlterado){
        cursoAlterado['nomeCurso'] = c['nomeCurso'];
        cursoAlterado['valorCurso'] = c['valorCurso'];
      }
      return this.vetor;
      }))
    }
}
