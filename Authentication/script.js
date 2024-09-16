const button = document.getElementById("clickButton");
const username = document.getElementById("username");

button.addEventListener('click',()=>{
    const value = username.value;
    console.log(value);
    localStorage.setItem('name',value);
    const storedValue = localStorage.getItem('name');
console.log(storedValue);
})

 