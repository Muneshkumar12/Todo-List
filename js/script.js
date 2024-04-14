const searchBox = document.getElementById("searchBox");
const listContainer = document.getElementById("list-container");


const addTask = () => {
    if (searchBox.value === '') {
        alert("please add a task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = searchBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    searchBox.value = "";
    addData();
}



listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        addData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        addData();
    }
})


const addData = () => {
    localStorage.setItem("data", listContainer.innerHTML)
}

const showData = () => {
    const data = localStorage.getItem("data"); 

    listContainer.innerHTML = data;
};
showData()