import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) {}

  baseUrl: any = 'http://192.168.29.52:5700/';

  Login(data: any) {
    return this.http.post(this.baseUrl + 'admin/userlogin', data);
  }
  
  // **************TABLE API**********

  CreateTable(data: any) {
    return this.http.post(this.baseUrl + 'admin/createRoomcategory', data);
  }

  EditTable(data: any) {
    return this.http.put(this.baseUrl + 'admin/updatesubroomsandtable', data);
  }

  deleteTableById(id: any) {
    return this.http.delete(this.baseUrl + 'admin/deleteTable/' + id);
  }

  getallTables(id: any) {
    return this.http.get(this.baseUrl + 'admin/getRoomsAndTables/' + id);
  }
}
