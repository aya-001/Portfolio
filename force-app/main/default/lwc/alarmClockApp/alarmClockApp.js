import { LightningElement} from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets';


export default class AlarmClockApp extends LightningElement {
  clockImage = AlarmClockAssets+'/AlarmClockAssets/clock.png'
  currentTime = ''
  hours = []
  minutes = []
  meridiem = ['AM', 'PM']
  hourSelected
  minSelected
  meridiemSelected
  alarmTime
  isAlarmSet = false
  
//call functions
//when element is added into property, connectedCallback()
  connectedCallback(){
    this.currentTimeHandler()
    this.createHoursOptions()
    this.createMinutesOptions()
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

    if(this.alarmTime ==`${hour}:${min} ${amPm}`){
      console.log("Alarm Triggered!")
    }
    }, 1000)
  
  }

  //to increse the number to show the number on select options of html
  //hours
  createHoursOptions(){
    for(let i=1; i<=12; i++){
      let val = i < 10? "0" + i : i
      this.hours.push(val)
    }
  }

  //minutes
  createMinutesOptions(){
    for(let i=0; i<=59; i++){
      let val = i < 10 ? "0" + i : i
      this.minutes.push(val)
    }
  }


  optionhandler(event){
    const {label, value} = event.detail

    if(label == "Hour(s)"){
      this.hourSelected = value
    }else if(label == "Minute(s)"){
      this.minSelected = value
    }else if(label == "AM/PM"){
      this.meridiemSelected = value
    }

    console.log("this hourSelected", this.hourSelected)
    console.log("this minSelected", this.minSelected)
    console.log("this meridiemSelected", this.meridiemSelected)
  }


  //buttom ON OFF
  //when all the field are not filled
  get isFieldNotSelected(){
    return !(this.hourSelected && this.minSelected && this.meridiemSelected)
  }

//set alarm time
  setAlarmHandler(){
    this.alarmTime = `${this.hourSelected}:${this.minSelected} ${this.meridiemSelected}`
    this.isAlarmSet = true

  }

}