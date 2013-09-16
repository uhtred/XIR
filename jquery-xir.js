;(function ( $, window, document, undefined ) {

    var defaults = {
		url: "",
		data: { '_timestamp': ( new Date() ).getTime() },
		complete: function(){}
	};

    function xir( options ) {

        options = $.extend( true, {}, defaults, options );

		var req_img = new Image(),
			req_url_sep = /\?/.test( options.url ) ? '' : '?';

		req_img.src = options.url + req_url_sep + $.param( options.data );

    	if( options.complete ) {
			req_img.onload = options.complete;
		}
    }

   $.xir = xir;

})( jQuery, window, document );
