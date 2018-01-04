import * as $ from 'jquery';

class CoveoAPI{
	
	pushUrl: string;

	constructor(
		private coveoPushUrl: string, 
		private coveoOrdId: string, 
		private coveoSourceId: string, 
		private pushApiKey: string
	) {
        this.pushUrl = `https://${coveoPushUrl}/v1/organizations/${coveoOrdId}/sources/${coveoSourceId}/documents?compressionType=Uncompressed&documentId=`;
	}
	
	add_to_push(url: string, data: object){
		$.ajax({
			type: 'PUT',
			url: this.pushUrl + url,
			data: data,
			success: function(output){
				console.log(output);
			}
		});
	}

}