import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {TechService} from "./services/tech.service";

@NgModule({
    imports: [BrowserModule],
    providers: [TechService],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
