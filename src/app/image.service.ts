import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

// VSnBfKUDr6GDDNNe63W2C0G9fv8RgcNrRPScCp_mI28 secret key

interface IUnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  getPhoto(): Observable<any> {
    return this.http
      .get<IUnsplashResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization:
            'Client-ID bTc-uS42lL8pKRTF1BJB9euufFaEMqz3WaJRr9z4C94',
        },
      })
      .pipe(pluck('urls', 'regular'));
  }
}
