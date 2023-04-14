import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import LANGUAGE from '@salesforce/schema/Portfolio__c.Language__c'
import 	PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioLanguage extends LightningElement {
    languageList = []
    @api langLogo = `${PortfolioAssets}/PortfolioAssets/language.png`

    @api recordId
    @wire(getRecord,{recordId:'$recordId', fields:[LANGUAGE]})
    languageFieldHandler({data, error}){
        if(data){
            console.log("langageHandler Data", JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
            console.error(error)
        }
    }

    
    formatData(data){
        const {Language__c} = data.fields
        this.languageList = Language__c? Language__c.value.split(','):[]
    
    }
}