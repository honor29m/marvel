import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class CreatorService {
    
    public url: string;
    public public_key: string;
    public hash: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
        this.public_key = Global.public_key;
        this.hash = Global.hash;
    }

    getCreatorAll():Observable<any> {
        return this._http.get(this.url+'creators'+'?'+'limit=99&ts=1'+'&apikey='+this.public_key+'&hash='+this.hash);
    }

    getCrator(value):Observable<any> {
        return this._http.get(this.url+'creators'+'?'+'limit=99&'+'nameStartsWith='+value+'&ts=1'+'&apikey='+this.public_key+'&hash='+this.hash);
    }
}