import {Component, OnDestroy, OnInit} from "@angular/core";
import {TechService} from "./services/tech.service";
import {Tech} from "./tech";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit, OnDestroy {
  name = "Angular";
  techs: Tech[];
  private connection$;

  constructor(private techService: TechService) {
  }

  ngOnInit(): void {
    this.connection$ = this.techService.techList()
      .subscribe(response => this.techs = response);
  }

  ngOnDestroy(): void {
    this.connection$.unsubscribe();
  }
}
