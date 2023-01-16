
// Se crean dos objetos que van a contener las rutas y los templates
let routes = {};
let templates = {};

//Para acceder al div de app desde js
let app_div = document.getElementById('app');

//FUNCIÓN DE LA VISTA HOME
function home() {
    console.log('inicia función home')
    let div = document.createElement('div'); //Crea un div 
    let link = document.createElement('a'); //Crea una etiqueta <a>
    let br = document.createElement('br')
    let linkb = document.createElement('a');
    let br2 = document.createElement('br')
    let linkR = document.createElement('a');

    link.href = '#/about'; //Le agrega el atributo href a la etiqueta <a> 
    link.innerText = 'About'; //Le agrega el contenido a la etiqueta <a>
    //Resultado: <a href='#/about'>About</a>

    linkb.href = '#/blog';
    linkb.innerText = 'Blog';

    linkR.href = '#/registro';
    linkR.innerText = 'registrate';
    div.innerHTML = '<h1>Home</h1>'; // Inserta una etiqueta <h1> al div
    //Resultado: <div><h1>Home</h1></div>
    div.appendChild(link); // A div se le agrega un nodo (la etiqueta <a href='#/about'>About</a>)
    //Resultado: <div><h1>Home</h1>  <a href='#/about'>About</a> </div>
    div.appendChild(br);
    div.appendChild(linkb);
    div.appendChild(br2)
    div.appendChild(linkR)
    
    app_div.appendChild(div);
    // Resultado:
    // <div id='app'>
    //     <div>
    //         <h1>Home</h1>
    //         <a href='#/about'>About</a>
    //     </div>
    // </div>
};

//FUNCIÓN DE LA VISTA ABOUT
function about() {
    console.log('inicia función about')
    let div = document.createElement('div');//Crea un div 
    let link = document.createElement('a');//Crea una etiqueta <a>
    let br = document.createElement('br');
    let linkR = document.createElement('a')
    let br2 = document.createElement('br');
    let linkb = document.createElement('a');

    link.href = '#/';//Le agrega el atributo href a la etiqueta <a>
    link.innerText = 'Home'; //Le agrega el contenido a la etiqueta <a>
    //Resultado: <a href='#/'>Home</a>

    linkb.href = '#/blog';
    linkb.innerText = 'Blog';

    linkR.href = '#/registro';
    linkR.innerText = 'registrate';

    div.innerHTML = '<h1>About</h1>';// Inserta una etiqueta <h1> al div
    //Resultado: <div><h1>About</h1></div>

    div.appendChild(link); // A div se le agrega un nodo (la etiqueta <a href='#/'>Home</a>)
    //Resultado: <div><h1>About</h1>  <a href='#/'>Home</a> </div>
    div.appendChild(br);
    div.appendChild(linkb);
    div.appendChild(br2);
    div.appendChild(linkR);
    app_div.appendChild(div);
    // Resultado:
    // <div id='app'>
    //     <div>
    //         <h1>About</h1>
    //         <a href='#/'>Home</a>
    //     </div>
    // </div>
};

