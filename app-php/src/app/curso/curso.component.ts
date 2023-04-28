import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  // url onde estão os arquivos do backend
  url = "http://localhost:81/api/php/";

  // vetor para armazenar os cursos
  vetor: Curso[] = [];

  curso = new Curso();

  constructor(
    private http: HttpClient,
    private cursoServico: CursoService
  ){}

  ngOnInit() {
    this.selecionar()
  }

  cadastrar(){
    this.cursoServico.cadastrarCurso(this.curso).subscribe(
      (res: Curso[]) => {
        // adicionar dados ao vetor
        this.vetor = res;
        // limpar os atributos do objeto
        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;
        // atualiza a lista no front-end
        this.selecionar()
      }
    )
  }

  selecionar(){
    this.cursoServico.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
    // alert('selecionar');
  }

  editar(){
    this.cursoServico.atualizarCurso(this.curso).subscribe(
      (res) => {
        this.vetor = res;

        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;

        this.selecionar();
      }
    )
  }

  excluir(){
    this.cursoServico.removerCurso(this.curso).subscribe(
      (res: Curso[]) => {
        this.vetor = res;

        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;
      }
    )
  }

  // selecionar curso específico
  selecionarCurso(c:Curso){
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }

}
