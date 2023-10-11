import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginI} from '../interface/login.interface';
import { LoginResponsei } from "../interface/loginResponse.Interface";
@Injectable({
    providedIn: 'root'
})
export class AutenticacionService{

    public urlapi = environment.apiUrl;

    constructor( private http:HttpClient){

    }

    loginByUser(form:LoginI){
        let url = this.urlapi + "Autenticacion/" +"Validauser"
        return this.http.post<LoginResponsei>(url, form);

    }
}