function blog() {
    // app_div.innerHTML('');
    console.log('Inicia la funcion blog')
    let section = document.createElement('section');
    let link = document.createElement('a');
    let br = document.createElement('br');
    let linkb = document.createElement('a');
    let br2 = document.createElement('br');
    let linkR = document.createElement('a');
    let h3 = document.createElement('h3');
    let img = document.createElement('img');
    let p = document.createElement('p');

    link.href = '#/';
    link.innerText = 'Home';

    linkb.href = '#/about';
    linkb.innerText = 'About';

    linkR.href = '#/registro';
    linkR.innerText = 'registrate';

    section.innerHTML = '<h1>Blog</h1>';

    h3.innerText = 'Titulo de la entrada';
    img.src = 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    img.alt = 'Imagen de ejemplo con la palabra blog';
    p.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nemo, totam recusandae iusto amet impedit vero, magni nesciunt repudiandae est ex molestiae suscipit quasi! Porro accusantium mollitia sit eius quod eligendi fugit iure, alias eveniet, nemo error vel, enim voluptatum. Numquam dolore odit mollitia iure ullam qui nobis id sed! Quae, a, vel facilis minus cumque error soluta incidunt, beatae veniam optio deleniti esse id aut unde ratione obcaecati nam suscipit illum atque hic at autem eveniet? Atque, omnis assumenda maxime exercitationem eius reprehenderit fuga consequuntur praesentium recusandae voluptatibus quasi laborum voluptatem eum, et dignissimos quis! Consequatur doloribus similique optio.';

    section.appendChild(h3);
    section.appendChild(link);
    section.appendChild(br);
    section.appendChild(linkb);
    section.appendChild(br2);
    section.appendChild(linkR);
    section.appendChild(img);
    section.appendChild(p);

    app_div.appendChild(section);
}



function registrar() {
    let div = document.createElement('div');//Crea un div 
    let link = document.createElement('a');//Crea una etiqueta <a>
    let br = document.createElement('br');
    let linkb = document.createElement('a')
    let br2 = document.createElement('br');
    let link3 = document.createElement('a')
    let br3 = document.createElement('br');
    link.href = '#/'
    link.innerText = 'Home';


    linkb.href = '#/about';
    linkb.innerText = 'About';

    link3.href = '#/blog';
    link3.innerText = 'Blog';

    div.innerText = 'Bienvenida a nuestra plataforma'
    div.appendChild(br);
    div.appendChild(link);
    div.appendChild(br2);
    div.appendChild(linkb);
    div.appendChild(br3);
    div.appendChild(link3);
    app_div.appendChild(div)
}
//FUNCIÓN ROUTE
function route(path, template) { //Le entregamos dos parámetros a la función route: path('#/' o '#/About') 
    //y template (las funciones home y about)
    console.log('inicia función route')

    if (typeof template === 'function') {
        //Validamos si el typeof template es una función
        console.log('template es una función');
        console.log(routes[path] = template);
        return routes[path] = template; // El contenido de las funciones se reescribe?

    } else if (typeof template === 'string') {
        //Validamos si el typeof template es un string (nombre de archivo)
        console.log('template es un string');
        console.log(routes[path] = templates[template]);
        return routes[path] = templates[template]; // La función crea elementos del DOM

    } else {
        return; // Si no, no retorna nada, se provoca un error
    };
};


//FUNCIÓN TEMPLATE
function template(name, templateFunction) { //La función se llama template y espera dos parámetros
    console.log('entra a la función template');
    console.log(templates[name] = templateFunction);
    return templates[name] = templateFunction; // El objeto template recibe las funciones home() o about()
};

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

route('/', 'home'); // Ejecuta la función route con los parámetros path('/') y template('home')
route('/about', 'about'); // Ejecuta la función route von los parámetros path ('/about) y template ('about')
route('/registro', 'registrar');
route('/blog', 'blog');

function resolveRoute(route) {
    console.log('se ejecuta la función resolveRoute')
    try {
        return routes[route]; // Retorna el objeto ruta con el parámetro route
    }
    catch (e) {
        throw new Error(`Route ${route} not found`); //En caso de que la ruta no exista, arroja error
    };
};

function router() {
    console.log('entra función router')
    let url = window.location.hash.slice(1) || '/'; // guarda el valor de la ruta después del hash (gato o michi)
    console.log(url)
    let route = resolveRoute(url); // Declara la variable route y le asigna lo que regresa la función resolveRoute (la url)
    route() //Manda llamar a la función route
};

console.log('escuchando evento load')
window.addEventListener('load', router); // Con el evento load se ejecuta la función router
console.log('escuchando evento hashchange')
window.addEventListener('hashchange', router); // Con el evento hashchange, se ejecuta la función router