var html = document.documentElement;

var fontsfile = document.createElement('link');
fontsfile.href = pathTemplate + 'css/fonts.css';
fontsfile.rel = 'stylesheet';
document.head.appendChild(fontsfile);

if (sessionStorage.fontsLoaded) {
    html.classList.add('fonts-loaded');
} else {
    var script = document.createElement('script');
    script.src = pathTemplate + 'js/fontfaceobserver.js';
    script.async = true;

    script.onload = function () {
        var Rubik300 = new FontFaceObserver('Rubik', {
            weight: '300'
        });
        var Rubik300i = new FontFaceObserver('Rubik', {
            weight: '300',
            style: 'italic'
        });
        var Rubik400 = new FontFaceObserver('Rubik', {
            weight: 'normal'
        });
        var Rubik500 = new FontFaceObserver('Rubik', {
            weight: '500'
        });
        var Rubik700 = new FontFaceObserver('Rubik', {
            weight: '700'
        });
        var IBMPlexSans600 = new FontFaceObserver('IBMPlexSans', {
            weight: '600'
        });

        Promise.all([
            Rubik300.load(),
            Rubik300i.load(),
            Rubik400.load(),
            Rubik500.load(),
            Rubik700.load(),
            IBMPlexSans600.load()
        ]).then(function () {
            html.classList.add('fonts-loaded');
            sessionStorage.fontsLoaded = true;
        });
    };
    document.head.appendChild(script);
}