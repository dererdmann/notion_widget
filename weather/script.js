function script(d, s, id) {
	var js,
		fjs = d.getElementsByTagName(s)[0];
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://weatherwidget.io/js/widget.min.js';
	fjs.parentNode.insertBefore(js, fjs);
}
