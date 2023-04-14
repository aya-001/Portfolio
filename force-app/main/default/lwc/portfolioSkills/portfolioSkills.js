import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import TECH_SKILLS from '@salesforce/schema/Portfolio__c.TechnicalSkills__c'
import SOFTWARE_TOOLS from '@salesforce/schema/Portfolio__c.SoftwareTools__c'
import SOFT_SKILLS from '@salesforce/schema/Portfolio__c.SoftSkills__c'

export default class PortfolioSkills extends LightningElement {

    techSkills = []
    softSkills = []
    toolsSkills = []

    @api recordId
    @wire(getRecord,{recordId:'$recordId',fields:[TECH_SKILLS, SOFTWARE_TOOLS, SOFT_SKILLS] })
    skillHandler({data, error}){
        if(data){
            console.log("Skills Data", JSON.stringify(data))
            this.formatSkills(data)
        }
        if(error){
            console.error(error)
        }
    }

    formatSkills(data){
        const {SoftSkills__c,  SoftwareTools__c,TechnicalSkills__c} = data.fields

        this.techSkills = TechnicalSkills__c ? TechnicalSkills__c.value.split(','):[]
        this.softSkills = SoftSkills__c ? SoftSkills__c.value.split(','):[]
        this.toolsSkills = SoftwareTools__c ? SoftwareTools__c.value.split(','):[]
    }
    

}