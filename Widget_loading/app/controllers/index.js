// // TODO: write your module tests here
/*var mpprogress = require('com.midhun.progress');
 // Ti.API.info("module is => " + mpprogress);
 var foo = mpprogress.createHUD({
 color   :"transparent",
 width   :'100%',
 height  :'100%',
 text    : "Hello",
 type    : "MMP_Type3",
 });                                          //creating Activity Indicator
 $.index.add(foo);
 */

var layer1 = Ti.UI.createView({
	width : 100,
	height : 100,
	borderRadius : 50,
	top : 200,
	left : 50,
	backgroundColor : "red"

});
$.index.add(layer1);

var layer2 = Ti.UI.createView({
	width : 50,
	height : 100,
	top : 200,
	left : 50,
	backgroundColor : "white",
	anchorPoint : {
		x : 1,
		y : 0.5
	}
});
$.index.add(layer2);
var layer21 = Ti.UI.createView({
	width : 100,
	height : 50,
	top : 200,
	left : 50,
	visible : false,
	backgroundColor : "white",
	anchorPoint : {
		x : 0.5,
		y : 1
	}
});
$.index.add(layer21);
var layer3 = Ti.UI.createView({
	width : 50,
	height : 100,
	top : 200,
	left : 100,
	backgroundColor : "white",
	anchorPoint : {
		x : 0,
		y : 0.5
	}
});
$.index.add(layer3);

var layer31 = Ti.UI.createView({
	width : 100,
	height : 50,
	top : 250,
	left : 50,
	backgroundColor : "white",
	anchorPoint : {
		x : 0.5,
		y : 0
	}
});
$.index.add(layer31);

var layer4 = Ti.UI.createView({
	width : 80,
	height : 80,
	borderRadius : 40,
	top : 210,
	left : 60,
	visible : true,
	backgroundColor : "white",
	anchorPoint : {
		x : 0,
		y : 0.5
	}
});
$.index.add(layer4);

var t = Ti.UI.create2DMatrix();
t = t.rotate(90);

var a = Titanium.UI.createAnimation();
a.transform = t;
a.duration = 1000;
a.autoreverse = false;

var b = Titanium.UI.createAnimation();
b.transform = t;
b.duration = 1000;
b.autoreverse = false;

var c = Titanium.UI.createAnimation();
c.transform = t;
c.duration = 1000;
c.autoreverse = false;

var d = Titanium.UI.createAnimation();
d.transform = t;
d.duration = 1000;
d.autoreverse = false;

var loadingWidget = $.indicator;

c.addEventListener("complete", function() {
	layer21.visible = true;
	layer2.visible = false;
	layer21.animate(c);
});

b.addEventListener("complete", function() {
	layer2.visible = true;
	$.index.add(rightView);

	layer31.visible = false;
	layer2.animate(c);
});

a.addEventListener("complete", function() {
	// layer3.visible = false;
	// layer31.animate(b);
});

function doClick(e) {
	layer3.animate(a, function(e) {
		Ti.API.info('e :' + JSON.stringify(e));

	});
	setTimeout(function(e) {
		layer3.visible = false;
		layer31.animate(b);
	}, 900);

}

function doIndicator(e) {

	loadingWidget.showIndicator({
		message : "Loading..."
	});
	setTimeout(function() {
		loadingWidget.init({
			lbltext : 'This is new text'
		});
		loadingWidget.hideIndicator();
	}, 5000);
}

var rightView = Ti.UI.createView({
	width : 50,
	height : 100,
	top : 200,
	left : 100,
	visible : true,
	backgroundColor : "white",
	anchorPoint : {
		x : 0,
		y : 0.5
	}
});

var rightView1 = Ti.UI.createView({
	width : 100,
	height : 100,
	borderRadius : 50,
	// top : 350,
	top : 0,
	left : -50,
	visible : true,
	backgroundColor : "red",

});
var rightView2 = Ti.UI.createView({
	width : 80,
	height : 80,
	borderRadius : 40,
	// top : 360,
	top : 10,
	left : -40,
	visible : true,
	backgroundColor : "white",

});
rightView.add(rightView1);
rightView.add(rightView2);
// $.index.add(rightView);

$.index.open();
