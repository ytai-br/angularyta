import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatoComponent } from './pato/pato.component';
import { CorgiComponent } from './corgi/corgi.component';


const routes: Routes = [
{
  path:"pato",component:PatoComponent
},
{ path:"corgi",component:CorgiComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
