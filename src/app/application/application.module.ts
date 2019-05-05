import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AjoutComponent } from './ajout/ajout.component';
import { EditComponent } from './edit/edit.component';
import { SearchPipe } from './pipes/search.pipe';
import { FilsComponent } from './container/fils/fils.component';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
export function HttpLoaderFactory(httpClient: HttpClient) {
return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}
@NgModule({
  declarations: [
    ApplicationComponent,
    NavbarComponent,
    SidebarComponent,
    ContainerComponent,
    FooterComponent,
    DashboardComponent,
    AjoutComponent,
    EditComponent,
    SearchPipe,
    FilsComponent
   
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
        }
     })  
  ],
})
export class ApplicationModule { }
