import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /*template: '<app-server></app-server>',*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allNewServer = false;
  serverCreationStatus = 'No Server was created !';
  serverName = 'Default';
  serverCreated = false;
  servers = ['server1'];

  constructor() {}

  ngOnInit(): void {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created successfully!';
    this.serverCreated = true;
    this.allNewServer = true;
    setTimeout(() => {
      this.allNewServer = false;
    }, 1000);
   }

  onUpdateServerName(event :Event){
    //console.log(event);
    this.serverName= (event.target as HTMLInputElement).value;
  }
}
