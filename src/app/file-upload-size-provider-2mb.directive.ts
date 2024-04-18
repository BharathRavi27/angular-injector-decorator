import { Directive } from '@angular/core';
import { FILE_UPLOAD_LIMIT } from './file-upload/consts';

@Directive({
  selector: '[fileUploadSize2mbProvider]',
  standalone: true,
  providers: [
    {
      provide: FILE_UPLOAD_LIMIT,
      useValue: 2 * 1024 * 1024,
    },
  ],
})
export class fileUploadSize2mbProviderService {}
