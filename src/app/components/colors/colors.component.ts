import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../services/color.service';
import { NgForm } from '@angular/forms';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
  providers:[ColorService]
})
export class ColorsComponent implements OnInit {

  constructor(public colorService:ColorService) { 

   }

  ngOnInit(): void {
    this.getColors();
  }

  addColor(form?: NgForm){
    
    if(form.value._id){
      this.colorService.putColor(form.value)
      .subscribe(res=>{
        
        this.resetForm(form);
        this.getColors();
           
      })
    }
    else{
      this.colorService.postColor(form.value)
      .subscribe(res=>{
        
        this.resetForm(form);
        this.getColors();
           
      })
    }
  } 

  getColors(){
    this.colorService.getColors()
      .subscribe(res=>{
        this.colorService.colors= res as Color[];
      })
  }


  resetForm(form?: NgForm){
    
    if(form){
      form.reset();  
      
    }
  }

  editColor(color:Color){
    this.colorService.selectedColor= color;
  } 

  deleteColor(color:Color){
    this.colorService.deleteColor(color._id)
    .subscribe(res=>{
      
      this.getColors();
         
    })
  } 

}
