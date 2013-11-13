// $.activityIndicator.show();
// // do some work that takes 6 seconds
// // ie. replace the following setTimeout block with your code
// setTimeout(function() {
// $.activityIndicator.hide();
// }, 6000);

var winCtrl;

$.init = function(args) {
	$.lbl.text = args.lbltext;

};

$.showIndicator = function(msg) {
	// $.activityIndicator.show();
	Ti.API.info('showIndicator :' + JSON.stringify(msg));
	var indicator_win = Widget.createController('win_indicator',msg);
	indicator_win.openWindow();

	winCtrl = indicator_win;
};
$.hideIndicator = function() {
	// $.activityIndicator.hide();
	Ti.API.info('Hide indicator');
	winCtrl.closeWin();
	winCtrl = null;

};
