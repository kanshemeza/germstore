import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
    //{ path: '', component: HomeComponent },
    { path: 'cart', component: CartComponent },
    { path: 'account', component: AccountComponent }
];
	 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}