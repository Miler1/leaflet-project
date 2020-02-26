import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaService } from '../pessoa.service';
import Pessoa from '../pessoa';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { 
  MatDialogConfig, 
  MatDialog,
  MatTableDataSource, 
  MatSort, 
  MatPaginator, 
  DateAdapter,
  MAT_DATE_FORMATS} from '@angular/material';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { EventEmitterService } from '../services/event-emitter.service';
import { NgxSpinnerService } from "ngx-spinner";
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2'; // ES6 Modules or TypeScript
import { AppDateAdapter, APP_DATE_FORMATS } from '../format-datepicker';
// import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.css'],
  providers:[DatePipe,
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}]
})
export class PessoasListComponent implements OnInit, AfterViewInit {

  pessoa: Pessoa;
  pessoas: Observable<Pessoa[]>;
  submitted = false;
  estados = [];
  closeResult: string;
  reload: boolean;
  angForm: FormGroup;
  dataSource = new MatTableDataSource<Pessoa>();
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'dataNascimento', 'peso', 'uf', 'actions_upd', 'actions_del'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  renderedData: Pessoa[];

  constructor(private pessoaService: PessoaService, 
              private fb: FormBuilder, 
              public dialog: MatDialog,
              private spinner: NgxSpinnerService,
              public datepipe: DatePipe) { 
    EventEmitterService.get('reloadData').subscribe(data => this.reloadData());
  }

  ngOnInit() {
    this.reloadData();
  }

  ngAfterViewInit(): void {
    this.dataSource.connect().subscribe(d => this.renderedData = d);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.renderedData;
  }

  deletePessoa(id) {
    Swal.fire({
      // title: 'Pergunta',
      text: 'Deseja deletar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        this.pessoaService.deletePessoa(id)
        .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log(error));
        Swal.fire(
          '',
          'Este registro foi deletado com sucesso!',
          'success'
        )
      }
    });
  }

  reloadData() {
    this.spinner.show();
    this.pessoas = this.pessoaService.getPessoasList();
    this.pessoas.subscribe(data => { console.log(data); this.dataSource.data = data as Pessoa[] });
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

  openDialog(pessoa = null) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    if (pessoa != undefined) {

      dialogConfig.data = {
        id: pessoa.id,
        nome: pessoa.nome,
        cpf: pessoa.cpf,
        dataNascimento: pessoa.dataNascimento,
        peso: pessoa.peso,
        uf: pessoa.uf
      }
    } else {

      dialogConfig.data = {
        id: '',
        nome: '',
        cpf: '',
        dataNascimento: '',
        peso: '',
        uf: ''
      }
    }

    this.dialog.open(EditDialogComponent, dialogConfig);
    
  }

}
