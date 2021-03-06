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

  public hasMonster = false
  public monsterName = ''
  public monsterInfo: any = {}

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
    if (this.stat.gaugeInfo.health.current <= 0)
      return ["Tu es mort !"]
    if (this.stat.language === "français")
    {
      listString.push(info[this.stat.language].arrivee.text)
      listString.push(`Tu as pris ${info.healthMinus} point(s) de dégât!`)
      listString.push(`Tu es ${info.sleepMinus}% plus fatigué!`)
      listString.push(`Ta faim a augmenté de ${info.hungerMinus}%!`)
      this.stat.hungerMinus(info.hungerMinus)
      this.stat.sleepMinus(info.sleepMinus)
      this.stat.healthMinus(info.healthMinus)
      if(!this.hasMonster) {
        const random = (Math.random() * (100 - 0)) + 0
        if(random <= info.chanceMonster){
          this.hasMonster = true
          const randomMonster = info.monsterList[Math.floor(Math.random()*info.monsterList.length)];
          this.monsterName = randomMonster
          console.log(this.explorationData);
          this.monsterInfo = this.explorationData.monsterTextList[this.stat.language][randomMonster]
          listString.push(this.monsterInfo.arrivee.text)
        }
      }
      listString.push(`À toi de choisir ce que tu vas faire maintenant comme action!`)
    }
    else
    {
      listString.push(info[this.stat.language].arrivee.text)
      listString.push(`T'as pris ${info.healthMinus} point(s) de dégât!`)
      listString.push(`T'es ${info.sleepMinus}% plus fatigué!`)
      listString.push(`Ta faim a augmenté de ${info.hungerMinus}%!`)
      this.stat.hungerMinus(info.hungerMinus)
      this.stat.sleepMinus(info.sleepMinus)
      this.stat.healthMinus(info.healthMinus)
      if(!this.hasMonster) {
        const random = (Math.random() * (100 - 0)) + 0
        if(random <= info.chanceMonster){
          this.hasMonster = true
          const randomMonster = info.monsterList[Math.floor(Math.random()*info.monsterList.length)];
          this.monsterName = randomMonster
          console.log(this.explorationData);
          this.monsterInfo = this.explorationData.monsterTextList[this.stat.language][randomMonster]
          listString.push(this.monsterInfo.arrivee.text)
        }
      }else{
        const random = (Math.random() * (100 - 0)) + 0
        if(random <= 50){
          this.hasMonster = false
          listString.push(this.explorationData.monsterTextList[this.stat.language][this.monsterName].fuite.text)
        }else{
          listString.push(this.explorationData.monsterTextList[this.stat.language][this.monsterName].suivi.text)
        }
      }
      listString.push(`Maintenant aweille, choisi c'que tu vas faire!`)
    }
    this.currentLocation = this.pathOptions[pathOptionIndex]
    return listString
  }

  public doAction(actionType){
    const info = this.explorationData.actionTextList[this.stat.language][actionType]
    let actionChance = 0
    let actionString = ""
    if(actionType === 'dormir') actionChance = this.explorationData.locationInfo[this.currentLocation].chanceSleeping
    if(actionType === 'manger') actionChance = this.explorationData.locationInfo[this.currentLocation].chanceEating
    if(actionType === 'explorer') actionChance = this.explorationData.locationInfo[this.currentLocation].chanceFinding
    if(actionType === 'fuir') actionChance = this.explorationData.locationInfo[this.currentLocation].chanceRunning

    if(actionType === 'dormir') actionString = "sommeil"
    if(actionType === 'manger') actionString = "faim"
    if(actionType === 'explorer') actionString = "meh"
    if(actionType === 'fuir') actionString = "uh"

    const listString = []
    const random = (Math.random() * (100 - 0)) + 0
    const reussite = random <= actionChance
    if(actionType !== 'fuir'){
      listString.push(info[this.currentLocation].text)
      if(reussite){
        if (this.stat.language === "français"){
          listString.push(`Tu as regagné ${30}% de ${actionString}!`)
          listString.push(`Tu as regagné ${5}% de vie!`)
        }else{
          listString.push(`T'as récupéré ${30}% de ${actionString}!`)
          listString.push(`T'as récupéré ${5}% de vie!`)
        }

        if(actionType === 'dormir') this.stat.sleepBonus(30)
        if(actionType === 'manger') this.stat.hungerBonus(30)
        this.stat.healthBonus(5)
      } else{
        if (this.stat.language === "français"){
          listString.push(`Tu n'as rien regagné en ${actionString}!`)
          listString.push(`Tu as pris ${10} point(s) de dégât!`)
        }else{
          listString.push(`T'as rien récupéré en ${actionString}!`)
          listString.push(`T'as pris ${10} point(s) de dégât!`)
        }
        this.stat.healthMinus(10)
      }
    } else{
      if(reussite){
        if (this.stat.language === "français"){
          listString.push(`Tu as regagné ${15}% de vie!`)
        }else{
          listString.push(`T'as récupéré ${15}% de vie!`)
        }
        this.hasMonster = false
        listString.push(this.explorationData.monsterTextList[this.stat.language][this.monsterName].fuite.text)
        this.stat.healthBonus(15)
      } else{
        if (this.stat.language === "français"){
          listString.push(`Tu as pris ${5} point(s) de dégât!`)
        }else{
          listString.push(`T'as pris ${5} point(s) de dégât!`)
        }
        listString.push(this.explorationData.monsterTextList[this.stat.language][this.monsterName].attaque.text)
        this.stat.healthMinus(5)
      }
    }
    listString.push(`À toi de choisir ce que tu vas faire maintenant comme action!`)
    return listString
  }
}
