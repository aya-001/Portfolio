import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetailsAndStatusWrapper extends LightningElement {
   @api recordId="a042w00000zJATPAA4"
    @api objectApiName="Portfolio__c"

    @api rank 
    @api badges
    @api points 
    @api resumeUrl
}