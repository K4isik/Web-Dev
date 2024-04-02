import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AlbumService} from "../album.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{

  photos: any;
  albumId!: number
  constructor(
    private photosService: AlbumService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.albumId = this.route.snapshot.params['id'];
    console.log(this.albumId)
    // this.albumId = this.route.snapshot.paramMap.get('id');
    this.photosService
      .getPhotos(this.albumId)
      .subscribe((data) => (this.photos = data));
  }
  goBack() {
    this.router.navigate(['/albums', this.albumId]);
  }
}
