const root = document.getElementById("root");
const task_zone = document.getElementById("task_zone");
let info;
//test
document.getElementById("test").addEventListener("click", function(){
    let testdescription = document.getElementById("test_description");
    testdescription.classList.toggle("hidden");
});


//Click listener for add task button

document.getElementById("addtask").addEventListener("click", function (){
    let info = getInfo();
    //console.log(info); //info0 is task value etc...

    //now we create the div that will contain our info
    divTaskMaker(info[0],info[1],info[2]);
});


function getInfo(){

    let task = document.getElementById("task").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("date").value;

    // console.log(task);
    // console.log(description);
    // console.log(date);

    return [task,description,date];
}

function divTaskMaker(task,description,date){
    
    //need a counter that increases on each div made
    let divID;
    
    //creating new div and adding it's style
    let newDiv = document.createElement("div");
    divID++
    newDivStyle = "w-full border-2 border-red-800 grid grid-cols-3"
    newDiv.setAttribute("class",newDivStyle);
    newDiv.setAttribute("id",divID);

    task_zone.appendChild(newDiv);

    //adding the articles within the div
    let nameArticle = document.createElement("article");
    let statusArticle = document.createElement("article");
    let dateArticle = document.createElement("article");
    let descriptionArticle = document.createElement("article");

    newDiv.appendChild(nameArticle);
    newDiv.appendChild(statusArticle);
    newDiv.appendChild(dateArticle);
    newDiv.appendChild(descriptionArticle);

    //

    nameArticle.innerHTML = task;
    statusArticle.innerHTML = "Pending";
    dateArticle.innerHTML = date
    descriptionArticle.innerHTML = description

}


