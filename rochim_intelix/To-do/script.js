const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const countTask = document.getElementById("countTask");
const doneTask = document.getElementById("doneTask");

inputBox.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        addTask();   
    }
})

let totalTask = 0;

function addTask(){
    const cleanInput = inputBox.value.trim();
    if(cleanInput === ''){
        alert("You must write something");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = cleanInput;
        listContainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span) 
        totalTask++;
        countTask.innerHTML = `Total Task: ${totalTask}`;
    } 

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        const checkedTask = listContainer.querySelectorAll("li.checked").length;
        doneTask.innerHTML = `Done Task: ${checkedTask}`;
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        totalTask--;
        countTask.innerHTML = `Total Task: ${totalTask}`;
        const checkedTask = listContainer.querySelectorAll("li.checked").length;
        doneTask.innerHTML = `Done Task: ${checkedTask}`;
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    totalTask = listContainer.querySelectorAll("li").length;
    countTask.innerHTML = `Total Task: ${totalTask}`;
    const checkedTask = listContainer.querySelectorAll("li.checked").length;
    doneTask.innerHTML = `Done Task: ${checkedTask}`;
}

showTask();

