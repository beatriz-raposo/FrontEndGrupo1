let botaoLua = document.querySelector(".botao-lua");
let botaoSol = document.querySelector(".botao-sol");

botaoLua.addEventListener('click', (e) =>{
    e.preventDefault();
    botaoLua.classList.add("hide")
    document.querySelector(".botao-sol").classList.remove("hide")
    document.body.classList.add("dark-mode")
});

botaoSol.addEventListener('click', (e) =>{
    e.preventDefault();
    botaoSol.classList.add("hide")
    document.querySelector(".botao-lua").classList.remove("hide")
    document.body.classList.remove("dark-mode")
})
