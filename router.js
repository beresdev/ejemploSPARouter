let routes = {};
let templates = {};

export const route = (path, template) => { 
    console.log('inicia función route')

    if (typeof template === 'function') {
        console.log('template es una función');
        console.log(routes[path] = template);
        return routes[path] = template;

    } else if (typeof template === 'string') {
        console.log('template es un string');
        console.log(routes[path] = templates[template]);
        return routes[path] = templates[template];

    } else {
        return;
    };
};

export const template = (name, templateFunction) => {
    console.log('entra a la función template');
    console.log(templates[name] = templateFunction);
    return templates[name] = templateFunction;
};

export const resolveRoute = (route) => { 
    console.log('se ejecuta la función resolveRoute')
    try {
        return routes[route];
    }
    catch (e) {
        throw new Error(`Route ${route} not found`);
    }; 
};

export const router = () => { 
    console.log('entra función router')
    let url = window.location.hash.slice(1) || '/';
    console.log("la url es: ",url)
    let route = resolveRoute(url);
    console.log("route es: ", route);
    route();
};