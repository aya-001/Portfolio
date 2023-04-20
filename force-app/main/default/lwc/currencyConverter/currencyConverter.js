import { LightningElement } from 'lwc';
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets';
import {countryCodeList} from 'c/countryCodeList' //service component

export default class CurrencyConverter extends LightningElement {
    currencyImage = currencyConverterAssets +'/currencyConverterAssets/currency.svg'
    countryList = countryCodeList
    countryFrom = "USD"
    countryTo = "JPY"
    handleChange(event){
        const {name, value} = event.target
        console.log("name", name)
        console.log("value", value)
        console.log("event target", event.target)

        this [name] = value
    }
}