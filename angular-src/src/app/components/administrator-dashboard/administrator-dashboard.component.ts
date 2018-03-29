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
  //Vector de usuarios
  private usuarios = [];
  // Vector de Roles
  private roles = [{ nombre: 'Gerente', type: 2 }, { nombre: 'Mecánico', type: 3 }, { nombre: 'Administrador', type: 4 }];
  // Datos del nuevo empleado
  private userID: number;
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
  private userIDSearch: number;
  // Datos de repuestos
  private partNumber: number;
  private name: string;
  private brand: string;
  private forModel: string;
  private inStock: number;
  private partNumberSearch: number; //Para la busqueda por numero de parte
  // Vector de Respuestos
  private repuestos = [];
  //Condición para modificar
  private canModificateUser: boolean = false;
  private canModificateRep: boolean = false;
  //Busqueda de usuario
  private busqueda: string = "username";
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
    this.getUsuario();
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
          this.usuarios.push(data.user);
          this.nationalID = null;
          this.firstName = null;
          this.lastName = null;
          this.email = null;
          this.username = null; 
          this.password = null;
          this.password2 = null; 
          this.addressLine1 = null;
          this.addressLine2 = null;
          this.city = null;
          this.flash.show(data.msg, {cssClass: 'custom-alert-success', timeout: 3000 });
        } else {
          this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
      })
    } else {
      // Las contraseñas no coinciden vv
      this.password = null;
      this.password2 = null;
      this.flash.show('Las contraseñas no coinciden', { cssClass: 'custom-alert-danger' });
    }
  }

  getUsuario(){
    this.api.getUsuariosWorkers().subscribe(data => {
      this.userIDSearch = null;
      if(data.success) {
        this.usuarios = data.users;
       for(let user of this.usuarios){
         switch(user.type){
         case 2: {
           user.type = "Gerente";
           break;
         }
         case 3: {
           user.type = "Mecánico";
           break;
         }
         case 4: {
           user.type = "Administrador";
           break;
         }
         default: {
           user.type = "unknown"
           break;
         }
        }
       }
        this.nationalID = null;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.username = null; 
        this.password = null;
        this.password2 = null; 
        this.addressLine1 = null;
        this.addressLine2 = null;
        this.city = null;
        this.canModificateUser = false;
        console.log("usuario: " + this.usuarios[0].nationalID + this.usuarios[0].firstName + this.usuarios[0].lastName + this.usuarios[0].type);
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        this.usuarios = [];
      }
    });
  }

  getUsuarioByID(){
    this.api.getUsuariosByID({
      search: this.userIDSearch
    }, this.busqueda).subscribe(user=> { // Busco el usuario
      if (user.success) { // Pregunto si tuve exito
        this.usuarios = []
        this.usuarios = user.users
        console.log("dato1 " + this.usuarios[0].nationalID)
        //NOTA: lo siguiente es para modificar un determinado usuario, no está hecha esa función aún
        this.userID = user.users.ID;
        this.nationalID = user.users.nationalID;
        this.firstName = user.users.firstName;
        this.lastName = user.users.lastName;
        this.email = user.users.email;
        this.username = user.users.username;
        this.addressLine1 = user.users.addressLine1;
        this.addressLine2 = user.users.addressLine2;
        this.city = user.users.city;
        this.type = user.users.type;
        this.canModificateUser = true;
        this.userIDSearch = null;
      } else {
        this.flash.show(user.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }

  modificarUser(){
    const photoURL = ''; //Provedor
    const user = {
      ID: this.userID,
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
    this.api.modificarDatosUsuario(user).subscribe(dataUser =>{
      if(dataUser.success){
        this.usuarios = [];
        this.usuarios.push(dataUser.user);
        this.flash.show('Usuario modificado con exito', { cssClass:'custom-alert-success', timeout: 3000 });
        this.nationalID = null;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.username = null; 
        this.password = null;
        this.password2 = null; 
        this.addressLine1 = null;
        this.addressLine2 = null;
        this.city = null;
        this.flash.show('Usuario', { cssClass: '', timeout: 3000 });
      } else {
        this.flash.show(dataUser.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    })
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
        this.partNumber = null;
        this.name = null;
        this.brand = null;
        this.forModel = null;
        this.inStock = null;
        this.flash.show('Repuesto', { cssClass: '', timeout: 3000 });
      } else {
        this.flash.show(dataReplacement.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    })
  }

  getRepuesto(){
    this.api.getRepuestos().subscribe(data => {
      this.partNumberSearch = null;
      if(data.success) {
        this.repuestos = data.replacements;
        this.canModificateRep = false;
        this.partNumberSearch = null;
        this.partNumber = null;
        this.name = null;
        this.brand = null;
        this.forModel = null;
        this.inStock = null;
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
        this.partNumber = replacement.replacement.partNumber;
        this.name = replacement.replacement.name;
        this.brand = replacement.replacement.brand;
        this.forModel = replacement.replacement.forModel;
        this.inStock = replacement.replacement.inStock;
        this.canModificateRep = true;
      } else {
        this.flash.show(replacement.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }

  modificarRepuesto(){
    const replacement = {
      partNumber: this.partNumber,
      name: this.name,
      brand: this.brand,
      forModel: this.forModel,
      inStock: this.inStock
    };
    this.api.modificarRepuesto(replacement).subscribe(dataReplacement =>{
      if(dataReplacement.success){
        this.repuestos = [];
        this.repuestos.push(dataReplacement.replacement);
        this.flash.show('Repuesto modificado con exito', { cssClass:'custom-alert-success', timeout: 3000 });
        this.partNumberSearch = null;
        this.partNumber = null;
        this.name = null;
        this.brand = null;
        this.forModel = null;
        this.inStock = null;
        this.flash.show('Repuesto', { cssClass: '', timeout: 3000 });
      } else {
        this.flash.show(dataReplacement.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    })
  }
  
}
