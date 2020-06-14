import { v4 as uuid } from 'uuid';
import { IItem, ItemStatus } from './constants';

const setTodos = (todos: Array<any>) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const getTodos = (): Array<IItem> => {
  const todosString = localStorage.getItem('todos') || '[]';
  const todos = JSON.parse(todosString);
  return todos;
};

export const findTodos = (findingConditions: any) => {
  return new Promise((resolve, reject) => {
    const todos = getTodos();
    if (findingConditions) {
      const {
        // filter = {},
        pageIndex = 1,
        pageSize = 2,
        // sort = {},
      } = findingConditions;
      resolve(todos.slice((pageIndex - 1) * pageSize, pageIndex * pageSize));
    }
    resolve(todos);
  });
};

export const createTodo = ({ title }: any): Promise<IItem> => {
  return new Promise(async (resolve, reject) => {
    const todos = getTodos();
    const itemCompleted: IItem = {
      id: uuid(),
      title,
      status: ItemStatus.TODO,
    };
    todos.push(itemCompleted);
    setTodos(todos);
    resolve(itemCompleted);
  });
};
