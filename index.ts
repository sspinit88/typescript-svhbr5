// Import stylesheets
import './style.css';

//// Utility ////

/* ! 
     Readonly<T> - делает все свойства объекта типа T доступными только для чтения. 
*/

interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: 'Alex',
  age: 65,
};

user.name = 'Tom'; /// Cannot assign to 'name' because it is a read-only property.

/* ! 
     Required<U> - все поля делает обязательными к заполнению.
 */

interface UserData {
  phone?: number;
  addres?: string;
}

const userData: Required<UserData> = {
  phone: 132,
  addres: 'Street',
};

/* ! 
     Record<Key, Value> - создает тип, который является записью с ключами, 
     определенными в первом параметре, и значениями типа, определенного во втором параметре.
*/

interface PageInfo {
  title: string;
}

type Route = 'home' | 'about' | 'contact';

const example: Record<Route, PageInfo> = {
  about: { title: 'about' },
  home: { title: 'home' },
  contact: { title: 'contact' },
};

/* ! 
     Pick<T, K extends keyof T> - выбирает свойства объекта типа T с ключами, указанными в K. 
*/

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
