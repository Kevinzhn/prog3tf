import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoCreateComponent } from './veiculo-create/veiculo-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VeiculoCreateComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [VeiculoCreateComponent],
})
export class VeiculoModule {}
