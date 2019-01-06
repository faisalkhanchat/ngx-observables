import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: any;
  constructor(
    public router: Router,
    private serverService: ServersService,
    public route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.servers = this.serverService.getServers();
  }
  onReload() {
    // relative to routing
    this.router.navigate(['/servers'], {relativeTo: this.route});
  }

}
