import{route, template, router} from './routes.js'
import{home, about, registrar, blog, contact} from './views.js'


template('home', function () { //Se crea una función anónima
    home(); // Le asigna a la función anónima la función home()
});

template('about', function () { //Se crea una función anónima
    about(); // Le asigna a la función anónima la función about()
})

template('blog', function () { //Se crea una función anónima
    blog(); // Le asigna a la función anónima la función about()
})

template('registrar', function () {
    registrar();
})

template('contact', function () { //Se crea una función anónima
    contact(); // Le asigna a la función anónima la función contact()
})

route('/', 'home'); // Ejecuta la función route con los parámetros path('/') y template('home')
route('/about', 'about'); // Ejecuta la función route von los parámetros path ('/about) y template ('about')
route('/registro', 'registrar');
route('/blog', 'blog');
route('/contact', 'contact'); // Ejecuta la función route con los parámetros path ('/about) y template ('about')



console.log('escuchando evento load')
window.addEventListener('load', router); // Con el evento load se ejecuta la función router
console.log('escuchando evento hashchange')
window.addEventListener('hashchange', router); // Con el evento hashchange, se ejecuta la función router