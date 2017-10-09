import {Component, OnInit} from "@angular/core";
import {TechService} from "./services/tech.service";
import {Tech} from "./tech";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
    name = "Angular";
    techs: Tech[];

    constructor(private techService: TechService) {
    }

    ngOnInit(): void {
        this.techService.techList()
            .then(response => this.techs = response);
    }
}
