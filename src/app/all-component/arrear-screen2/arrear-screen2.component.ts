import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 



@Component({
  selector: 'app-arrear-screen2',
  templateUrl: './arrear-screen2.component.html',
  styleUrl: './arrear-screen2.component.css'
})
export class ArrearScreen2Component {
 
  
arrear!:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.arrear=this.fb.group({
    vrno:['',Validators.required],
    date:['',Validators.required]
  });
}



      
  
}
