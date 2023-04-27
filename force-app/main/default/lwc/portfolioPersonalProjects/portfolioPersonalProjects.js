import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioPersonalProjects extends LightningElement {
    CTTracing = `${PortfolioAssets}/PortfolioAssets/Projects/ContactTracing.png`
    Calculator = `${PortfolioAssets}/PortfolioAssets/Projects/SimpleCalculator.png`
    StudentRegister = `${PortfolioAssets}/PortfolioAssets/Projects/StuentRefistrationApp(Js.html.css).png`
    SLDSPage = `${PortfolioAssets}/PortfolioAssets/Projects/SLDSPage.png`
    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
    CurrencyCalculator = `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`
    Survey = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`
    NoteApp = `${PortfolioAssets}/PortfolioAssets/Projects/NoteApp.png`

    projects=[
        {
            "name":"Contact Tracing App",
            "img" : this.CTTracing,
            "link":"https://github.com/aya-001/Salesforce-Projects-2/blob/master/ContactTracingVideo.mp4",
            "code" :"https://github.com/aya-001/Salesforce-Projects-2"
        },
        {
            "name":"Simple Calculator",
            "img" : this.Calculator,
            "link":"https://github.com/aya-001/Portfolio/blob/master/Calculate_AppVideo.mp4",
            "code":"https://github.com/aya-001/Portfolio/tree/master/force-app/main/default/lwc/calculatorLWC"
        },
        {
            "name":"Student Registeration App",
            "img" : this.StudentRegister,
            "link":"https://github.com/aya-001/LWC-SLDS-Project/blob/master/Student_Registration_App.mp4",
            "code":"https://github.com/aya-001/LWC-SLDS-Project/tree/master/Student%20Registration%20App"
        },
        {
            "name":"SLDS Page/Google Map",
            "img" : this.SLDSPage,
            "link":"https://github.com/aya-001/LWC-SLDS-Project/blob/master/SLDS_Project.mp4",
            "code":"https://github.com/aya-001/LWC-SLDS-Project/tree/master/SLDS%20Simple%20Page"
        },
        {
            "name":"BMI Calculator App",
            "img" : this.BMICalculator,
            "link":"https://sfdx-portfolio-aya-dev-ed.develop.my.site.com/bmi-calculator?",
            "code":"https://github.com/aya-001/Portfolio/tree/master/force-app/main/default/lwc/bmiCalculator"
        },
        {
            "name":"AlarmClock App",
            "img" : this.AlarmClock,
            "link":"https://sfdx-portfolio-aya-dev-ed.develop.my.site.com/alarm-clock",
            "code":"https://github.com/aya-001/Portfolio/tree/master/force-app/main/default/lwc/alarmClockApp"
        },
        {
            "name":"CurrencyCalculator App",
            "img" : this.CurrencyCalculator,
            "link":"https://sfdx-portfolio-aya-dev-ed.develop.my.site.com/currency-converter",
            "code":"https://github.com/aya-001/Portfolio/tree/master/force-app/main/default/lwc/currencyConverter"
        },
        {
            "name":"Weather App",
            "img" : this.WeatherApp,
            "link":"https://sfdx-portfolio-aya-dev-ed.develop.my.site.com/weather-app",
            "code":""
        },
        {
            "name":"Survey App",
            "img" : this.Survey,
            "link":"",
            "code":""
        },
       /*  {
            "name":"Note App",
            "img" : this.NoteApp,
            "link":"",
            "code":""
        },
 */

    ]

}