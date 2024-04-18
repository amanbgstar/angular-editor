import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowResultComponent } from './show-result/show-result.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  { path: 'result', component: ShowResultComponent },
  { path: '', component: EditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
