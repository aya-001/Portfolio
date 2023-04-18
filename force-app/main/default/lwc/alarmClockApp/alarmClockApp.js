import { LightningElement} from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets';
import 	PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class AlarmClockApp extends LightningElement {
  currentTime
  clockImage = AlarmClockAssets+'/AlarmClockAssets/clock.png'

//when element is added into property, connectedCallback()
  connectedCallback(){
    this.currentTimeHandler()
  }


//get the surrent time
//repeat this functionevery second
  currentTimeHandler(){
    setInterval(()=>{
      let dateTime = new Date()
    let hour = dateTime.getHours()
    let min = dateTime.getMinutes()
    let sec = dateTime.getSeconds()
    let amPm = "AM"
    if(hour == 0){
      hour = 12
    }else if(hour >= 12){
      hour = hour - 12
      amPm = "PM"
    }

    hour = hour < 10 ? "0" + hour : hour
    min = min < 10 ? "0" + min : min
    sec = sec < 10 ? "0" + sec : sec

    this.currentTime = `${hour}:${min}:${sec}:${amPm}`
    }, 1000)
    
  
  }
}