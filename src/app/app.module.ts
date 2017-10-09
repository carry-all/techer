import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {TechService} from "./services/tech.service";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [BrowserModule, HttpModule],
    providers: [TechService],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
