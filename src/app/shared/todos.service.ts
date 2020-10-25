import {Injectable} from '@angular/core';

export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({providedIn: 'root'})
export class TodosService {
  public todos: Todo[] = [
    {id: 1, title: 'Важное дело', completed: true, date: new Date()},
    {id: 2, title: 'Еще одно важное дело', completed: true, date: new Date()},
    {id: 3, title: 'Менее важное дело', completed: false, date: new Date()}
 ]

 onToggle(id: number) {
  const idx = this.todos.findIndex(t => t.id ===id)
  this.todos[idx].completed = !this.todos[idx].completed
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id)
  }
}
