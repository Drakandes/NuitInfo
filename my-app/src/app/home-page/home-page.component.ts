import { Component, OnInit } from '@angular/core';
import { PathExplorationService } from '../path-exploration.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  constructor(private path: PathExplorationService) {
  }

  ngOnInit() {
    this.path.initExplorationService()
  }
}
