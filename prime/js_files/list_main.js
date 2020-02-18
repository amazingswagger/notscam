jQuery(document).ready(function() {
	jQuery('#xsearch').on('input', function() {
		if(jQuery('#xsearch').val().length > 0) {
		jQuery(".xgam").each(function() { jQuery(this).hide(); });
		jQuery(".xgam-names:contains('"+(jQuery('#xsearch').val().toLowerCase()).replace("'", "").replace("\"", "")+"')").parent().show();
		} else {
			jQuery(".xgam").each(function() { jQuery(this).show(); });
		}
	});
});