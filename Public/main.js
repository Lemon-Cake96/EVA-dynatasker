const root = document.getElementById("root");
const task_zone = document.getElementById("task_zone");
let divID = 0;
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

//test click event to delete task
//document.getElementById(this).addEventListener("click"),console.log(this);



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
    
    //TODO :figure out new counter for a json file.
    //need a counter that increases on each div made
    
    //creating new div and adding it's style
    let newDiv = document.createElement("div");
    divID++
    newDivStyle = "w-full border-2 border-red-800 grid grid-cols-3"
    newDiv.setAttribute("class",newDivStyle);
    newDiv.setAttribute("id",`task:${divID}`);

    task_zone.appendChild(newDiv);

    //adding the articles within the div
    let nameArticle = document.createElement("article");
    let statusArticle = document.createElement("article");
    let dateArticle = document.createElement("article");
    let descriptionArticle = document.createElement("article");
    
    //adding the buttons for modify and delete task
    let btnDelete = document.createElement("button");
    let btnModify = document.createElement("button");

    //sets up the value of our form

    nameArticle.innerHTML = task;
    statusArticle.innerHTML = "Pending"; //call a function or maybe add button that changes the value and store here
    dateArticle.innerHTML = date;
    descriptionArticle.innerHTML = description;
    btnModify.innerHTML = "Modify Task";
    btnDelete.innerHTML = "Delete Task";


    //adding functionality to the delete button
    btnDelete.addEventListener("click", function (){
        newDiv.remove();
        //TODO:add an alert to make sure you wanted to delete
    });

    /* Idea :
    Transform whats inside the div as articles into inputs and save the values and replace them.
    There's a .replaceChild() to swap out elements
    */

    //adding functionality to the modify button
    btnModify.addEventListener("click", function(){
        
        let nameInput = document.createElement("input");
        let dateInput = document.createElement("input");
        let descriptionInput = document.createElement("input");

    });


    //display everything

    newDiv.appendChild(nameArticle);
    newDiv.appendChild(statusArticle);
    newDiv.appendChild(dateArticle);
    newDiv.appendChild(descriptionArticle);
    newDiv.appendChild(btnModify);
    newDiv.appendChild(btnDelete);

}


