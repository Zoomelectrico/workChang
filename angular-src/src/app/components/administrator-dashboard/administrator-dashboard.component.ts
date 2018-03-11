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
  // Vector de Respuestos
  private repuestos = [];
  //Alerts y modals
  closeResult: string;
  public alerts: Array<any> = [];

  constructor(
    private auth: AuthService,
    private api: ApiService,
    private modalService: NgbModal,
    private flash: FlashMessagesService
  ) { }

  ngOnInit() {
    this.type = 2;
    this.user = JSON.parse(localStorage.getItem('user'));
    this.api.getRepuestos().subscribe(data => {
      if(data.success) {
        console.log(data.msg);
        console.log(data.replacements[0].name);
        this.repuestos = data.replacements;
      } else {
        this.flash.show(data.msg);
        this.repuestos = [];
      }
    });
  }

  //Alerts y modal
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
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
          this.open(content);
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
          this.alerts = [];
          // Flash Todo Beio
        } else {
          console.log("error " + data.msg);
          this.alerts.push({
            type: 'warning',
            message: data.msg
          })
          // Mano la cagamos
        }
      })
    } else {
      // Las contraseñas no coinciden vv
      this.password = '';
      this.password2 = '';
      this.alerts.push({
        type: 'warning',
        message: "Las contraseñas no coinciden"
      })
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
        this.open(content);
        this.repuestos.push(dataReplacement.replacement);
        this.partNumber = 0;
        this.name = '';
        this.brand = '';
        this.forModel = '';
        this.inStock = 0;
      } else {
        // ups it doesnt work
      }
    })
  }
  
}
