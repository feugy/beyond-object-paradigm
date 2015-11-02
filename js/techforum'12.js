custom = {

	init: function() {

		$('.step').each(function() {

			var delay = 1000;
			$(this).find('.cascade').each(function(){
				$(this).css({
					"-moz-transition-delay": delay+'ms',
					"-webkit-transition-delay": delay+'ms'
				});
				delay += 1000
			});

			var code = $(this).find('> pre')
			if (code.length > 0) {
				var content = code.html();
				code.empty();
				CodeMirror(code[0], {
        	value: content,
        	mode: 'javascript',
        	readOnly: true,
        	gutter: false
    		});
			}

		});

	}

}
