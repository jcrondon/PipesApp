import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      //opcion principal
      {
          label: 'Pipes de Angular',
          icon: 'pi pi-desktop',
          //opcion nivel 2
          items: [
              {
                label: 'Textos y Fechas', 
                icon: 'pi pi-align-left',
                routerLink: ['']
              },
              {
                label: 'Números',
                icon: 'pi pi-dollar',
                routerLink: ['numeros']
              },
              {
                label: 'No Comunes',
                icon: 'pi pi-globe',
                routerLink: ['no-comunes']
              },
              {
                label: 'Ordenar',
                icon: 'pi pi-globe',
                routerLink: ['ordenar']
              }
          ]
      },
      //opcion principal
      {
          label: 'Pipes Personalizados',
          icon: 'pi pi-cog',
          //opcion nivel 2
          items: [
              {label: 'Delete N2', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh N2', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  }

}

/*
this.items = [
  //opcion principal
  {
      label: 'File N1',
      //opcion nivel 2
      items: [{
              label: 'New N2', 
              icon: 'pi pi-fw pi-plus',
              //opcion nivel 3
              items: [
                  {label: 'Project N3'},
                  {label: 'Other N3'},
              ]
          },
          {label: 'Open N2'},
          {label: 'Quit N2'}
      ]
  },
  //opcion principal
  {
      label: 'Edit N1',
      icon: 'pi pi-fw pi-pencil',
      //opcion nivel 2
      items: [
          {label: 'Delete N2', icon: 'pi pi-fw pi-trash'},
          {label: 'Refresh N2', icon: 'pi pi-fw pi-refresh'}
      ]
  }
];
*/