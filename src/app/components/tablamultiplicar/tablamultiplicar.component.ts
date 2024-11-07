import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css'
})
export class TablamultiplicarComponent implements OnInit {
  public numero : number;
  public numeros : Array<number>
  constructor(private _activeRoute: ActivatedRoute) {
    this.numeros = []
    this.numero = 0
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.numero = parseInt(parametros['num'])
    })
    for (let i = 1; i <= 10; i++) {
      this.numeros.push(i)
    }
  }
}
