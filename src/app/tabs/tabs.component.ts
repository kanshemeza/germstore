import { Component, OnInit, Input } from '@angular/core';
import{GermModel} from '../../germ-model'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
@Input() germ: GermModel;
    tab: number;
    
    setTab(selectedTab: number) {
        this.tab = selectedTab;
    }
  constructor() { }

  ngOnInit() {
      this.tab = 1;
  }

}
