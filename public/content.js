// console.log(Module.ccall("sayHello"));

const btn = document.querySelector("#clicked")
const p = document.querySelector("#text")

btn.addEventListener("click", () => {
    p.textContent = Module.ccall("sayHello", String, String, "hello there!")
})
