import * as $ from 'jquery';

class CoveoAPI {

	pushUrl: string;
	coveoPushUrl: string;
	coveoOrdId: string;
	coveoSourceId: string;
	pushApiKey: string;

	apiAvailible: boolean;

	constructor() {
		let script = $("script[src*=helpOverlay]");
		this.apiAvailible = false;
		if (script) {
			if (script.attr("data-source-id")) {
				this.coveoSourceId = script.attr("data-source-id");
			}
			if (script.attr("data-org-id")) {
				this.coveoOrdId = script.attr("data-org-id");
			}
			if (script.attr("data-api-key")) {
				this.pushApiKey = script.attr("data-api-key");
			}
			if (script.attr("data-environment")) {
				this.coveoPushUrl = script.attr("data-environment");
			}
			else {
				this.coveoPushUrl = "";
			}
		}
		this.pushUrl = `https://push${this.coveoPushUrl}.cloud.coveo.com/v1/organizations/${this.coveoOrdId}/sources/${this.coveoSourceId}/documents?compressionType=Uncompressed&documentId=`;
	}

	add_to_push(url: string, data: object) {
		$.ajax({
			type: 'PUT',
			url: this.pushUrl + url,
			data: data,
			success: function (output) {
				console.log(output);
			}
		});
	}

}

export { CoveoAPI };