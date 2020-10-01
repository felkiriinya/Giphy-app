import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifComponent } from './components/gif/gif.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StickersComponent } from './components/stickers/stickers.component';

const routes: Routes = [
{path:"home", component:GifComponent},
// {path:"stickers",component:StickersComponent},

{path:"**", component:NotFoundComponent},


{path: '', redirectTo:"/home",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
