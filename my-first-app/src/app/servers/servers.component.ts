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

  constructor() { setTimeout(() => {
    this.allNewServer = true;
  }, 2000);}

  ngOnInit(): void {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created successfully!';
    this.serverCreated = true;

  }

  onUpdateServerName(event :Event){
    //console.log(event);
    this.serverName= (event.target as HTMLInputElement).value;
  }
}
