import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /*template: '<app-server></app-server>',*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allNewServer = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.allNewServer = true;
    }, 2000);
  }

}
