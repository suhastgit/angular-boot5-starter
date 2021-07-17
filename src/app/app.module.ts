import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/ui/header/header.component';
import { FooterComponent } from './common/ui/footer/footer.component';
import { BaseComponent } from './product/base/base.component';
import { HomeComponent } from './product/home/home.component';
import { ContactComponent } from './product/contact/contact.component';
import { NotfoundComponent } from './common/ui/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BaseComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
