import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { ServersService } from '../servers.service';
import {CanComponentDeactivate} from '../../can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  changed = false;

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

  canDeactivate():  Observable<boolean> | Promise<boolean> | boolean {
        // in case of any chnage or detect the change make it in if else statement

    if (this.changed) {
      return confirm('Do you wnat to save change ');
    }
  }

}
