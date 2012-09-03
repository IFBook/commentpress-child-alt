/* 
===============================================================
Child Theme Javascript
===============================================================
AUTHOR			: Christian Wach <needle@haystack.co.uk>
LAST MODIFIED	: 03/09/2012
REQUIRES		: cp_js_common.js
---------------------------------------------------------------
*/



// is the admin bar shown?
if ( cp_wp_adminbar == 'y' ) {

	// open style declaration
	styles = '<style type="text/css" media="screen">';

	// move down
	styles += '#header { top: 95px !important; } ';

	// close style declaration
	styles += '</style>';

	// write to page now
	document.write( styles );
	
}

