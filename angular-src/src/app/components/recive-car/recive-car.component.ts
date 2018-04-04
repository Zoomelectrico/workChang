import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { ApiService } from '../../services/api.service';
import { QrcodeService } from '../../services/qrcode.service';
import { UploadImgService } from '../../services/upload-img.service';

@Component({
  selector: 'app-recive-car',
  templateUrl: './recive-car.component.html',
  styleUrls: ['./recive-car.component.css']
})
export class ReciveCarComponent implements OnInit {

  @ViewChild('video') video: any;
  @ViewChild('canvas') canvas: any;
  @Input() width: number;
  @Input() height: number;
  private qrcode: any;
  private cargando: any;
  private context: any;
  public rodata: any;
  public mostrar: boolean = false;

  // Detalles de la orden
  public front;
  public back;
  public right;
  public left;
  public diagnostic;
  public photo;
  public photoLink;

  constructor(
    private api: ApiService,
    private qrservice: QrcodeService,
    private img: UploadImgService,
    private flash: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.width = 300;
    this.height = 300;
    this.context = this.canvas.nativeElement.getContext('2d');
    
    const camara = navigator.mediaDevices;
    const permisos = navigator.mediaDevices.getUserMedia;

    if(camara && permisos) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.play();
      }).catch(err => console.log(err));
    } else {
      this.flash.show('Este equipo no tiene cámaras', { cssClass: '', timeout: 3000 });
    }
  }

  onChange(evt) {
    this.img.loadImg(evt.target.files[0]).then(link => {
      this.photoLink = link;
    }).catch(err => console.log(err));
  }

  tomarFoto() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.context.drawImage(this.video.nativeElement, 0, 0, this.width, this.height);
    this.qrcode = this.canvas.nativeElement.toDataURL('img/png');
  }

  verificarQR(){
    this.qrservice.guardarQR(this.qrcode).subscribe(data => {
      if(data.sucess) {
        this.rodata = data.data;
        this.mostrar = true;
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });
  }

  aceptarVehiculo() {
    
    if(this.diagnostic && this.front && this.back && this.left && this.right
    ){
    const detalles = 
    `Detalles parete delantera: ${this.front}
      Detalles parte trasera: ${this.back}
      Detalles parte Lat. Derecha: ${this.right}
      Detalles parte Lat. Izquiera: ${this.left}
    `;
    const details = {
      repairOrderID: this.rodata.ID,
      details: detalles,
      photo: this.photoLink,
      diagnostic: this.diagnostic  
    };
    this.api.recibirVehiculo(details).subscribe(data => {
      if(data.sucess) {
        this.flash.show(data.msg, { cssClass: 'custom-alert-success', timeout: 3000 });
        this.front = '';
        this.back = '';
        this.right = '';
        this.right = '';
        this.photoLink = '';
        this.diagnostic = '';
        this.router.navigate(['/manager'])
        
      } else {
        this.flash.show(data.msg, { cssClass: 'custom-alert-danger', timeout: 3000 });
      }
    });


  }else{
    this.flash.show('Disculpe, recuerde completar todos los campos correctamente. No deje campos en blanco ni exceda el limite de caracteres.', { cssClass: 'custom-alert-danger', timeout: 3000 });
  }
  }
}
 