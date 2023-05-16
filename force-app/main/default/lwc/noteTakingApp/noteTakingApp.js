import Name from '@salesforce/schema/Account.Name';
import { LightningElement } from 'lwc';
import creatNotRecord from '@salesforce/apex/NoteTakingController.creatNotRecord';

//define default fields
const DEFAULT_NOTE_FORM = {
    Name: "",
    Note_Descriptions__c: ""
}
export default class NoteTakingApp extends LightningElement {

    showModal = false;
    defaultNoteForm = DEFAULT_NOTE_FORM
    //To enable the color format, add this to the list of formats.
    formats = [
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'indent',
        'align',
        'link',
        'image',
        'clean',
        'table',
        'header',
        'color',
    ];

    //as soon as click the box of "Add new Note", show modal turns True
    createNoteHandler(){
        this.showModal = true
    }

    canecelHandler(){
        this.showModal = false
        this.defaultNoteForm = DEFAULT_NOTE_FORM
    }

    changeHandler(event){
        const {name,value} = event.target
        /* name = Name
        value = test */
        this.defaultNoteForm = {...this.defaultNoteForm, [name]:value}

    }

    saveHandler(event){
        event.preventDefault(event);
        console.log("this defaultNoteForm :",JSON.stringify(this.defaultNoteForm) );
        //off the showMOdal
        this.creatNotRecordMethod();

        //show toast on element(c-notification)
        const element = this.template.querySelector('c-notification');
        if(element){
            element.showToast();
        }

    }

    //if forms are not filled, return True
    //referring info by Getter from HTML
    get formIsNotFilled(){
        return !(this.defaultNoteForm.Name && this.defaultNoteForm.Note_Descriptions__c && this.defaultNoteForm)
    }

    //method from Apex class
    //giving values of title,descrition to Apex class
    //if the action is seccedded, off the showModal
    creatNotRecordMethod(){
        creatNotRecord({title:this.defaultNoteForm.Name, descriptionp:this.defaultNoteForm.Note_Descriptions__c}).then(()=>{
            this.showModal = false
        }).catch(error=>{
            console.error("error", error.message.body)
        })
    }

}