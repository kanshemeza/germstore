import { Component, OnInit, Input } from '@angular/core';
import{GermModel} from '../../germ-model'
import{Reviewmodel} from '../../reviewmodel'
import {AvatarService} from '../avatar.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
    newReview: Reviewmodel
    @Input() germ: GermModel;
    
    
   submitClicked(){
     	this.germ.reviews.push(this.newReview);
        //TODO: This does not save reviews!  I should figure out a way to send my new review to a "persisted data store"
        this.ngOnInit();
    }
    
  constructor(private avatarService: AvatarService) { 
    }

  ngOnInit() {
      this.newReview = {
          id: -1, 
          createddate: "", 
          body: "", 
          rating: 5, 
          author: ""
      }
  }

}
