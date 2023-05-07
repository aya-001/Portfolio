import { LightningElement } from 'lwc';


export default class Modal extends LightningElement {
    showModal = false

    //as soon as click the box of "Add new Note", show modal turns True
    createNoteHandler(){
        this.showModal = true
    }
}