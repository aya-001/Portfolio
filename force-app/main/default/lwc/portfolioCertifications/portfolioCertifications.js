import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SFDC_CERTIFICATE from '@salesforce/schema/Portfolio__c.SalesforceCertifications__c'
import OTHER_CERTIFICATE from '@salesforce/schema/Portfolio__c.OtherCertifications__c'
import 	PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioCertifications extends LightningElement {

    @api certLogo = `${PortfolioAssets}/PortfolioAssets/cert_logo.png`
    sfdcCertificateList = []
    otherCertificateList = []

    @api recordId
    @wire(getRecord,{recordId:'$recordId', fields:[SFDC_CERTIFICATE, OTHER_CERTIFICATE]})
    certificateHandler({data, error}){
        if(data){
            console.log("CertificateHandler Data", JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
            console.error("CertificateHandler Error", error)
        }
    }


    formatData(data){
        const {SalesforceCertifications__c, OtherCertifications__c} = data.fields
        this.sfdcCertificateList = SalesforceCertifications__c? SalesforceCertifications__c.value.split(';'):[]
        /* SalesforceCertifications__c? SalesforceCertifications__c.value.split(';').map(item=>{
            return `Salesforce Certified ${item}
        }):[]    
        ※if putiint another text */

        this.otherCertificateList = OtherCertifications__c? OtherCertifications__c.value.split(','):[]
    }

}