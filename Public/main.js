const root = document.getElementById("root");
let info;
//test
document.getElementById("test").addEventListener("click", function(){
    let testdescription = document.getElementById("test_description");
    testdescription.classList.toggle("hidden");
});


//Click listener for add task button

document.getElementById("addtask").addEventListener("click", function (){
    let info = getInfo();
    //console.log(info); //info0 is task value etc

    //now we create the div that will contain our info
    
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
    
    //creating new div and adding it's style
    let newDiv = document.createElement("div");
    newDivStyle = "w-full border-2 border-red-800"
    newDiv.setAttribute("class",newDivStyle);

}


