import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './onwer/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "https://angularp2-dcb84-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";


  constructor(private http: HttpClient) { }

insertUsers(newUser: Users): Observable<Users>
{
  return this.http.post<Users>(this.url,newUser);
}

getUsers():Observable<Users[]>{
  return this.http.get<Users[]>(this.url);
}
}

// deleteUser(newUser:Users):Observable<Users> {

//     return this.http.delete<Users>(this.url,newUser);
// }
// }