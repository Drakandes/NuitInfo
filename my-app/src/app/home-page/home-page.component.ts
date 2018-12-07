import { Component, OnInit, EventEmitter } from '@angular/core';
import { PathExplorationService } from '../path-exploration.service'
import { PlayerStatService } from '../player-stat.service'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  private show =false
  private fadeIn = false
  private actionResults = []

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

  private explorePathOption(pathOptionIndex){
    this.show = true
    this.fadeIn = true
    this.actionResults = this.path.explorePathOption(pathOptionIndex)
    this.path.updatePathOptions()
  }

  private doAction(actionType){
    this.show = true
    this.fadeIn = true
    this.actionResults = this.path.doAction(actionType)
  }

  private onModalClose(){
    this.fadeIn = false
    setTimeout(() => {
      this.show = false
    }, 500);
    this.actionResults = []
  }
}
