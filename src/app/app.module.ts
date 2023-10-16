import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
// Import routing module
import { AppRoutingModule } from './app-routing.module';
// Import app component
import { AppComponent } from './app.component';
// Import containers
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent } from './containers';
import {MatIconModule} from '@angular/material/icon';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,


} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalRegevalsaComponent } from './views/modal/modal-regevalsa/modal-regevalsa.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BandejaEvalSaComponent } from './views/forms/bandeja-eval-sa/bandeja-eval-sa.component';
import { MatDialogModule } from '@angular/material/dialog';


const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, ModalRegevalsaComponent, ],
  imports: [
    AppRoutingModule,
    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FontAwesomeModule,
    FooterModule,
    FormModule,
    FormsModule,
    GridModule,
    HeaderModule,
    HttpClientModule,
    IconModule,
    ListGroupModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    NavModule,
    NgbModule,
    NgScrollbarModule,
    NgxPaginationModule,
    ProgressModule,
    ReactiveFormsModule,
    SharedModule,
    SidebarModule,
    TabsModule,
    UtilitiesModule,
  ],
  exports:[ModalRegevalsaComponent],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
