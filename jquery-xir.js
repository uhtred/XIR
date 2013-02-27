;(function ( $, window, document, undefined ) {

    var defaults = {
            url: "",
            data: {},
            complete: function(){}
        };

    function _getTimeStamp(){

    	var timestamp = new Date().getTime();

		return "" + timestamp;

    }

    function xir( options ) {

        options = $.extend( {}, defaults, options );

		var req_img = new Image(),
			req_url_sep = /\?/.test( options.url ) ? '' : '?';


		req_img.src = options.url + req_url_sep + $.param(options.data) + '&_timestamp=' + _getTimeStamp() ;

    	if( options.complete ) {
			req_img.onload = options.complete;
		}
    }

   $.xir = xir;

})( jQuery, window, document );