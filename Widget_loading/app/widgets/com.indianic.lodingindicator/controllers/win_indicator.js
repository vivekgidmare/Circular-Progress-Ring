/**
 * @author indianic
 */
var args = arguments[0];

Ti.API.info('Window :'+JSON.stringify(args));

$.activityIndicator.message = args.message;

// function open() {
	// $.loadingWindow.open();
	// $.activityIndicator.show();
// }
// 
// function close() {
	// $.loadingWindow.close();
	// $.activityIndicator.hide();
// }




$.openWindow=function()
{
	Ti.API.info('Window opened');
	
	$.loadingWindow.open();
	$.activityIndicator.show();
};

$.closeWin=function()
{

	$.loadingWindow.close();
	$.activityIndicator.hide(); 
	Ti.API.info('Window Closed');
};

// exports.open=open;
// exports.close=close;