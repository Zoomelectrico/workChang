import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  private usuarioSel;
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
  private busqueda: string = "email"; 
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
  registrarEmpleado() {
    if (this.firstName && this.firstName.length < 45 &&
      this.lastName && this.lastName.length < 45 &&
      this.username && this.username.length < 20 &&
      this.email && this.email.length < 255 &&
      this.password && this.password.length < 255 &&
      this.addressLine1 && this.addressLine1.length < 45 &&
      this.addressLine2 && this.addressLine2.length < 45 &&
      this.city && this.city.length < 45 &&
      this.nationalID > 0 && this.nationalID < 99999999999
    ) {
      const photoURL = '';
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
            this.flash.show(data.msg, { cssClass: 'custom-alert-success', timeout: 3000 });
          } else {
            this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
          }
        })
      } else {
        this.password = null;
        this.password2 = null;
        this.flash.show('Las contraseñas no coinciden', { cssClass: 'custom-alert-danger' });
      }

    } else {
      this.flash.show('Disculpe, recuerde completar todos los campos correctamente. No deje campos en blanco ni exceda el limite de caracteres.', { cssClass: 'custom-alert-danger', timeout: 3000 });
    }
  }

  getUsuario() {
    this.api.getUsuariosWorkers().subscribe(data => {
      this.userIDSearch = null;
      if (data.success) {
        this.usuarios = data.users;
        this.convertRol();
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
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        this.usuarios = [];
      }
    });
  }

  convertRol() {
    for (let user of this.usuarios) {
      switch (user.type) {
        case 2: {
          user.typeShown = "Gerente";
          break;
        }
        case 3: {
          user.typeShown = "Mecánico";
          break;
        }
        case 4: {
          user.typeShown = "Administrador";
          break;
        }
        default: {
          user.typeShown = "unknown"
          break;
        }
      }
    }
  }

  getUsuarioByID() {
    
    if (this.userIDSearch) {
      this.api.getUsuariosByID({
        search: this.userIDSearch
      }, this.busqueda).subscribe(data => {
        if (data.success) {
          this.usuarios = [];
          this.usuarios = data.users;
          this.convertRol();
          this.userIDSearch = null;
        } else {
          this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
      });
    } else {
      this.flash.show('El campo de busqueda no puede estar vacio', { cssClass: 'custom-alert-danger', timeout: 3000 });
    }
  }

  modificarUser() {
    let bool: boolean = this.firstName && this.firstName.length < 45 &&
    this.lastName && this.lastName.length < 45 &&
    this.username && this.username.length < 20 &&
    this.email && this.email.length < 255 &&
    this.addressLine1 && this.addressLine1.length < 45 &&
    this.addressLine2 && this.addressLine2.length < 45 &&
    this.city && this.city.length < 45 &&
    this.nationalID > 0 && this.nationalID < 99999999999;

    if (bool) {
      let user;
      if (this.password != null && this.password2 != null) {
        if (this.password === this.password2) {
          user = {
            ID: this.userID,
            photoURL: '',
            nationalID: this.nationalID,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            username: this.username,
            addressLine1: this.addressLine1,
            addressLine2: this.addressLine2,
            city: this.city,
            type: this.type,
            password: this.password
          };
        } else {
          this.flash.show('Las contraseñas no coinciden', { cssClass: 'custom-alert-danger', timeout: 3000 });
        } 
      } else {
        user = {
          ID: this.userID,
          photoURL: '',
          nationalID: this.nationalID,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          username: this.username,
          addressLine1: this.addressLine1,
          addressLine2: this.addressLine2,
          city: this.city,
          type: this.type
        };
      }
      this.api.modificarDatosUsuario(user).subscribe(dataUser => {
        if (dataUser.success) {
          this.usuarios = [];
          this.usuarios.push(dataUser.user);
          this.getUsuario();
          this.flash.show('Usuario modificado con exito', { cssClass: 'custom-alert-success', timeout: 3000 });
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
      });
    } else {
      this.flash.show('Disculpe, recuerde completar todos los campos correctamente. No deje campos en blanco ni exceda el limite de caracteres.', { cssClass: 'custom-alert-danger', timeout: 3000 });
    }
  }

  onChange(rol) {
    this.type = rol;
  }

  claveBusqueda(buscaPor){
    switch(buscaPor){
    case 'Busqueda por cedula':{
      this.busqueda = 'nationalID';
      break;
    }
    case 'Busqueda por nombre':{
      this.busqueda = 'name';
      break;
    }
    case 'Busqueda por usuario':{
      this.busqueda = 'username';
      break;
    }
    case 'Busqueda por correo':{
      this.busqueda = 'email';
      break;
    }
    default: {
      this.flash.show('ERROR HORROROSAMENTE FEO', { cssClass: 'custom-alert-danger', timeout: 3000 });
      break;
    }
  }
  }

  usuarioSelec(user) {
    this.usuarioSel = user;
    this.userID = this.usuarioSel.ID;
    this.nationalID = this.usuarioSel.nationalID;
    this.firstName = this.usuarioSel.firstName;
    this.lastName = this.usuarioSel.lastName;
    this.email = this.usuarioSel.email;
    this.username = this.usuarioSel.username;
    this.addressLine1 = this.usuarioSel.addressLine1;
    this.addressLine2 = this.usuarioSel.addressLine2;
    this.city = this.usuarioSel.city;
    this.type = this.usuarioSel.type;
    this.canModificateUser = true;
  }

  //registrar repuesto
  registrarRepuesto(content) {

    if (this.partNumber > 0 && this.partNumber < 99999999999 &&
      this.name && this.name.length < 45 &&
      this.brand && this.brand.length < 45 &&
      this.forModel && this.forModel.length < 255 &&
      this.inStock > 0 && this.inStock < 99999999999
    ) {
      const replacement = {
        partNumber: this.partNumber,
        name: this.name,
        brand: this.brand,
        forModel: this.forModel,
        inStock: this.inStock
      };
      this.api.registrarRepuesto(replacement).subscribe(dataReplacement => {
        if (dataReplacement.success) {
          this.repuestos.push(dataReplacement.replacement);
          this.flash.show('Repuesto Ingresado con exito', { cssClass: 'custom-alert-success', timeout: 3000 });
          this.partNumber = null;
          this.name = null;
          this.brand = null;
          this.forModel = null;
          this.inStock = null;
          this.flash.show('Repuesto', { cssClass: '', timeout: 3000 });
        } else {
          this.flash.show(dataReplacement.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
      });
    } else {
      this.flash.show('Disculpe, recuerde completar todos los campos correctamente. No deje campos en blanco ni exceda el limite de caracteres.', { cssClass: 'custom-alert-danger', timeout: 3000 });

    }
  }

  getRepuesto() {
    this.api.getRepuestos().subscribe(data => {
      this.partNumberSearch = null;
      if (data.success) {
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

  getRepuestosByPartNumber() {
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
      } else {
        this.flash.show(replacement.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }

  repuestoSelec(replacement) {
    this.partNumber = replacement.partNumber;
    this.name = replacement.name;
    this.brand = replacement.brand;
    this.forModel = replacement.forModel;
    this.inStock = replacement.inStock;
    this.canModificateRep = true;
  }

  modificarRepuesto() {
    const replacement = {
      partNumber: this.partNumber,
      name: this.name,
      brand: this.brand,
      forModel: this.forModel,
      inStock: this.inStock
    };
    this.api.modificarRepuesto(replacement).subscribe(dataReplacement => {
      if (dataReplacement.success) {
        this.repuestos = [];
        this.repuestos.push(dataReplacement.replacement);
        this.flash.show('Repuesto modificado con exito', { cssClass: 'custom-alert-success', timeout: 3000 });
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
    });
  }

}
