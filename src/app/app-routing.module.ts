import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'}, //localhost://4200
  { path: 'login', component: LoginComponent}, 
  { path: 'home', component: HomeComponent}, //localhost://4200/home
  { path:'aboutus', component: AboutusComponent }, // localhost://4200/aboutus
  { path:'contact', component: ContactComponent }, // localhost://4200/contact
  { path:'product', component: ProductComponent, children: [ 
    { path: 'laptop', component: LaptopComponent},
    { path: 'tv', component: TvComponent}, //localhost:4200/product/tv
    { path: 'tablet', component: TabletComponent},
    { path: 'washingmachine', component: WashingmachineComponent}
  ] }, // localhost://4200/product
  { path: 'post', component: DemopostComponent},
  {path: 'postdetails/:id', component: PostdetailsComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
