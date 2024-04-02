import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  BASE_URL: string = 'https://jsonplaceholder.typicode.com';
  private URL_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';

  getPhotos(albumId: number) {
    return this.client.get(this.URL_PHOTOS + `?albumId=${albumId}`);
    // return this.http.get(this.URL_ALBUMS + `/${albumId}/photos`);
  }

  constructor(private client: HttpClient) { }
  getAlbums(){
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id: number): Observable<Album>{
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  deleteAlbum(id: number){
    return this.client.delete(`${this.BASE_URL}/albums/${id}`)
  }

  createAlbum(newAlbum: Album): Observable<Album>{
    return this.client.post<Album>(`${this.BASE_URL}/albums`, newAlbum)
  }

  updateAlbum(album: Album): Observable<Album> {
    const url = `${this.BASE_URL}/albums/${album.id}`;
    return this.client.put<Album>(url, album);
  }
}
