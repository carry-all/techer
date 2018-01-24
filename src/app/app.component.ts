import {Component, OnDestroy, OnInit} from "@angular/core";
import {TechService} from "./services/tech.service";
import {Tech} from "./tech";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit, OnDestroy {
    name = "Angular";
    techs: Tech[];
    obs: Subscription;

    constructor(private techService: TechService) {
    }

    ngOnInit(): void {
        this.obs = this.techService.techList()
            .subscribe(response => this.techs = response);
    }

    ngOnDestroy(): void {
        this.obs.unsubscribe();
    }
}
