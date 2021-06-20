import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,    
    MatInputModule,
    MatButtonModule,
    MatSelectModule      
  ],
  exports: [ 
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
