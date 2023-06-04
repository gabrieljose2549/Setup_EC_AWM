let form = document.getElementById("form");
let inputNombre = document.getElementById("nombre");
let inputURL = document.getElementById("avatar-url");
let inputPresentacion = document.getElementById("presentacion");
let inputHTML = document.getElementById("html");
let inputJS = document.getElementById("js");
let inputCSS = document.getElementById("css");
let inputNode = document.getElementById("node");
let inputMongo = document.getElementById("mongo");
let posts = document.getElementById("listado-publicaciones");

const html_icon = 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg';
const js_icon = 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg';
const css_icon = 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg';
const node_icon = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg';
const mongo_icon = 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg';

const developerList = [
    {nameDeveloper:'Carla', photo:'https://i.pinimg.com/236x/6d/5e/38/6d5e38d19bf4c0c9554b1e6beab75952.jpg', bio: 'Hola, soy desarrolladora front-end desde hace 5 años...',
        languages:
        {
            html: true,
            javascript: true,
            css: true,
            node: false,
            mongodb: false
        }
    },
    {nameDeveloper:'Erick', photo:'https://i.pinimg.com/564x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg', bio: 'Hi, I am back-end developer from ten years ago, and ...',
        languages:
            {
                html: true,
                javascript: true,
                css: false,
                node: true,
                mongodb: true
            }
    },
    {nameDeveloper:'Maria', photo:'https://i.pinimg.com/564x/ed/be/19/edbe19b1fd4866b2d458aaabf8c02073.jpg', bio: 'Hola, soy DevOps en Facebook ...',
        languages:
            {
                html: false,
                javascript: false,
                css: false,
                node: true,
                mongodb: true
            }
    }
];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Button Clicked");
    formValidation();
});

let optionsValidation = () => {
    if (inputHTML.checked || inputCSS.checked || inputNode.checked || inputJS.checked || inputMongo.checked)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let formValidation = () => {
    if (inputNombre.value === "" && inputURL.value === "" && inputPresentacion.value === "")
    {
        console.log("failure");
    }
    else
    {
        if (optionsValidation())
        {
            console.log("success");
            acceptData();
        }
        else
        {
            console.log("failure");
        }
    }
}

let developerTemp = {

}

let acceptData = () => {
    developerTemp = {nameDeveloper:inputNombre.value, photo:inputURL.value, bio: inputPresentacion.value,
        languages:
        {
            html: inputHTML.checked,
            javascript: inputJS.checked,
            css: inputCSS.checked,
            node: inputJS.checked,
            mongodb: inputMongo.checked
        }
    };
    developerList.push(developerTemp);
    //console.log(developerList);
    createPost();
};

let createPost = () => {
    console.log(developerList);
    let content = ``;
    posts.innerHTML = ``;
    developerList.forEach(function(developer)
    {
        content += 
        `
        <div class="posts">
            <div>
                <img class="perfil" src=${developer.photo} alt=${developer.nameDeveloper}>
                <a href="#">${developer.nameDeveloper}</a>
                <span class="options-languages">
        `;
        if (developer.languages.html)
        {
            content += `<img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="html-5">`;
        }
        if (developer.languages.css)
        {
            content += `<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="css">`;
        }
        if (developer.languages.javascript)
        {
            content += `<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg" alt="java-script">`;
        }
        if (developer.languages.node)
        {
            content += `<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="node-js">`;
        }
        if (developer.languages.mongodb)
        {
            content += `<img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="mongo-db">`;
        }
        content += `</span><h3>`+ developer.bio + `</h3></div></div>`;
        console.log(developer);
    });

    posts.innerHTML += content
    vaciarCampos();
};

let vaciarCampos = () => {
    inputNombre.value = "";
    inputPresentacion.value = "";
    inputURL.value = "";
    inputHTML.checked = false;
    inputCSS.checked = false;
    inputMongo.checked = false;
    inputNode.checked = false;
    inputJS.checked = false;
};

createPost();