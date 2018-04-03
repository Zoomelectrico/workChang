import { Injectable } from '@angular/core';

@Injectable()
export class UploadImgService {

  constructor() { }

  loadImg(file) {
    return new Promise((resolve, reject) => {
      let tipo;
      if (file) {
        switch (file.type) {
          case 'image/gif':
            tipo = 'data:image/gif;base64,';
            break;
          case 'image/jpeg':
            tipo = 'data:image/jpeg;base64,';
            break;
          case 'image/png':
            tipo = 'data:image/png;base64,';
            break;
          case 'image/svg+xml':
            tipo = 'data:image/svg+xml;base64,';
            break;
          default:
            tipo = null;
            return;
        }
        const reader = new FileReader();
        if(tipo) {
          reader.onload = readEvt => {
            const binaryString = (readEvt.target as any).result;
            const base64 = btoa(binaryString);
            const resultado = tipo + base64;
            resolve(resultado);
          }
          reader.readAsBinaryString(file);
        } else {
          reject('Formato de Imagen Inválido')
        }
      } else {
        reject('Formato de Imagen Inválido');
      }
    });
  }

}
