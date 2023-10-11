import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginI} from '../interface/login.interface';
import { LoginResponsei } from "../interface/loginResponse.Interface";
import { ApiResponse } from "../interface/postfilter.interface";

@Injectable({
    providedIn: 'root'
})
export class postService{

    public urlapi = environment.apiUrl;

    constructor( private http:HttpClient){

    }

    loginByUser(form:LoginI){
        let url = this.urlapi + "Autenticacion/" +"Validauser"
        return this.http.post<LoginResponsei>(url, form);

    }
    getDatos(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>('https://dummy.restapiexample.com/api/v1/employees');
      }
}