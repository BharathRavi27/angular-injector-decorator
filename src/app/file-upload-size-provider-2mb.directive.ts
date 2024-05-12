import { Directive } from '@angular/core';
import { FILE_UPLOAD_LIMIT } from './file-upload/consts';

@Directive({
  selector: '[fileUploadSize5mbProvider]',
  standalone: true,
  providers: [
    {
      provide: FILE_UPLOAD_LIMIT,
      useValue: 5 * 1024 * 1024,
    },
  ],
})
export class fileUploadSize5mbProviderService {}
