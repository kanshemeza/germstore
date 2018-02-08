import { Component, OnInit, Input } from '@angular/core';

import {cartmodel} from '../../cartmodel';

import{GermModel} from '../../germ-model'


@Component({
  selector: 'app-germ',
  templateUrl: './germ.component.html',
  styleUrls: ['./germ.component.css']
})
export class GermComponent implements OnInit {
    @Input() germ : GermModel;
    @Input() cart: cartmodel;
    
    addToCart(){
        this.germ.inventory = this.germ.inventory-1;
        this.cart.totalquantity = this.cart.totalquantity + 1;
        
    }

  constructor() { }

  ngOnInit() {
  }

}
