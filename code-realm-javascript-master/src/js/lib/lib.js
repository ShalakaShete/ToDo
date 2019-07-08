// A placeholder file to add any custom library functions
var listOfAllObjects = [];
var obj={
    task:'Wakeup',
    status:'Open',
    buttonText:'Mark As Complete'
}
listOfAllObjects.push(obj);

function GetTododetails() {


    var HTMLdisplayTable = "<div><table id='tasktable'>";
    HTMLdisplayTable+="<tr><td>Open Task</td><td>Status</td><td>Action</td></tr>"

    for (let i = 0; i < listOfAllObjects.length; i++) {

        HTMLdisplayTable += "<tr>";
        HTMLdisplayTable += "<td>" + listOfAllObjects[i].task + "</td>";
        HTMLdisplayTable += "<td>" + listOfAllObjects[i].status + "</td>";
        HTMLdisplayTable += "<td><button id='completeTask"+i+"' onclick='statusComplete("+i+")'>"+listOfAllObjects[i].buttonText+"</button>    ";
        HTMLdisplayTable += "<button id='deleteTask"+i+"' onclick='deleteTask("+i+")'>Remove</button</td>";
        HTMLdisplayTable += "</tr>"

    }
    HTMLdisplayTable += "</table></div>"
    document.getElementById("Todo-table").innerHTML = HTMLdisplayTable;
}
function AddTask() {
    var addtask = "<input type='textbox' id='addtask'><button onclick='submitData()'>Submit</button>"
    document.getElementById("Add-task").innerHTML = addtask;
}

function submitData() {
    var data = document.getElementById("addtask").value;
    var obj={
        task:data,
        status:'Open',
        buttonText:'Mark As Complete'
    }
    listOfAllObjects.push(obj);
    GetTododetails();
}

function statusComplete(itemId){
    if(listOfAllObjects[itemId].buttonText=='ReOpen'){
        
        listOfAllObjects[itemId].status='Open';
        listOfAllObjects[itemId].buttonText='Mark As Complete';
    }
    else{
        listOfAllObjects[itemId].status='Completed';
        listOfAllObjects[itemId].buttonText='ReOpen';

    }
    
    
    GetTododetails();
}

function deleteTask(itemId){

    listOfAllObjects.splice(itemId, 1);
    GetTododetails();
}
