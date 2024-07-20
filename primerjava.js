var inedad=30;
const stredad="viejo";
let arredades=[1,2,3,4];

    if(inedad==="30")
    {
        console.log("entrar");
    }
    else
    {
        console.log("no");
    }


    switch(stredad)
    {
        case"viejo":
        console.log("viejo");
        break;
        case"nuevo":
        console.log("nevo");
        break;
    }


const Nombre=[1,true,"hola"];
const palabras=[["1","2","3","4"],["5","6","7","8"]];

for(let i = 0; i < palabras.length; i++) 
    {
    for(let j = 0; j < palabras[i].length; j++) 
        {
        console.log(`i: ${i} j: ${j} -> ${palabras[i][j]}`);
    }
}


console.log("--------------------");

palabras.forEach((elem,i)=>{
    elem.forEach((pal,j)=>{console.log(`i: ${i} j: ${j} -> ${pal}`)})
});


const arrnumeros=palabras.map((elm)=>{return elm.map(p=>Number(p))});
console.log("arrnumeros", arrnumeros);



//olog

console.log("palabras",palabras);
console.log("numeros",arrnumeros);


const nonsorted=["12","45","65","21","19","81"];
const sortarray =[...nonsorted].sort(
    (obja,objb)=>{return obja-objb}
);
const resorted =[...nonsorted].sort(
    (obja,objb)=>{return objb-obja}
);

console.log("sortedarray",resorted);
console.log("resortedarray",sortarray);


const less30=nonsorted.filter(
    (obj)=>{
        return obj<30;
    }
)
console.log("less30",less30);


console.log(
    arrnumeros.map(elm=>elm.join(",")).join('\n\r')
);

const objpersona={
    nombre: "hola",
    apellido: "adiis",
    correo: "aja",
    colores: ["red","azul","verde","negro"],
    libros: [{nombre: "aja", ano: "7861"},{nombre: "aja", ano: "7861"}]

}

console.log(objpersona);
console.log("nombre:",objpersona.nombre);
console.log("libros:",objpersona.libros.map(e=>e.nombre).join(","));

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((data)=>{
        console.log("httpResponse",data);
        return data.json();
    })  
    .then((body=>{
        console.log("jason",body);
    }))
    .catch((error)=>{
        console.log(error);
    });




//no se validaciones
function pageload()
{
    const formulario=document.getElementById("formulario");
    formulario.addEventListener("submit",onform_submite);
}
function onform_submite(e)
{
    e.preventeDefault();
    e.stopPropagation();
    console.log("e",e)
    if(validarform(e.target))
    {
        return;
    }
    alert("se enviara el formulario");
}
function validarform(form)
{
    const inputs=form.querySelecterAll("input,textarea,select");
    console.log("inputs",inputs);
    
    inputs.forEach((inp)=>{
        if(inp.hasAttribute("required"))
        {
            const isEmpty=/^\s*$/;
            if(isEmpty.test(inp.value))
            {
                console.log(`Input: ${inp.name}: esta vacio`)
            }
        }

        if(inpType==="email")
        {
            const emailregex=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
            if(!)
        }
        console.log(`input: ${inp.name}:${inp.value}`);
    });
    return false;

}
document.addEventListener("DOMContentLoaded",pageload);