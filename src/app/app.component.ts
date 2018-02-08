import { Component, OnInit } from '@angular/core';
import{GermModel} from '../germ-model'
import { cartmodel } from '../cartmodel';
import { cartitemmodel } from '../cartitemmodel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
cart: cartmodel = {
totalprice: 0,
totalquantity: 0,
items: []
}
   constructor(private httpClient: HttpClient){
        
    }
    
    ngOnInit(){
        
        
       this.httpClient.get<GermModel[]>('/assets/germs.json').subscribe(results => {this.germs = results});      
    }
  
    
 germs : GermModel[];
    
}
