import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
  color: azure;
}
.offline{
  color: white ;
}
  `]
})
export class ServerComponent{
  serverId: number = 10;
  serverStatus: string = 'Offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' :'Offline';
  }

  getColor(){
    return this.serverStatus === 'Online' ? 'springgreen' : 'coral' ;
  }
}

