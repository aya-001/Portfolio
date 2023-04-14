import { LightningElement, wire, api } from 'lwc';
import 	PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import {getFieldValue, getRecord} from 'lightning/uiRecordApi'
import FULLNAME from '@salesforce/schema/Portfolio__c.Full_Name__c'
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.Company__c'
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.Company_Location__c'
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'



export default class PortfolioBanner extends LightningElement {

    @api linkedinUrl = "https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin";
    @api gitHubUrl = "https://github.com/aya-001?tab=repositories";
    

    @api userPic = `${PortfolioAssets}/PortfolioAssets/portfolioPhoto.png`;
    @api linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    @api gitHub = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;
    

    @api recordId = 'a042w00000zJATPAA4'
    @wire(getRecord, {recordId: '$recordId', fields:[FULLNAME,COMPANY_LOCATION,COMPANY_NAME,DESIGNATION]})
    portfolioData
   /*  portfolioHandler({data, error}){
        if(data){
            console.log("record Data", JSON.stringify(data));
        }
        if(error){
            console.log("error");
        }
    }     */

    get fullName(){
        return getFieldValue(this.portfolioData.data, FULLNAME)
    }

    get companyLocation(){
        return getFieldValue(this.portfolioData.data, COMPANY_LOCATION)
    }

    get companyName(){
        return getFieldValue(this.portfolioData.data, COMPANY_NAME)
    }

    get designation(){
        return getFieldValue(this.portfolioData.data, DESIGNATION)
    }


}

