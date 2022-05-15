import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyjsService } from '../servises/alertifyjs.service';
import { ProductsService } from '../servises/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductsService]
})
export class ProductComponent implements OnInit {

  constructor( private alertifyService:AlertifyjsService,
    private productService:ProductsService) { }
 
  filterText="";
products:Product[]=[];

   title="urun mkklistesi";
  
   
  ngOnInit(): void {
 this.productService.getproduct()  .subscribe(data=>{
      this.products=data;
    })
  }
  addtoCard(product: any){
    //success("added");
    this.alertifyService.success(product.name+"adedd");
 
    

  }

 
  
}
