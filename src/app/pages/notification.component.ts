import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_services/api.service';


@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html'
  })

export class NotificationComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }
}   