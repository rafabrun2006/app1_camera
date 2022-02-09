"use strict";

import { Component, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public images = [];

  constructor(private sanitizer: DomSanitizer) {
    
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    this.images.push(this.sanitizer.bypassSecurityTrustUrl(image.webPath));

    console.log(image.webPath);
  };

}
