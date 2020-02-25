import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Pessoa from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private baseUrl = 'http://localhost:8080/api/pessoas';
  private ufUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  
  constructor(private http: HttpClient) { }

  getPessoa(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPessoa(pessoa: Pessoa): Observable<any> {
    console.log(pessoa);
    return this.http.post(this.baseUrl, pessoa);
  }

  updatePessoa(id: number, pessoa: Pessoa): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, pessoa);
  }

  deletePessoa(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getPessoasList(): Observable<any> {
    console.log(this.http.get(this.baseUrl));
    return this.http.get(this.baseUrl);
  }

  getPessoaByid(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  getUf():Observable<any> {
    console.log('uf');
    return this.http.get(this.ufUrl);
  }

}
