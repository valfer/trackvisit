(function ($) {

	function load_users(main_elem, nid, dataloaded, datatotal)
	{	
		var url = 'ajax/visitors/' + nid + '/' + dataloaded;
		var ul_elem = main_elem.next().children().first();
		var loading = ul_elem.next();
		var load_more = loading.next();
		var close_link = load_more.next();
		loading.show();
		load_more.hide();
		jQuery.get(url, function(json_resp) {
			
			loading.hide();
			var status = json_resp.status;
			var	users = json_resp.data;	
			var	html_list = ul_elem.html();
			for (var u in users) {
			
				html_list += '<li>' + users[u] + '</li>';
			}
			ul_elem.html(html_list);
			dataloaded += users.length;
			
			if (datatotal > dataloaded)
				load_more.show();
			close_link.show();
			main_elem.attr('data-loaded', dataloaded);
		});
	}

	jQuery(document).ready(function($) {
	
		/*
		*
		* Show hide the visitors info in node content block
		*
		*/
		$('.trackvisit').bind('mouseover', function() {
			
			var list = $(this).next();
			var nid = parseInt($(this).attr('data-nid'));
			var dataloaded = parseInt($(this).attr('data-loaded'));
			list.show();
			if (dataloaded == 0)
			{
				var datatotal = parseInt($(this).attr('data-total'));
				load_users($(this), nid, dataloaded, datatotal);
			}
		});
	
		$('.trackvisit').click(function() {
			
			var list = $(this).next();
			list.toggle();
		});
	
		$('.trackvisit-list-close').click(function() {
			
			var list = $(this).parent();
			list.hide();
		});
	
		$('.trackvisit-list-more').click(function() {
			
			var list = $(this).parent();
			var main_elem = list.prev();
			var dataloaded = parseInt(main_elem.attr('data-loaded'));
			var nid = parseInt(main_elem.attr('data-nid'));
			var datatotal = parseInt(main_elem.attr('data-total'));
			load_users(main_elem, nid, dataloaded, datatotal);
		});
	
	});

})(jQuery);


