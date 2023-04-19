import { LightningElement, api } from 'lwc';

export default class ClockDropdown extends LightningElement {
    @api label = ''
    @api options = []
    @api uniqueId = ''


    //when selecting options, onchange event is executed
    changeHandler(event){
        console.log(this.label)
        console.log(event.target.value)
        this.callparent(event.target.value)
    }


    //Call custom event "optionhandler"
    callparent(value){
        this.dispatchEvent(new CustomEvent('optionhandler',{detail:{label:this.label,value:value}}))
    }
    
}