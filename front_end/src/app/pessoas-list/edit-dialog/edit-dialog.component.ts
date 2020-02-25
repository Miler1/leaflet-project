import { Component, OnInit, Inject } from '@angular/core';
import { PessoaService } from '../../pessoa.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, DateAdapter, MAT_DATE_FORMATS, MatSnackBar } from '@angular/material';
import Pessoa from '../../pessoa';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/format-datepicker';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class EditDialogComponent implements OnInit {
  form: FormGroup;
  pessoa: Pessoa;
  estados = [];
  submitted: boolean;
  date: Date;
  public mask = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  constructor(private pessoaService: PessoaService, 
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private _snackBar: MatSnackBar) { this.pessoa = data }
 
  ngOnInit() {
    this.dateFormat(this.pessoa.dataNascimento);
    this.form = this.fb.group({
      nome: new FormControl(this.pessoa.nome, Validators.required),
      cpf: new FormControl(this.pessoa.cpf, Validators.required),
      dataNascimento: new FormControl(this.date),
      peso: new FormControl(this.pessoa.peso),
      uf: new FormControl(this.pessoa.uf, Validators.required)
    });
    this.onGetUF();
  }

  dateFormat(date) {
    let a = date.toString().split("-").toString().split("T").toString().split(",");
    const year = parseInt(a[0]);
    const month = parseInt(a[1]);
    const day = parseInt(a[2]);
    return this.date = new Date(year, month-1, day, 0, 0, 0, 0);
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  onGetUF() {
    this.pessoaService.getUf()
    .subscribe(
        data => {
          this.estados = data;
        },
        error => alert(error),
        () => console.log("acesso a webapi get ok...")
    );
  }

  save(_id = null) {
    let p: any = {
      nome: this.form.get('nome').value,
      cpf: this.form.get('cpf').value,
      dataNascimento: this.form.get('dataNascimento').value,
      peso: this.form.get('peso').value,
      uf: this.form.get('uf').value 
    };
    
    if (_id > 0) {
      this.pessoaService
      .updatePessoa(_id, p)
      .subscribe(
        data => {
          this.pessoa = data as Pessoa;
          this.submitted = true;
          EventEmitterService.get('reloadData').emit();
        },
        error => {
          if (error.status == 0) {
            console.log(error.status)
            this._snackBar.open('Servidor está fora do ar!', 'Fechar');
          }
        });
    } else {
      this.pessoaService
        .createPessoa(p)
        .subscribe(
          data => {
          console.log(data);
          this.submitted = true;
          // this._snackBar.open('Novo registro inserido com sucesso!', 'Fechar');
          EventEmitterService.get('reloadData').emit();
        },
        error => {
          if (error.status == 0) {
            console.log(error.status)
            this._snackBar.open('Servidor está fora do ar!', 'Fechar');
        } });
    }
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

}
