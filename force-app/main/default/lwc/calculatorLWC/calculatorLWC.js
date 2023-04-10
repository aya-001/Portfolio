import { LightningElement, track } from 'lwc';

export default class CalculatorLWC extends LightningElement {
    @track currentResult;
    @track previousResults = []; //put tprevious result in array
    @track showPreviousResults = false;

    firstNUmber;
    secondNumber;

    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber'){
            this.firstNUmber = event.target.value;

        }else if(inputBoxName === 'secondNumber'){
            this.secondNumber = event.target.value;
        }
    }


    addHandler(){
        const firstN = parseInt(this.firstNUmber);
        const secondN = parseInt(this.secondNumber);
        
        this.currentResult = `Result : ${firstN}+${secondN} = ${firstN+secondN}`;

        //put currentResult in the array of previusresult
        this.previousResults.push(this.currentResult); 
    }

    subHandler(){
        const firstN = parseInt(this.firstNUmber);
        const secondN = parseInt(this.secondNumber);
        
        this.currentResult = `Result : ${firstN}-${secondN} = ${firstN-secondN}`;

         //put currentResult in the array of previusresult
         this.previousResults.push(this.currentResult); 
    }

    multiplyHandler(){
        const firstN = parseInt(this.firstNUmber);
        const secondN = parseInt(this.secondNumber);
        
        this.currentResult = `Result of ${firstN}X${secondN} is ${firstN*secondN}`;

         //put currentResult in the array of previusresult
         this.previousResults.push(this.currentResult); 
    }

    divideHandler(){
        const firstN = parseInt(this.firstNUmber);
        const secondN = parseInt(this.secondNumber);
        
        this.currentResult = `Result of ${firstN}/${secondN} is ${firstN/secondN}`;

         //put currentResult in the array of previusresult
         this.previousResults.push(this.currentResult); 
    }

    showPreviousResultToggle(event){
        this.showPreviousResults = event.target.checked;
    }

}