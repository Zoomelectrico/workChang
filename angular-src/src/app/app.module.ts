import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Servicios
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GerenteDashboardComponent } from './components/gerente-dashboard/gerente-dashboard.component';
import { OrdenReparacionComponent } from './components/orden-reparacion/orden-reparacion.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ClientDashboardComponent,
    LoginComponent,
    RegisterComponent,
    GerenteDashboardComponent,
    OrdenReparacionComponent,
    VehiculoComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        whitelistedDomains: ['localhost:3000']
      }
    }),
    FormsModule
  ],
  providers: [
    AuthService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
