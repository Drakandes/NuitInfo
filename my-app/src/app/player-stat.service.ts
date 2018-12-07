import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatService {

  public language = 'français'
  public gaugeList = ['health', 'sleep', 'hunger']

  public gaugeInfo = {
    health: {
      max: 100,
      current: 100,
      iconName: "favorite",
    },
    sleep : {
      max: 100,
      current: 100,
      iconName: "alarm",
    },
    hunger: {
      max: 100,
      current: 100,
      iconName: "restaurant",
    },
  }

  constructor() { 
  }

  public sleepMinus(minus){
    this.gaugeInfo.sleep.current--;
  }

  public hungerMinus(minus){
    this.gaugeInfo.hunger.current--;
  }

  public healthMinus(minus){
    this.gaugeInfo.health.current--;
  }
}
