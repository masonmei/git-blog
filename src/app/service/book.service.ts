import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Book} from "../model/book";


@Injectable()
export class BookService {

  private baseUrl:string = 'http://192.168.1.103:8080/api/';

  constructor(private http:Http) {
  }

  getAll():Observable<Book[]> {
    let books$ = this.http
      .get(`${this.baseUrl}/repos/all`, {headers: this.getHeaders()})
      .map(mapBooks)
      .catch(handleError);
    return books$;
  }

  get(id:number):Observable<Book> {
    let book$ = this.http
      .get(`${this.baseUrl}/repos/${id}`, {headers: this.getHeaders()})
      .map(mapBook);
    return book$;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}


function mapBooks(response:Response):Book[] {
  // uncomment to simulate error:
  // throw new Error('ups! Force choke!');

  // The response of the API has a results
  // property with the actual results
  return response.json().map(toBook)
}

function toBook(r:any):Book {
  let book = <Book>({
    id: r.id,
    repository: r.repository,
    relativePath: r.relativePath,
    tagName: r.tagName,
    refreshInterval: r.refreshInterval,
  });
  console.log('Parsed book:', book);
  return book;
}

function mapBook(response:Response):Book {
// toPerson looks just like in the previous example
  return toBook(response.json());
}

// this could also be a private method of the component class
function handleError(error:any) {
// log error
// could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

// throw an application level error
  return Observable.throw(errorMsg);
}
