
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from './materialcomponents.module';
import { ReactiveFormsTypedModule } from 'reactive-forms-typed';

const ExportedModules = [
  FormsModule,
  ReactiveFormsModule,
  ReactiveFormsTypedModule,
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialComponentsModule,
    ...ExportedModules
  ],
  exports: [
    ...ExportedModules
  ]
})
export class SharedModule { }
