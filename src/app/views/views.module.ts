import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [TodoComponent, StudentsComponent, PageNotFoundComponent],
  exports: [TodoComponent, StudentsComponent, PageNotFoundComponent],
  imports: [CommonModule]
})
export class ViewsModule { }
