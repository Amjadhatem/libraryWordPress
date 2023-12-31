'use strict';

xdLocalStorage.init(
    {
        iframeUrl:'https://codexpert.io/codesigner/xdLocalStorage.html',
        initCallback: function () {
            console.log('ready');
        }
    }
);

var WoolementorAddMenu = function( groups, element ) {
	groups.push(
		{
			name: 'x-copy-paste',
			actions: [
				{
					name: 'x-copy',
					title: 'Cross Domain Copy',
					callback: function() {
						$e.run('document/ui/copy', {
						  container: elementor.getPreviewContainer()
						});
						xdLocalStorage.setItem( 'codesigner', localStorage.elementor );
					}
				},
				{
					name: 'x-paste',
					title: 'Cross Domain Paste',
					callback: function() {
						xdLocalStorage.getItem( 'codesigner', function (data) {
							localStorage.elementor = data.value;
							$e.run('document/ui/paste', {
							  container: elementor.getPreviewContainer()
							});
						});
					}
				},
			]
		}
	);

	return groups;
}

elementor.hooks.addFilter( 'elements/section/contextMenuGroups', function( groups, element ) {
	return WoolementorAddMenu( groups, element );
} );
elementor.hooks.addFilter( 'elements/widget/contextMenuGroups', function( groups, element ) {
	return WoolementorAddMenu( groups, element );
} );
elementor.hooks.addFilter( 'elements/column/contextMenuGroups', function( groups, element ) {
	return WoolementorAddMenu( groups, element );
} );