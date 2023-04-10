import { LightningElement, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioUserStatus extends LightningElement {

    trailheadImg = `${PortfolioAssets}/PortfolioAssets/Ranks/Mountaineer.png`
    /* @api  */badges = '50+'
    /* @api  */points = '5120+'
  /*  @api */ rank

   /*  renderCallback(){
        if(this.rank){
            let url = `${PortfolioAssets}/PortfolioAssets/Ranks/${this.rank}.png`
            this.trailheadImg = url
        }
    } */
}