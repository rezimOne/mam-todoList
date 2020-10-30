import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { StudentsComponent } from './students/students.component';
import { NotesComponent } from './notes/notes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [TodoComponent, StudentsComponent, NotesComponent, PageNotFoundComponent],
  exports: [TodoComponent, StudentsComponent, NotesComponent, PageNotFoundComponent],
  imports: [CommonModule]
})
export class ViewsModule { }
