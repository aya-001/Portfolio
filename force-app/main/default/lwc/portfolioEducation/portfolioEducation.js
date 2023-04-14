import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

const COLUMNS = [
    { label: 'Institution', fieldName: 'Institution' },
    { label: 'GraduationYear', fieldName: 'GraduationYear'},
    { label: 'Tttle', fieldName: 'Title' },
    
];

export default class PortfolioEducation extends LightningElement {
    tableData = []
    columns = COLUMNS

    @api recordId

    @wire(getRelatedListRecords,{
        parentRecordId:'$recordId',
        relatedListId:'Education__r', 
        fields:['Education__c.InstitutionName__c','Education__c.Title__c','Education__c.GraduationYear__c'], 
        sortBy:['Education__c.GraduationYear__c']
    })EducationHandler({data, error}){
        if(data){
            console.log("Education Data", JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
console.error(error)
        }
    }

    formatData(data){
        this.tableData = [...data.records].reverse().map(item=>{
            let Id = item.Id
            const {InstitutionName__c,Title__c, GraduationYear__c} = item.fields
            let Institution = InstitutionName__c.value
            let Title = Title__c.value
            let GraduationYear = GraduationYear__c.value

            return {Id, Institution, Title, GraduationYear}
        })
        console.log("this table Data", JSON.stringify(this.tableData))
    }


}