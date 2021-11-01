
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable , throwError, Subject } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class IssLocation {

    constructor(protected http: HttpClient) {}

    getData(): Observable<any> {
        const url = `http://api.open-notify.org/iss-now.json`;
        return this.http.get(url)
            .pipe(map((res) => res), catchError( (error: any) => throwError(error)));
    }
}
