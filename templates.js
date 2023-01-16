let app_div = document.getElementById('app');

export const home = () => {
    console.log('inicia función home');
    let div = document.createElement('div');
    let link = document.createElement('a');
    let br = document.createElement('br');
    let linkb = document.createElement('a');

    link.href = '#/about';
    link.innerText = 'About';
    linkb.href = '#/blog';
    linkb.innerText = 'Blog';

    div.innerHTML = '<h1>Home</h1>';
    div.appendChild(link);
    div.appendChild(br);
    div.appendChild(linkb);
    app_div.appendChild(div);
}

export const about = () => {
    console.log('inicia función about');
    let div = document.createElement('div');
    let link = document.createElement('a');
    let br = document.createElement('br')
    let linkb = document.createElement('a');

    link.href = '#/';
    link.innerText = 'Home';
    linkb.href = '#/blog';
    linkb.innerText = 'Blog';

    div.innerHTML = '<h1>About</h1>';
    div.appendChild(link);
    div.appendChild(br);
    div.appendChild(linkb);
    app_div.appendChild(div);
}

export const blog = () => {
    console.log('Inicia la funcion blog')
    let section = document.createElement('section');
    let link = document.createElement('a');
    let linka = document.createElement('a');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p = document.createElement('p');

    link.href = '#/';
    link.innerText = 'Home';
    linka.href = '#/about';
    linka.innerText = 'About';

    h2.innerText = 'Titulo de la entrada';
    img.src = 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    img.alt = 'Imagen de ejemplo con la palabra blog';
    p.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nemo, totam recusandae iusto amet impedit vero, magni nesciunt repudiandae est ex molestiae suscipit quasi! Porro accusantium mollitia sit eius quod eligendi fugit iure, alias eveniet, nemo error vel, enim voluptatum. Numquam dolore odit mollitia iure ullam qui nobis id sed! Quae, a, vel facilis minus cumque error soluta incidunt, beatae veniam optio deleniti esse id aut unde ratione obcaecati nam suscipit illum atque hic at autem eveniet? Atque, omnis assumenda maxime exercitationem eius reprehenderit fuga consequuntur praesentium recusandae voluptatibus quasi laborum voluptatem eum, et dignissimos quis! Consequatur doloribus similique optio.';

    section.appendChild(h2);
    section.appendChild(link);
    section.appendChild(linka);
    section.appendChild(img);
    section.appendChild(p);
    app_div.appendChild(section);
}

export const clean = () => {
    app_div.innerHTML = '';
} 