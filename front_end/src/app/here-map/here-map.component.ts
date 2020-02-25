import { Component, OnInit, SimpleChanges, ViewChild, ElementRef, Input } from '@angular/core';
import '../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'
import { Observable } from 'rxjs';
import { PessoaService } from '../pessoa.service';
import Pessoa from '../pessoa';

declare let L;
declare var H: any;

@Component({
    selector: 'here-map',
    templateUrl: './here-map.component.html',
    styleUrls: ['./here-map.component.css']
})
export class HereMapComponent implements OnInit {

	getEstados: Observable<Pessoa[]>;
	pessoas = [];
    
    public constructor(private pessoaService: PessoaService) { }

    public ngOnInit() {

        // Creating map options
         var mapOptions = {
            center: [-15.7782900,-47.9290900],
            zoom: 5
         }
         // Creating a map object
         var map = new L.map('map', mapOptions);

		// Creating a Layer object
		//  var layer = new L.TileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
		// 			maxZoom: 17,
		// 			attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
		// 		});

		//  // Adding layer to the map
		//  map.addLayer(layer);
		 
		 var layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					maxZoom: 17,
					attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
				});

         // Adding layer to the map
         map.addLayer(layer);

		 this.pessoaService
			 .getPessoasList()
			 .subscribe(pessoas => {
				this.pessoas = pessoas;
				this.pessoas.forEach(pessoa => {
         		console.log(pessoa);
         		console.log('teste');

         		switch (pessoa.uf) {
				  case 'DF':
				    var marker = L.marker([-15.7782900+Math.random()*0.01, -47.9290900+Math.random()*0.01]);
				    marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'GO':
				  	var marker = L.marker([-16.7624900+Math.random()*0.01, -49.2846900+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				  	break;
				  case 'SP':
				    var marker = L.marker([-23.5489000+Math.random()*0.01, -46.6388000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'MG':
				    var marker = L.marker([-19.9010000+Math.random()*0.01, -43.9892000+Math.random()*0.01]);
				    marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'ES':
				    var marker = L.marker([-19.5701000+Math.random()*0.01, -40.6384000+Math.random()*0.01]);
				    marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'RJ':
				    var marker = L.marker([-22.2484000+Math.random()*0.01, -42.3193000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'MT':
				    var marker = L.marker([-15.6230000+Math.random()*0.01, -56.0961000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'AM':
				    var marker = L.marker([-3.18430000+Math.random()*0.01, -59.9853000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'AP':
				    var marker = L.marker([1.230300000+Math.random()*0.01, -51.9433000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'RR':
				    var marker = L.marker([1.669600000+Math.random()*0.01, -61.5673000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'AC':
				    var marker = L.marker([-9.99450000+Math.random()*0.01, -67.8172000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'PA':
				    var marker = L.marker([-4.74930000+Math.random()*0.01, -52.8973000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'AL':
				  	var marker = L.marker([-9.79560000+Math.random()*0.01, -36.7382000+Math.random()*0.01]);
				  	marker.bindPopup('Nome: '+pessoa.nome);
				  	marker.addTo(map);
				  	break;
				  case 'RO':
				    var marker = L.marker([-10.9431000+Math.random()*0.01, -62.8277000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'MS':
				    var marker = L.marker([-20.4681000+Math.random()*0.01, -54.9316000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'MA':
				    var marker = L.marker([-5.20852900+Math.random()*0.01, -45.3930900+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'TO':
				    var marker = L.marker([-10.8855000+Math.random()*0.01, -48.3716000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'PI':
				    var marker = L.marker([-7.69920000+Math.random()*0.01, -42.5043000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'CE':
				    var marker = L.marker([-5.32640000+Math.random()*0.01, -39.7156000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'BA':
				    var marker = L.marker([-12.2852000+Math.random()*0.01, -41.9294000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'RN':
				    var marker = L.marker([-5.96570000+Math.random()*0.01, -36.5405000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'PB':
				    var marker = L.marker([-7.12190000+Math.random()*0.01, -36.7246000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'PE':
				    var marker = L.marker([-8.71130000+Math.random()*0.01, -37.1557000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'SE':
				    var marker = L.marker([-10.7469000+Math.random()*0.01, -37.3974000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'PR':
				    var marker = L.marker([-24.8066000+Math.random()*0.01, -51.5917000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'SC':
				    var marker = L.marker([-27.3717000+Math.random()*0.01, -50.2294000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  case 'RS':
				    var marker = L.marker([-29.8406000+Math.random()*0.01, -53.3056000+Math.random()*0.01]);
				 	marker.bindPopup('Nome: '+pessoa.nome);
				 	marker.addTo(map);
				    break;
				  default:
				    console.log('Nenhum cadastrado');
				}

         	});
         });

    }

}