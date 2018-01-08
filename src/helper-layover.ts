import * as $ from 'jquery';
import { OverlayElement } from "./overlay-element";

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

	addElement(selector: string) {
		if ($(selector).length) {
			this.overlayElements.push(new OverlayElement(selector, this));
		}
		else {
			console.error(`Cannot find element: ${selector}`)
		}
	}
}

export { HelperLayover };