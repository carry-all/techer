import {Injectable} from "@angular/core";
import {Http/*, Response*/} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Tech} from "../tech";
import "rxjs/add/operator/toPromise";

/*
const techs: Tech[] = [
    new Tech(1, "title"),
    new Tech(2, "name2")
];
*/

@Injectable()
export class TechService {
    url = "http://192.168.0.103:8080";

    constructor(private http: Http) {
    }

    techList(): Observable<Tech[]> {
      return this.http.get(this.url + "/techs")
        .map(response => response.json() as Tech[])
        .catch(this.handleError); // todo: seems strange, what should I return instead of a Promise?
      // todo: need to store observeable here + put code to clean on unsubscribe
    }

    addTech(tech: Tech): Promise<Tech> {
        return this.http.put(this.url + "/tech?title=" + tech.title, tech)
            .toPromise()
            .then(response => response.json() as Tech)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error("Error occured: " + error);
        return Promise.reject(error.message || error);
    }
}
