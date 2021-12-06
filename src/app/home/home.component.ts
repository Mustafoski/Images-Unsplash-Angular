import { ImageService } from './../image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  photoUrl: string;
  constructor(private image: ImageService) {
    this.fetchPhoto();
  }
  onClick(): void {
    this.fetchPhoto();
  }

  ngOnInit(): void {}

  fetchPhoto(): void {
    this.image.getPhoto().subscribe((response) => {
      this.photoUrl = response;
    });
  }
}
