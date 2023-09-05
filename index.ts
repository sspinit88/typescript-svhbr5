// Import stylesheets
import './style.css';

//// Utility ////

interface User {
  name: string;
  age: number;
}

interface UserData {
  phone?: number;
  addres?: string;
}

/* ! Readonly - закрывает поля для редактирования */

const user: Readonly<User> = {
  name: 'Alex',
  age: 65,
};

user.name = 'Tom'; /// Cannot assign to 'name' because it is a read-only property.

/* ! Required - все поля делает обязательными к заполнению */

const userData: Required<UserData> = {
  phone: 132,
  addres: 'Street',
};

/* Record -  */

interface PageInfo {
  title: string;
}

type Route = 'home' | 'about' | 'contact';

