const inputs = document.querySelectorAll(".controls input"); //querySelector gives an "array" NodeList

function handleUpdate(){
    console.log(this.value); //console.log each of handles
    const suffix = this.dataset.sizing || ""; //dataset is an object that contains all data attributes from the specific element. Now it is "px". Nothing for color input, otherwise will be underfined
    console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener("change", handleUpdate)); //prints out the value of the change
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));