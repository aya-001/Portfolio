import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioPersonalProjects extends LightningElement {
    CTTracing = `${PortfolioAssets}/PortfolioAssets/Projects/contactTracing.jpg`
    Calculator = `${PortfolioAssets}/PortfolioAssets/Projects/SimpleCalculator.png`
    StudentRegister = `${PortfolioAssets}/PortfolioAssets/Projects/StuentRefistrationApp(Js.html.css).png`

    projects=[
        {
            "name":"Contact Tracing App",
            "img" : this.CTTracing,
            "link":"https://github.com/aya-001/Salesforce-Projects-2/blob/master/ContactTracingVideo.mp4"
        },
        {
            "name":"Contact Tracing App",
            "img" : this.CTTracing,
            "link":"https://github.com/aya-001/Salesforce-Projects-2/blob/master/ContactTracingVideo.mp4"
        },


    ]

}