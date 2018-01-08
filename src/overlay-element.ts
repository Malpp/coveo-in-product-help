import * as $ from 'jquery';
import { HelperLayover } from "./helper-layover";

class OverlayElement {
	selector: string;
	div: HTMLDivElement;
	constructor(selector: string, layover: HelperLayover) {
		this.selector = selector;
		this.div = document.createElement('div');
		this.resize();
		$(`#${layover.layoverId}`).append(this.div);
		$(window).bind("resize", function () {
			this.resize();
		}.bind(this));
		console.log("created");
	}

	resize() {
		let otherElement = $(this.selector);
		$(this.div).css(
			{
				'all': 'unset',
				'position': 'absolute',
				'padding': '0',
				'margin': '0',
				'top': otherElement.offset().top,
				'left': otherElement.offset().left,
				'height': otherElement.outerHeight(),
				'width': otherElement.outerWidth(),
				'border': '1px black solid'
			}
		);
	}
}

export { OverlayElement };