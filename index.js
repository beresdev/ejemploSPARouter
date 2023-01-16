import {home, about, blog, clean} from "./templates.js";
import{ template, route, router} from "./router.js";

template('home', function () {
    home(); 
});

template('blog', function () {
    blog();
})

template('about', function () { 
    about();
})

route('/', 'home'); 
route('/about', 'about');
route('/blog', 'blog');


window.addEventListener('load', router); 
window.addEventListener('hashchange', clean);
window.addEventListener('hashchange', router);