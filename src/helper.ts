import * as $ from 'jquery';
import { HelperLayover } from "./helper-layover";
import { CoveoAPI } from "./coveo-pushapi";

class Helper {
    buttonId: string;
    popupIsShowing: boolean;
    layover: HelperLayover;
    api: CoveoAPI;
    constructor() {
        this.buttonId = "__helper-button";
        this.popupIsShowing = false;
        this.addPopupButton();
        this.layover = new HelperLayover;
        this.api = new CoveoAPI;

        this.layover.addElement("#Title");
        this.layover.addElement("#Description");
        this.layover.addElement("#Link");
    }

    private addPopupButton() {
        $('html').append(`  
        <div id="${this.buttonId}" style="all:unset;position: fixed;top: 0em;right: 0em;border: 1px solid black;padding: 0;z-index: 999999999;">
            Coveo Help
                                
            <a href="#" style="position:absolute; 
            width:100%;
            height:100%;
            top:0;
            left: 0;
            z-index: 999999999;"><span></span></a>
        </div>`);
        $(`#${this.buttonId} > a`).on('click', function () {
            this.togglePopup();
        }.bind(this));
    }

    togglePopup() {
        if (!this.popupIsShowing) {
            console.log("Opened");
            this.layover.show();
        }
        else {
            console.log("Closed");
            this.layover.hide();
        }

        this.popupIsShowing = !this.popupIsShowing;
    }
}

export { Helper };