import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { MarcaCreateComponent } from './marca/marca-create/component/marca-create.component';
import { MarcaEditComponent } from './marca/marca-edit/marca-edit.component';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { VeiculoCreateComponent } from './veiculo/veiculo-create/veiculo-create.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'nova-marca',
    component: MarcaCreateComponent,
  },
  {
    path: 'listar-marcas',
    component: MarcaListComponent,
  },
  {
    path: 'edit-curso/:id',
    component: MarcaEditComponent,
  },
  {
    path: 'nova-aula',
    component: VeiculoCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
