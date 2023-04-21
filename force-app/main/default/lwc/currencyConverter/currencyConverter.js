import { LightningElement } from 'lwc';
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets';
import {countryCodeList} from 'c/countryCodeList' //service component

export default class CurrencyConverter extends LightningElement {
    currencyImage = currencyConverterAssets +'/currencyConverterAssets/currency.svg'
    countryList = countryCodeList
    countryFrom = "USD"
    countryTo = "JPY"
    result
    error
    amount = ''

    handleChange(event){
        const {name, value} = event.target
        console.log("name", name)
        console.log("value", value)
        console.log("event target", event.target)

        this [name] = value
        //everytime when there is a chane in any values, clear reault, error 
        //to caluculate again
        this.result = ''
        this.error = ''
    }

    //everytime when form is edited, this method is executed
    submitHandler(event){
        event.preventDefault()
        this.convert()
    }

    async convert(){
        //convert currency
        const API_URL = `https://api.exchangerate.host/convert?from=${this.countryFrom}&to=${this.countryTo}`; 
        try{
            const data = await fetch(API_URL)  //fetch retrieve as promise obj
            const jsonData = await data.json() //convert promise obj into Json obj to operate DOM
            console.log(jsonData)

            this.result = (Number(this.amount)* jsonData.result).toFixed(2)
            console.log("this result", this.result)
        }catch(error){
            console.log(error)
            this.error = "An error occured. Please try again..."
            
        }
    }


}