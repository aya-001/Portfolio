import { LightningElement } from 'lwc';


export default class BmiCalculator extends LightningElement {
    height = ''
    weight = ''
    bmiRound = ''
    result = ''

    /* put value into variety, according to onchange event of html, wether input is height or weight */
    inputHandler(event){
        const {name, value} = event.target
        if(name === "height"){
            this.height = value;
        }
        if(name === "weight"){
            this.weight = value;
        }
    }

    /* to see result ,when any buttom is clicked */
    submitHandler(event){
        event.preventDefault()
        console.log("height", this.height)
        console.log("weight", this.weight)
        this.calculate()
    }

    calculate(){
        let heightM = Number(this.height)/100;
        let bmi = Number(this.weight)/(heightM * heightM);
        console.log("bmi:" , bmi);

        //to do round off the number
        this.bmiRound = Number(bmi.toFixed(2))

        if(this.bmiRound <18.5){
            this.result = "underweight"
        }else if(this.bmiRound >= 18.5 && this.bmiRound<= 25){
            this.result = "Healthy"
        }else if(this.bmiRound >= 25 && this.bmiRound <= 30){
            this.result = "overweight"
        }else if(this.bmiRound > 30){
            this.result = "Obese"
        }

        console.log("result :" , this.result);
        console.log("bmi round :" , this.bmiRound)
    }

    recalculate(){
        //when recaluculate is pused, reset the value
        this.height = ''
        this.weight = ''
        this.bmiRound = ''
        this.result = ''
    }


}