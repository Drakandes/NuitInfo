import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../dark-mode.service'

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  private darkmodeRange = 100

  constructor(private darkmode: DarkModeService) { }

  ngOnInit() {
  }

}
