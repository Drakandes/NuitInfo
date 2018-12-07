import { Injectable } from '@angular/core';
import  explorationDataObject from '../json-stuff/explorationAreas'
import { PlayerStatService } from './player-stat.service'

@Injectable({
  providedIn: 'root'
})

export class PathExplorationService {

  public explorationData = explorationDataObject

  public pathOptions = []
  public pathOptionsInfo = []
  public currentLocation = 'forêt'

  constructor(private stat: PlayerStatService) { }

  public initExplorationService(){
    this.updatePathOptions()
  }

  public updatePathOptions(){
    const locationPool1 = []
    this.pathOptions = []
    this.pathOptionsInfo = []

    Object.keys(this.explorationData.locationInfo).forEach((key, index) => {
      for (let index = 0; index < this.explorationData.locationInfo[key].chanceModifier; index++) {
        locationPool1.push(key)
      }
    })
    const pathOption1 = locationPool1[Math.floor(Math.random()*locationPool1.length)];
    this.pathOptions.push(pathOption1)

    const locationPool2 = []
    locationPool1.forEach(location => {
      if(location !== pathOption1){
        locationPool2.push(location)
      }
    })
    const pathOption2 = locationPool2[Math.floor(Math.random()*locationPool2.length)];
    this.pathOptions.push(pathOption2)

    const locationPool3 = []
    locationPool2.forEach(location => {
      if(location !== pathOption2){
        locationPool3.push(location)
      }
    })
    const pathOption3 = locationPool3[Math.floor(Math.random()*locationPool3.length)];
    this.pathOptions.push(pathOption3)

    this.pathOptions.forEach(pathOption => {
      this.pathOptionsInfo.push(this.explorationData.locationInfo[pathOption])
    });
  }

  public explorePathOption(pathOptionIndex) {
    const info = this.pathOptionsInfo[pathOptionIndex]
    const listString = []
    listString.push(info[this.stat.language].arrivee.text)
    listString.push(`Tu as pris ${info.healthMinus} point(s) de dégât!`)
    listString.push(`Tu es ${info.sleepMinus}% plus fatigué!`)
    listString.push(`Ta faim a augmenté de ${info.hungerMinus}%!`)
    this.stat.hungerMinus(info.hungerMinus)
    this.stat.sleepMinus(info.sleepMinus)
    this.stat.healthMinus(info.healthMinus)
    listString.push(`À toi de choisir ce que tu vas faire maintenant comme action!`)
    this.currentLocation = this.pathOptions[pathOptionIndex]
    return listString
  }

  public doAction(actionType){
    const info = this.explorationData.actionTextList[this.stat.language][actionType][this.currentLocation].text
    const listString = []
    listString.push(info[this.stat.language].arrivee.text)
    listString.push(`Tu as pris ${info.healthMinus} point(s) de dégât!`)
    listString.push(`Tu es ${info.sleepMinus}% plus fatigué!`)
    listString.push(`Ta faim a augmenté de ${info.hungerMinus}%!`)
    this.stat.hungerMinus(info.hungerMinus)
    this.stat.sleepMinus(info.sleepMinus)
    this.stat.healthMinus(info.healthMinus)
    listString.push(`À toi de choisir ce que tu vas faire maintenant comme action!`)
    return listString
  }
}
