import * as moment from 'moment';
import * as $ from 'jquery';

class OverlayElement {
    selector: string;
    div: HTMLDivElement;
    constructor(selector: string, layover: HelperLayover) {
        this.selector = selector;
        let otherElement = $(this.selector);
        this.div = document.createElement('div');
        $(this.div).css(
            { 
                'all':'unset',
                'position': 'absolute',
                'padding': '0',
                'margin' : '0',
                'top' : otherElement.offset().top,
                'left' : otherElement.offset().left,
                'height' : otherElement.outerHeight(),
                'width' : otherElement.outerWidth(),
                'border' : '1px black solid'
            }
        );
        $(`#${layover.layoverId}`).append(this.div);
        console.log("created");
    }
}

class HelperLayover {
    layoverId: string;
    overlayElements: OverlayElement[];
    constructor() {
        this.layoverId = "__layover"
        $('html').append(`  
        <div id="${this.layoverId}"style="all:unset;position: absolute;z-index: 999999998;background:rgba(255,255,255,0.5);padding: 0;height:100vh;width:100%;top:0;left:0;padding:0;margin:0;overflow-y: auto;">
            
        </div>`);
        $(`#${this.layoverId}`).height($("html").height());
        this.hide();
        this.overlayElements = [];
    }

    hide() {
        $(`#${this.layoverId}`).hide();
    }

    show() {
        $(`#${this.layoverId}`).show();
    }

    addElement(selector: string){
        if($(selector).length){
            this.overlayElements.push(new OverlayElement(selector, this));
        }
        else{
            console.error(`Cannot find element: ${selector}`)
        }
    }
}

class Helper {
    buttonId: string;
    popupIsShowing: boolean;
    layover: HelperLayover;
    constructor() {
        this.buttonId = "__helper-button";
        this.popupIsShowing = false;
        this.addPopupButton();
        this.layover = new HelperLayover;

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

let helper = new Helper;
