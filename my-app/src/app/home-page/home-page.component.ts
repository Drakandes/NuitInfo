import { Component, OnInit, EventEmitter } from '@angular/core';
import { PathExplorationService } from '../path-exploration.service'
import { PlayerStatService } from '../player-stat.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  public show =false
  public fadeIn = false
  public actionResults = []

  constructor(public path: PathExplorationService, public stat: PlayerStatService) {
  }

  ngOnInit() {
    this.path.initExplorationService()
  }

  public getPathOptionColor(pathOptionIndex){
    return this.path.pathOptionsInfo[pathOptionIndex].backgroundColor
  }

  public getPathOptionImage(pathOptionIndex){
    const name = this.path.pathOptionsInfo[pathOptionIndex].image
    return `url(bg-img/${name})`
  }

  public getPathOptionName(pathOptionIndex){
    return this.path.pathOptionsInfo[pathOptionIndex].backgroundColor
  }

  public explorePathOption(pathOptionIndex){
    this.show = true
    this.fadeIn = true
    this.actionResults = this.path.explorePathOption(pathOptionIndex)
    this.path.updatePathOptions()
  }

  public doAction(actionType){
    this.show = true
    this.fadeIn = true
    if (this.stat.gaugeInfo.health.current <= 0)
      this.actionResults = ["Tu es mort !"]
    else
      this.actionResults = this.path.doAction(actionType)
  }

  public onModalClose(){
    this.fadeIn = false
    setTimeout(() => {
      this.show = false
    }, 500);
    this.actionResults = []
  }

  public getActionValid(action){
    if((action === 'manger' || action === 'dormir') && this.path.hasMonster) return false
    if(action === 'fuir' && !this.path.hasMonster) return false
    if(action === 'explorer') return false
    return true
  }
}
