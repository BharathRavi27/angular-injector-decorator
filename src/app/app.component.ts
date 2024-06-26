import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { fileUploadSize5mbProviderService } from './file-upload-size-provider-2mb.directive';
import { fileUploadSize10mbProviderService } from './file-upload-size-provider-5mb.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FileUploadComponent,
    fileUploadSize5mbProviderService,
    fileUploadSize10mbProviderService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
