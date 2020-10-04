import { Component } from '@angular/core';

export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'Angular todo app';

  public todos: Todo[] = [
     {id: 1, title: 'Важное дело', completed: true, date: new Date()},
     {id: 2, title: 'Еще одно важное дело', completed: true, date: new Date()},
     {id: 3, title: 'Менее важное дело', completed: false, date: new Date()}
  ]
}
