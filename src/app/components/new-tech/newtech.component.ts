import {Component, OnInit} from "@angular/core";
import {TechService} from "../../services/tech.service";
import {Tech} from "../../tech";

@Component({
    moduleId: module.id,
    selector: "newtech-component",
    templateUrl: "newtech.component.html"
})

export class NewTechComponent implements OnInit {
    constructor(private techService: TechService) {
    }

    add(name: string) {
        let tech = new Tech(777, name);
        this.techService.addTech(tech);
    }

    ngOnInit() {
    }
}
