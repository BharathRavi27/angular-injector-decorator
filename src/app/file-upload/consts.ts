import { InjectionToken, Injector, inject } from '@angular/core';

export const FILE_UPLOAD_LIMIT = new InjectionToken<number>(
  'FILE_UPLOAD_LIMIT',
  {
    providedIn: 'root',
    factory: () => 7 * 1024 * 1024, // vlaue in bytes
  }
);

export const getFileUploadSize = () => {
  return inject(FILE_UPLOAD_LIMIT) ?? 5 * 1021 * 1024;
};
