import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardGerenteComponent } from './components/dashboard-gerente/dashboard-gerente.component';
import { DashboardClienteComponent } from './components/dashboard-cliente/dashboard-cliente.component';
import { DashboardAdministradorComponent } from './components/dashboard-administrador/dashboard-administrador.component';
import { AdminRepuestoComponent } from './components/admin-repuesto/admin-repuesto.component';
import { AdminClientesComponent } from './components/admin-clientes/admin-clientes.component';
import { ModificarOrdenComponent } from './components/modificar-orden/modificar-orden.component';
import { OrdenReparacionComponent } from './components/orden-reparacion/orden-reparacion.component';
import { OrdenesReparacionComponent } from './components/ordenes-reparacion/ordenes-reparacion.component';
import { PedirCitaComponent } from './components/pedir-cita/pedir-cita.component';
import { RegistrarVehiculoComponent } from './components/registrar-vehiculo/registrar-vehiculo.component';
import { RegistrarComponent } from './components/registrar/registrar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    DashboardGerenteComponent,
    DashboardClienteComponent,
    DashboardAdministradorComponent,
    AdminRepuestoComponent,
    AdminClientesComponent,
    ModificarOrdenComponent,
    OrdenReparacionComponent,
    OrdenesReparacionComponent,
    PedirCitaComponent,
    RegistrarVehiculoComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
