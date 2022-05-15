import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products',component:ProductComponent  },
  {path:'',redirectTo:'products',pathMatch:'full' },
  {path:'products/catagory/:catagotyId',component:ProductComponent}
];//rooot verme

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
