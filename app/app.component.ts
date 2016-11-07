import { Component } from '@angular/core';
import { GithubService } from "./services/github.service";
@Component({
    selector: 'my-app',
    template: `
    <nav class="navbar navbar-inverse">
     <div class="container">
         <div class="navbar-brand" style="text-align:center">Github Search</div>
     </div>
   </nav>
    <div class="content">
    <profile></profile></div>
    `,
    providers: [ GithubService ]
})
export class AppComponent { }
