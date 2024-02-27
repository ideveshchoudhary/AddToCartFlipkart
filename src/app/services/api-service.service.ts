import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// interface PeopleData {
//   name: string;
//   birthYear: string;
//   height: number;
//   weight: number;
//   eyeColor: string;
// }
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    // return this.http.get<any[]>("https://fakestoreapi.com/products/")
    return this.http.get<any[]>("https://fakestoreapi.com/products/").pipe(

      map((res: any) => {
        return res;
      })

    )
  }










  // fetchLukesData() {
  //   this.lukeData$ = this.http.get<any>("https://swapi.dev/api/people/1/").pipe(
  //     map(
  //       response =>
  //       ({
  //         name: response.name,
  //         birthYear: response.birth_year,
  //         height: Number(response.height),
  //         weight: Number(response.mass),
  //         eyeColor: response.eye_color
  //       } as PeopleData)
  //     )
  //   )};
}
