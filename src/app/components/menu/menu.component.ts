import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  public numeros: Array<number>
  constructor() {
    this.numeros = []
  }
  ngOnInit(): void {
    for (let i = 1; i <= 6; i++) {
      this.numeros.push(Math.floor(Math.random() * 101))
    }
  }

}
