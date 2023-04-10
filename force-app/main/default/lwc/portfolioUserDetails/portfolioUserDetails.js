import { LightningElement, api} from 'lwc';

export default class PortfolioUserDetails extends LightningElement {

    @api objectApiName
    @api recordId
    @api resumeUrl

    downloadResume(){
        window.open("https://github.com/aya-001/LWC-SLDS-Project", "_blank")
    }
}