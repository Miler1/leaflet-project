import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';
import { HereMapComponent } from './here-map/here-map.component';
import { HttpClientModule } from '@angular/common/http';
import { EditDialogComponent } from './pessoas-list/edit-dialog/edit-dialog.component';
import { TextMaskModule } from 'angular2-text-mask';
import { MatProgressSpinnerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule, MatSortModule } from '@angular/material';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFontAwesomeModule } from 'angular-font-awesome';


const appRoutes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: PessoasListComponent },
  { path: 'mapa', component: HereMapComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PessoasListComponent,
    EditDialogComponent,
    HereMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFontAwesomeModule,
    TextMaskModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditDialogComponent]
})
export class AppModule { }
