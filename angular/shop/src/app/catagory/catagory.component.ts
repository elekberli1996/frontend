import { Component, OnInit } from '@angular/core';
import { CatagorysService } from '../servises/catagorys.service';
import { Catagory } from './catagory';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css'],
  providers:[CatagorysService]
})
export class CatagoryComponent implements OnInit {
  title="catagorler";
  catagorys:Catagory[]=[];

  constructor( private catagoryService:CatagorysService ) { }

  ngOnInit(): void {

    this.catagoryService.catagoryget().subscribe(data=>{
      this.catagorys=data;
    })
  }

}
