import {
  addBookHandler, deleteBookHandler, getAllBooksHandler, getDetailBookById, updateBookHandler,
} from './handler.js';

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getDetailBookById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Alamat tidak ditemukan',
  },
];

export default routes;
