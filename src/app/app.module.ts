import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GermComponent } from './germ/germ.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AvatarService } from './avatar.service';
import { AppRoutingModule } from './/app-routing.module';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    GermComponent,
    NavbarComponent,
    TabsComponent,
    ReviewsComponent,
    CartComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
  ],
  providers: [AvatarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
