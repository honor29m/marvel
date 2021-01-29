import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
//Posible import model

@Injectable()
export class CharacterService {
    
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

    getCharacterAlls():Observable<any> {
        return this._http.get(this.url+'characters'+'?'+'limit=100&ts=1'+'&apikey='+this.public_key+'&hash='+this.hash);
    }
    
    getCharacter(value):Observable<any> {
        return this._http.get(this.url+'characters'+'?'+'limit=100&'+'nameStartsWith='+value+'&ts=1'+'&apikey='+this.public_key+'&hash='+this.hash);
    }
}

