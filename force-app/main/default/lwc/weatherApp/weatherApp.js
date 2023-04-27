import { LightningElement } from 'lwc';
//const API_KEY = 'xxxxxxx' //to retrieve weather info 
import weatherAppIcons from '@salesforce/resourceUrl/weatherAppIcons';
import getWeatherDetails from '@salesforce/apex/weatherApController.getWeatherDetails'

export default class WeatherApp extends LightningElement {
    arrowImage = weatherAppIcons +'/weatherAppIcons/arrow-back.svg'
    cloudImage = weatherAppIcons +'/weatherAppIcons/cloud.svg'
    sunnyImage = weatherAppIcons +'/weatherAppIcons/clear.svg'
    hazeImage = weatherAppIcons +'/weatherAppIcons/haze.svg'
    rainImage = weatherAppIcons +'/weatherAppIcons/rain.svg'
    snowImage = weatherAppIcons +'/weatherAppIcons/snow.svg'
    stormImage = weatherAppIcons +'/weatherAppIcons/storm.svg'
    locationImage = weatherAppIcons +'/weatherAppIcons/map.svg'
    feelslikeImage = weatherAppIcons +'/weatherAppIcons/thermometer.svg'
    humidityImage = weatherAppIcons +'/weatherAppIcons/droplet.svg'
   
    

    cityName = ''
    loadingText = ''
    loadingError = false //to show fetching message
    response = ''
    weatherIcon

    //according success and failure of loading, chnage  class name
    get loadingClass(){
        return this.loadingError ? 'loading-failed':'loading-succeeded'
    }

    searchHandler(event){
        this.cityName = event.target.value
    }

    //form has refreshing feauture, prevent reflesh
    submitHandler(event){
        event.preventDefault()
        this.fetchData()
    }

    fetchData(){
        this.loadingText = 'Fetching weather info...'
        this.loadingError = false
        console.log("city Name:", this.cityName) 

        getWeatherDetails({input:this.cityName}).then(result=>{
            console.log(JSON.stringify(result))
            this.loadingCHheck(JSON.parse(result))

          }).catch((error)=>{
            console.error(error)
            this.response = null
            this.loadingText = "Something went wrong"
            this.loadingError = true
          })

        //const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${API_KEY}`
        //https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${API_KEY}
        //https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${this.cityName}&appid=${API_KEY}
        
        /* fetch(URL).then(res=>res.json()).then(result=>{
            //showsearch  result on console
                console.log(JSON.stringify(result))

                //if fetching date is succeded, update loading text to Blank
                /* this.loadingError = false
                this.loadingText = '' */
              /*  this.loadingCHheck(result)

            }).catch((error)=>{
                //when loading is failed for some reasons
                console.error(error)
                console.error("something went wrong...")
                //if fetching data is failed, show differnt text
                this.loadingError = true
                this.loadingText = 'loading is failed..'
        }) */
    }

    //when invalied word is entered,shpw message
    loadingCHheck(result){
        if(result.cod === '404'){
            this.loadingError = true
            this.loadingText = `${this.cityName}is not found`
        }else{
            this.loadingText = ''
            this.loadingError = false

            const city = result.name 
            const country = result.sys.country
            const {description, id} = result.weather[0]
            const {temp, feels_like, humidity,temp_max ,temp_min } = result.main
            if(id === 800){
                this.weatherIcon = this.sunnyImage
              } else if((id>=200 && id <=232) || (id>=600 && id <=622)){
                this.weatherIcon = this.stormImage
              } else if(id>=701 && id <=781){
                this.weatherIcon = this.hazeImage
              } else if(id>=801 && id <=804){
                this.weatherIcon = this.cloudImage
              } else if((id>=500 && id <=531) || (id>=300 && id<= 321)){
                this.weatherIcon = this.rainImage
              } else {}


            this.response = {
                city:city, 
                temperature:Math.floor(temp), 
                location:`${city}, ${country}`,
                description:description,
                feels_like:Math.floor(feels_like),
                humidity:`${humidity}%`,
                tempM:temp_max,
                tempN:temp_min

            }

        }
    }
    
    backHandler(){
        this.response = ''
        this.cityName = ''
        this.loadingText = ''
        this.loadingError = false
        this.weatherIcon = ''
    }

}