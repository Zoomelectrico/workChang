import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-mechanic-dashboard',
  templateUrl: './mechanic-dashboard.component.html',
  styleUrls: ['./mechanic-dashboard.component.css']
})
export class MechanicDashboardComponent implements OnInit {
  private user: any;
  private ordenes = [];
  private orden;
  private diagnostico;
  private procedimiento;
  private repuestos;
  @ViewChild('btnCarro') btn: any;
  private car: any;
  private resp = [];
  constructor(
    private api: ApiService,
    private modal: NgbModal,
    private flash: FlashMessagesService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getOrder(this.user);
  }

  getOrder(user) {
    this.api.getOrdenes(user).subscribe(data => {
      if (data.success) {
        this.ordenes = data.repairs;
        console.log(this.ordenes);
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        this.ordenes = [];
      }
    });
  }

  verOrden(ordenID) {
    let i = this.ordenes.findIndex(o => o.ID === ordenID);
    this.orden = this.ordenes[i];
    this.actualizarBtn(this.orden.carData);
    this.diagnostico = this.orden.diagnostic;
    this.api.getRepuestoModelos(this.orden.carModel).subscribe(data => {
      if (data.success) {
        this.repuestos = data.replacements
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        this.repuestos = [];
      }
    });
  }

  verRepuestos(content) {
    this.modal.open(content, { size: 'lg' });
  }

  actulizarOrden(id) {
    if(this.procedimiento) {
      const datos = {
        id: this.orden.ID,
        orden: {
          procedure: this.procedimiento,
          replacements: this.resp
        }
      };
      this.api.actualizarOrden(datos).subscribe(data => {
        if (data.success) {
          this.flash.show(data.msg, { cssClass: 'custom-alert-success', timeout: 3000 });
        } else {
          this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        }
      });
    } else {
      this.flash.show('La sección de procedimiento no puede estar vacia', { cssClass: 'custom-alert-danger', timeout: 3000 });
    }
  }

  cerrarOrden(id) {
    this.api.cerrarOrdenMecanico({ id: id }).subscribe(data => {
      if (data.success) {
        // Pajita nice
        this.getOrder(this.user);
      } else {
        //Pajita Fea
      }
    });
  }

  buscarOrden(id) {
    this.api.getOrdenByID(id).subscribe(data => {
      if (data.success) {
        this.orden = data.RepairOrder[0];
        this.actualizarBtn(this.orden.carData);
        this.diagnostico = this.orden.diagnostic;
        this.api.getRepuestoModelos(this.orden.carModel).subscribe(data2 => {
          if (data2.success) {
            this.repuestos = data2.replacements
          } else {
            this.flash.show(data2.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
            this.repuestos = [];
          }
        });
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
        this.orden = {};
      }
    });
  }

  agregar(respID, num: number) {
    if (num > 0) {
      this.resp.push({ ID: respID, stock: num });
    } else {
      this.flash.show('Por favor ingrese un número mayor a cero', { cssClass: 'custom-alert-danger', timeout: 3000 });
    }
  }

  actualizarBtn(carData) {
    this.btn.nativeElement.innerHTML = `<strong>${carData}</strong>`
  }

  verCarro(content) {
    let serial = this.orden.serial;
    this.api.getCarBySerial(serial).subscribe(data => {
      if(data.success) {
        this.car = data.car;
        this.modal.open(content);
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }

}
