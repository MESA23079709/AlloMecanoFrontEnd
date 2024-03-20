import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Mecanicien } from "./Mecaniciens";
import { environmenet } from "../../environements/environement";

@Injectable({
    providedIn:'root'
})
export class MecanicienService{
    private apiServerUrl=environmenet.apiBaseUrl;

    constructor(private http: HttpClient){

    }
    public getMecaniciens():Observable<Mecanicien[]>{ 
        return this.http.get<Mecanicien[]>(`${this.apiServerUrl}/mecanicien/all`);
    }

    public addMecanicien(mecanicien: Mecanicien):Observable<Mecanicien>{ 
        return this.http.post<Mecanicien>(`${this.apiServerUrl}/mecanicien/add`, mecanicien);
    }

    public updateMecanicien(mecanicien: Mecanicien):Observable<Mecanicien>{ 
        return this.http.put<Mecanicien>(`${this.apiServerUrl}/mecanicien/update`, mecanicien);
    }
    public deleteMecanicien(mecanicienId: number):Observable<void>{ 
        return this.http.delete<void>(`${this.apiServerUrl}/mecanicien/add ${mecanicienId}` );
    }
}