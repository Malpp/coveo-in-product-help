import * as $ from 'jquery';
import { HelperLayover } from "./helper-layover";

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

export { OverlayElement };