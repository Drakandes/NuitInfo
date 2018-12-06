import { Component, OnInit } from '@angular/core';
import { PathExplorationService } from '../path-exploration.service'
import { PlayerStatService } from '../player-stat.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  constructor(private path: PathExplorationService, private stat: PlayerStatService) {
  }

  ngOnInit() {
    this.path.initExplorationService()
  }

  private getPathOptionColor(pathOptionIndex){
    return this.path.pathOptionsInfo[pathOptionIndex].backgroundColor
  }

  private getPathOptionName(pathOptionIndex){
    return this.path.pathOptionsInfo[pathOptionIndex].backgroundColor
  }
}
