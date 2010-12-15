$.mockjaxSettings = {
	responseTime: 650
};

$.mockjax({
	url: '/some/url',
	responseTime: 1500
});

$.mockjax({
	url: '/another/url'
});

$.mockjax({
	url: '*'
});

$.mockjax(function onRequest(request) {
	req.url = "/test/" + req.url;
	return false;
});
