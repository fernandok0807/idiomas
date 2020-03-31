import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Color} from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  
  selectedColor: Color;
  readonly URL= 'http://localhost:3000/api/color';
  colors:Color[];
  constructor(private http:HttpClient) { 
    this.selectedColor = new Color();
  }

  getColors(){
    return this.http.get(this.URL);
  }

  postColor(Color:Color){
    return this.http.post(this.URL,Color);
  }

  putColor(color:Color){
    console.log(color._id);
    return this.http.put(this.URL+'/'+color._id,color);
  }

  deleteColor(_id:string){
    return this.http.delete(this.URL+'/'+_id);
  }
}
