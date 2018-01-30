import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Tech} from "../tech";
import "rxjs/add/operator/toPromise";
import {Subject} from "rxjs/Subject";

/*
const techs: Tech[] = [
    new Tech(1, "title"),
    new Tech(2, "name2")
];
*/

@Injectable()
export class TechService {
  url = "http://192.168.0.103:8080";
  private subject = new Subject<Tech[]>();

  constructor(private http: Http) {
  }

  techList(): Observable<Tech[]> {
    this.updateList();

    // return subject as is. It would be updated in any case
    return this.subject.asObservable();
  }

  private updateList() {
    console.log("updateList invoked")
    // fire http get to update subject
    this.http.get(this.url + "/techs")
      .toPromise()
      .then(response => this.subject.next(response.json() as Tech[])) // todo: promise won't be cancelled. What to do?
      .catch(this.handleError);
  }

  addTech(tech: Tech): Promise<Tech> {
    return this.http.put(this.url + "/tech?title=" + tech.title, tech)
      .toPromise()
      .then((response) => {
        this.updateList();
        return response.json() as Tech;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Error occured: " + error);
    return Promise.reject(error.message || error);
  }
}
