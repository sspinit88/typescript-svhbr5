// Import stylesheets
import './style.css';

//// Utility ////

/* 
  Awaited<T> - это специальный тип, который может быть использован для обозначения типа, 
  который будет возвращен из асинхронной функции. 
*/

async function getData(): Promise<string> {
  return 'hello';
}

let awaitedData: Awaited<ReturnType<typeof getData>>;
// теперь awaitedData может быть 'hello'

/*
  ConstructorParameters<Type> - извлекает типы аргументов конструктора Type.
*/

class Foo {
  constructor(a: string, b: number) {}
}
type FooConstructorParameters = ConstructorParameters<typeof Foo>;
// теперь FooConstructorParameters это [string, number]

/* 
  Exclude<UnionType, ExcludedMembers> - исключает определенные типы из объединенного типа.
*/

type A = 'a' | 'b' | 'c';
type B = Exclude<A, 'a' | 'b'>;
// теперь B это 'c'

const t: B = 'c';

/*
  Extract<Type, Union> - извлекает из типа Type только те типы, которые присутствуют в Union.
*/

type A2 = 'a' | 'b' | 'c';
type B2 = 'a' | 'b';
type C2 = Extract<A, B>;

const rt: C2 = 'c';

/*
  InstanceType<Type> - извлекает тип экземпляра класса Type.
*/

class FooA {
  x: number;
}
type FooInstance = InstanceType<typeof FooA>;
// теперь FooInstance это { x: number }

/*
  NonNullable<Type> - извлекает тип из Type, исключая null и undefined.
*/

let value: string | null | undefined;
let nonNullableValue: NonNullable<typeof value>;
// теперь nonNullableValue это string

/* 
  Omit<T, K extends keyof T> - выбирает свойства объекта типа T, исключая те, которые указаны в K.
*/

interface Person {
  name: string;
  age: number;
}

let omittedPerson: Omit<Person, 'age'> = {
  name: 'Nik',
};
// теперь omittedPerson может быть { name: string; }

/*
  Parameters<Type> - извлекает типы аргументов функции Type.
*/

function foo(a: string, b: number) {}
type FooParameters = Parameters<typeof foo>;
// теперь FooParameters это [string, number]

/* 
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

/* 
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

/*  
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

/*
  ReturnType<Type> - извлекает тип возвращаемого значения функции Type.
*/

function foo1(): string {
  return 'hello';
}
type FooReturnType = ReturnType<typeof foo1>;
// теперь FooReturnType это string

/* 
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
