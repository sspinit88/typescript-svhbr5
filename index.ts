// Import stylesheets
import './style.css';

//// Utility ////

/* ! Readonly<U> - закрывает поля для редактирования */

interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: 'Alex',
  age: 65,
};

user.name = 'Tom'; /// Cannot assign to 'name' because it is a read-only property.

/* ! Required<U> - все поля делает обязательными к заполнению */

interface UserData {
  phone?: number;
  addres?: string;
}

const userData: Required<UserData> = {
  phone: 132,
  addres: 'Street',
};

/* ! Record<Key, Value> - строит объект на основании переданных сущностей  */

interface PageInfo {
  title: string;
}

type Route = 'home' | 'about' | 'contact';

const example: Record<Route, PageInfo> = {
  about: { title: 'about' },
  home: { title: 'home' },
  contact: { title: 'contact' },
};

/* ! Pick -  */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Room',
  completed: true,
};
