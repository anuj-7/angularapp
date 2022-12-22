import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstBoxComponent } from './first-box/first-box.component';
import { SecondBoxComponent } from './second-box/second-box.component';
import { ServersComponent } from './servers/servers.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AttriComponent } from './attri/attri.component';
import { CustDirDirective } from './cust-dir.directive';
import { AssignDirComponent } from './assign-dir/assign-dir.component';
import { DemoComponent } from './demo/demo.component';
import { SimpleTemplateFormComponent } from './simple-template-form/simple-template-form.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Servicecom1Component } from './servicecom1/servicecom1.component';
import { Servicecom2Component } from './servicecom2/servicecom2.component';
import { HttpClientModule } from '@angular/common/http';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { ApiDataComponent } from './api-data/api-data.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstBoxComponent,
    SecondBoxComponent,
    ServersComponent,
    DataBindingComponent,
    DemoDirectiveComponent,
    NgswitchComponent,
    AttriComponent,
    CustDirDirective,
    AssignDirComponent,
    DemoComponent,
    SimpleTemplateFormComponent,
    SimpleFormComponent,
    ReactiveFormComponent,
    Servicecom1Component,
    Servicecom2Component,
    PipedemoComponent,
    CountPipe,
    ApiDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
