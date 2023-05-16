import { LightningElement,api } from 'lwc';

export default class Notification extends LightningElement {
    showNotification = false;
    message;
    varuant;
    
    //change class name of HTML ,based on the result 
    get calssNotification(){
        let variantClass =
        this.varuant === 'success'? 'slds-theme_success':
        this.varuant === 'warning'? 'slds-theme_warning':
        this.varuant === 'error'? 'slds-theme_error': 'slds-theme_info'

        return `slds-notify slds-notify_toast ${variantClass}`
    }

    //to be called from outsides of this js
    //5 second of  timeout
   @api showToast(){
    this.showNotification = true;

    /* setTimeout(()=>{
        this.showNotification = false;
    },5000); */

   }

}