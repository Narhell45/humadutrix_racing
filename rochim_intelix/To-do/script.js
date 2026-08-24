const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const countTask = document.getElementById("countTask");
const doneTask = document.getElementById("doneTask");
const icon = document.getElementById("mode");

inputBox.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        addTask();   
    }
})

let totalTask = 0;

function getDoneTaskCounter() {
    return listContainer.querySelectorAll("li.checked").length;
}

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

function clearCompleted(){

    const completedTask = listContainer.querySelectorAll("li.checked");

    completedTask.forEach(function(task){
        task.remove()
    })

    totalTask = listContainer.querySelectorAll("li").length;
    countTask.innerHTML = `Total Task: ${totalTask}`;
    doneTask.innerHTML = `Done Task: ${getDoneTaskCounter()}`;

    saveData();
}

function clearAll(){

    const clearTask = listContainer.querySelectorAll("li");

    clearTask.forEach(function(clear){
        clear.remove()
    })

    totalTask = listContainer.querySelectorAll("li").length;
    countTask.innerHTML = `Total Task: ${totalTask}`;
    doneTask.innerHTML = `Done Task: ${getDoneTaskCounter()}`;

    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        doneTask.innerHTML = `Done Task: ${getDoneTaskCounter()}`;
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        totalTask--;
        countTask.innerHTML = `Total Task: ${totalTask}`;
        doneTask.innerHTML = `Done Task: ${getDoneTaskCounter()}`;
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}

function saveTheme(){
    localStorage.setItem("Theme", document.body.classList.contains("dark-theme"));
}

function updateThemeIcon(){
    if(document.body.classList.contains("dark-theme")){
        icon.src = "assets/dark_mode/sun.png";
    } else {
        icon.src = "assets/dark_mode/moon.png";
    }
}

function showTheme(){
    if (localStorage.getItem("Theme") === "true"){
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }

    updateThemeIcon();
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    totalTask = listContainer.querySelectorAll("li").length;
    countTask.innerHTML = `Total Task: ${totalTask}`;
    doneTask.innerHTML = `Done Task: ${getDoneTaskCounter()}`;
}

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    
    updateThemeIcon();

    saveTheme();

}

showTask();
showTheme();
