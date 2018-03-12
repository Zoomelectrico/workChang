import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-administrator-dashboard',
  templateUrl: './administrator-dashboard.component.html',
  styleUrls: ['./administrator-dashboard.component.css']
})
export class AdministratorDashboardComponent implements OnInit {
  // Usuario
  private user;
  // Vector de Roles
  private roles = [{ nombre: 'Gerente', type: 2 }, { nombre: 'Mecánico', type: 3 }, { nombre: 'Administrador', type: 4 }];
  // Datos del nuevo empleado
  private firstName: string;
  private lastName: string;
  private nationalID: number;
  private email: string;
  private username: string;
  private password: string;
  private password2: string;
  private addressLine1: string;
  private addressLine2: string;
  private city: string;
  private type: number;
  private photo: any;
  // Datos de repuestos
  private partNumber: number;
  private name: string;
  private brand: string;
  private forModel: string;
  private inStock: number;
  private partNumberSearch: number; //Para la busqueda por numero de parte
  // Vector de Respuestos
  private repuestos = [];
  //Alerts y modals

  constructor(
    private auth: AuthService,
    private api: ApiService,
    private modalService: NgbModal,
    private flash: FlashMessagesService
  ) { }

  ngOnInit() {
    this.type = 2;
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getRepuesto();
  }

  //RegistrarEmpleado
  registrarEmpleado(content) {
    const photoURL = ''; //Provedor
    if (this.password === this.password2) {
      const user = {
        photoURL: photoURL,
        nationalID: this.nationalID,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        username: this.username,
        password: this.password,
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        city: this.city,
        type: this.type
      };
      this.auth.registerUser(user).subscribe(data => {
        if (data.success) {
          this.nationalID = 0;
          this.firstName = '';
          this.lastName = '';
          this.email = ''
          this.username = ''; 
          this.password = '';
          this.password2 = ''; 
          this.addressLine1 = '';
          this.addressLine2 = '';
          this.city = '';
          this.flash.show(data.msg, {cssClass: 'custom-alert-success', timeout: 2000 });
        } else {
          this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
      })
    } else {
      // Las contraseñas no coinciden vv
      this.password = '';
      this.password2 = '';
      this.flash.show('Las contraseñas no coinciden', { cssClass: 'custom-alert-danger' });
    }
  }

  onChange(rol) {
    this.type = rol;
  }

  //registrar repuesto
  registrarRepuesto(content){
    const replacement = {
      partNumber: this.partNumber,
      name: this.name,
      brand: this.brand,
      forModel: this.forModel,
      inStock: this.inStock
    };
    this.api.registrarRepuesto(replacement).subscribe(dataReplacement =>{
      if(dataReplacement.success){
        this.repuestos.push(dataReplacement.replacement);
        this.flash.show('Repuesto Ingresado con exito', { cssClass:'custom-alert-success', timeout: 3000 });
        this.partNumber = 0;
        this.name = '';
        this.brand = '';
        this.forModel = '';
        this.inStock = 0;
        this.flash.show('Repuesto', { cssClass: '', timeout: 3000 });
      } else {
        this.flash.show(dataReplacement.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    })
  }

  getRepuesto(){
    this.api.getRepuestos().subscribe(data => {
      if(data.success) {
        this.repuestos = data.replacements;
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        this.repuestos = [];
      }
    });
  }

  getRepuestosByPartNumber(){
    this.api.getRepuestosByPartNumber({
      partNumber: this.partNumberSearch
    }).subscribe(replacement => { // Busco el repuesto
      if (replacement.success) { // Pregunto si tuve exito
        this.repuestos = []
        this.repuestos[0] = replacement.replacement
      } else {
        this.flash.show(replacement.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }
  
}
