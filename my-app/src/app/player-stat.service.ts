import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatService {

  public language = 'quebecois'
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
    setInterval(() => {
      this.gaugeInfo.health.current--
    }, 500)
  }
}
