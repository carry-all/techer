import {Injectable} from "@angular/core";
import {Http/*, Response*/} from "@angular/http";
// import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Tech} from "../tech";

const techs: Tech[] = [
    new Tech(1, "name"),
    new Tech(2, "name2")
];

@Injectable()
export class TechService {
    constructor(private http: Http) {
    }

    techList(): Tech[] {
        return techs;
    }
}
