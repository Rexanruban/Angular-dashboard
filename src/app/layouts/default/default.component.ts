import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  
  sideBarOpen=true;

  constructor(){

  }
  ngOnInit(): void {
    
  }
  SideBarToggle(){
    this.sideBarOpen= !this.sideBarOpen;
  }
}
