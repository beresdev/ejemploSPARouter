
let app_div = document.getElementById('app');

export const home= () => {
    console.log('inicia función home')
    let div = document.createElement('div'); //Crea un div 
    let link = document.createElement('a'); //Crea una etiqueta <a>
    let br = document.createElement('br')
    let linkb = document.createElement('a');
    let br2 = document.createElement('br')
    let linkR = document.createElement('a');
    let br3 = document.createElement('br')
    let linkc = document.createElement('a');

    link.href = '#/about'; //Le agrega el atributo href a la etiqueta <a> 
    link.innerText = 'About'; //Le agrega el contenido a la etiqueta <a>
    //Resultado: <a href='#/about'>About</a>

    linkb.href = '#/blog';
    linkb.innerText = 'Blog';

    linkR.href = '#/registro';
    linkR.innerText = 'registrate';
    
    linkc.href = '#/contact';//Le agrega el atributo href a la etiqueta <a>
    linkc.innerText = 'Contact';

    div.innerHTML = '<h1>Home</h1>'; // Inserta una etiqueta <h1> al div
    //Resultado: <div><h1>Home</h1></div>
    div.appendChild(link); // A div se le agrega un nodo (la etiqueta <a href='#/about'>About</a>)
    //Resultado: <div><h1>Home</h1>  <a href='#/about'>About</a> </div>
    div.appendChild(br);
    div.appendChild(linkb);
    div.appendChild(br2)
    div.appendChild(linkR)
    div.appendChild(br3)
    div.appendChild(linkc); 

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
export const about= () => {
    console.log('inicia función about')
    let div = document.createElement('div');//Crea un div 
    let link = document.createElement('a');//Crea una etiqueta <a>
    let br = document.createElement('br');
    let linkR = document.createElement('a')
    let br2 = document.createElement('br');
    let linkb = document.createElement('a');
    let br3 = document.createElement('br');
    let linkc = document.createElement('a');

    link.href = '#/';//Le agrega el atributo href a la etiqueta <a>
    link.innerText = 'Home'; //Le agrega el contenido a la etiqueta <a>
    //Resultado: <a href='#/'>Home</a>

    linkb.href = '#/blog';
    linkb.innerText = 'Blog';

    linkR.href = '#/registro';
    linkR.innerText = 'registrate';
    linkc.href = '#/contact';
    linkc.innerText = 'Contact';

    div.innerHTML = '<h1>About</h1>';// Inserta una etiqueta <h1> al div
    //Resultado: <div><h1>About</h1></div>

    div.appendChild(link); // A div se le agrega un nodo (la etiqueta <a href='#/'>Home</a>)
    //Resultado: <div><h1>About</h1>  <a href='#/'>Home</a> </div>
    div.appendChild(br);
    div.appendChild(linkb);
    div.appendChild(br2);
    div.appendChild(linkR);
    div.appendChild(br3);
    div.appendChild(linkc); 

    app_div.appendChild(div);
    // Resultado:
    // <div id='app'>
    //     <div>
    //         <h1>About</h1>
    //         <a href='#/'>Home</a>
    //     </div>
    // </div>
};

export const blog= () => {
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
    let br3 = document.createElement('br');
    let linkc = document.createElement('a');

    link.href = '#/';
    link.innerText = 'Home';

    linkb.href = '#/about';
    linkb.innerText = 'About';

    linkR.href = '#/registro';
    linkR.innerText = 'registrate';

    linkc.href = '#/contact';
    linkc.innerText = 'contact';

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
    section.appendChild(br3);
    section.appendChild(linkc);

    app_div.appendChild(section);
}



export const registrar= () => {
    let div = document.createElement('div');//Crea un div 
    let link = document.createElement('a');//Crea una etiqueta <a>
    let br = document.createElement('br');
    let linkb = document.createElement('a')
    let br2 = document.createElement('br');
    let link3 = document.createElement('a')
    let br3 = document.createElement('br');
    let linkc = document.createElement('a')
    let br4 = document.createElement('br');


    
    link.href = '#/'
    link.innerText = 'Home';


    linkb.href = '#/about';
    linkb.innerText = 'About';

    link3.href = '#/blog';
    link3.innerText = 'Blog';

    linkc.href = '#/contact';
    linkc.innerText = 'Contact';

    div.innerText = 'Bienvenida a nuestra plataforma'
    div.appendChild(br);
    div.appendChild(link);
    div.appendChild(br2);
    div.appendChild(linkb);
    div.appendChild(br3);
    div.appendChild(link3);
    div.appendChild(br4);
    div.appendChild(linkc);

    app_div.appendChild(div)
}

//FUNCIÓN DE LA VISTA CONTACT
export const contact= () => {
    console.log('inicia función contact')
    let div = document.createElement('div');//Crea un div 
    let link = document.createElement('a');//Crea una etiqueta <a>
    let br = document.createElement('br');
    let linkc = document.createElement('a');
    let br1 = document.createElement('br');
    let linkb = document.createElement('a');//Crea una etiqueta <a>
    let br2 = document.createElement('br');
    let linkr = document.createElement('a');
    let br3 = document.createElement('br');

    link.href = '#/';//Le agrega el atributo href a la etiqueta <a>
    link.innerText = 'Home'; //Le agrega el contenido a la etiqueta <a>
    //Resultado: <a href='#/'>Home</a>

    linkc.href = '#/about';
    linkc.innerText = 'About';

    linkb.href = '#/blog';
    linkb.innerText = 'Blog';

    linkr.href = '#/registro';
    linkr.innerText = 'registrate';

    div.innerHTML = '<h1>Contact</h1>';// Inserta una etiqueta <h1> al div
    //Resultado: <div><h1>About</h1></div>

    div.appendChild(link); // A div se le agrega un nodo (la etiqueta <a href='#/'>Home</a>)
    //Resultado: <div><h1>About</h1>  <a href='#/'>Home</a> </div>
    div.appendChild(br);
    div.appendChild(linkc);
    div.appendChild(br1);
    div.appendChild(linkb);
    div.appendChild(br2);
    div.appendChild(linkr);
    div.appendChild(br3);


    app_div.appendChild(div);
    // Resultado:
    // <div id='app'>
    //     <div>
    //         <h1>Contact</h1>
    //         <a href='#/'>Home</a>
    //     </div>
    // </div>
};