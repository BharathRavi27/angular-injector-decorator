import { Component } from '@angular/core';
import { getFileUploadSize } from './consts';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
})
export class FileUploadComponent {
  MAX_FILE_UPLOAD_SIZE = getFileUploadSize();
  allowedSize = this.MAX_FILE_UPLOAD_SIZE / 1024 / 1024;

  handleFileInput(event: Event) {
    console.log('$$$ Limit', this.allowedSize);
    const files = (event.target as HTMLInputElement)?.files as FileList;
    if (files[0].size > this.MAX_FILE_UPLOAD_SIZE) {
      alert(
        `File size is too big. Maximum allowed size is ${this.allowedSize} mb`
      );
    }
  }
}
