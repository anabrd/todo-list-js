///// TO DO LIST //////

//////// OPTIONAL
///1. ADD NEW ITEM (optional to do: user inputs date, activity, status all in one prompt, separated by commas 
// manipulate string to push input into object (using .split method)
// 2. find a uniform way to display/input date
// 3. How to display an array in an alert or in a prompt
// 4. Beautify output in console.log
// 5. Alert information for days with no to do item in step 4


/// GLOBAL VARIABLES
let toDoList = [ 
    {date: "11/12/2020",
    activity: "study",
    status: true}
]

let startQ;
let dateQ;
let indexQ;
let deleteQ;
let answer;

/// MAIN FUNCTION FOR STARTING THE PROGRAM
function start() {
startQ = parseInt(prompt(`What would you like to?
[1] Add new item
[2] Show all list
[3] Show list for a certain date
[4] Change status of an item
[5] Delete an item
[6] Quit`));

if (startQ == 1) {
    // ADD ITEM
    addItem();
    start();
} 

if (startQ == 2) {
    // SHOW ALL LIST
    printList();
    start();
} 

if (startQ == 3) {
    // SHOW LIST FOR A SPECIFIC DATE
    checkDate();
    start();
} 

if (startQ == 4) {
    // CHANGE ITEM
    changeStatus();
    start();
} 

if (startQ == 5) {
    // DELETE ITEM
    deleteItem();
    start();
} 
}

/////// MINI FUNCTIONS FOR EACH STEP //////

/// 1. FUNCTION FOR ADDING ITEM
function addItem() {

    let newItem = {};

    // Version with one prompt
   /*  answer = prompt("Type what you need to do in the following format, separated by commas", 'dd/mm/yyyy,acitivity,done/to do');
 */
    // 112332, eat, to do

    // Dividing the string after a specific character using the .split method
    // newItem.date = answer.split(",")[0];
    // newItem.activity = answer.split(",")[1];
    // newItem.status = answer.split(",")[2];

    // Version with three prompts
    newItem.date = prompt("Enter date (dd/mm/yyyy): ").toLowerCase();
    newItem.activity = prompt("Enter task: ").toLowerCase();
    newItem.status = prompt("Enter the status of the task (done/to do)").toLowerCase();     


    // converting strings into booleans
    if (newItem.status == "done") {
        newItem.status = true;
    } else if (newItem.status == "to do") {
        newItem.status = false;
    } else {
        alert(`Please type "done" or "to do"`);
        addItem();
    }

    toDoList.push(newItem);
}

// 2. FUNCTION FOR PRINTING LIST
function printList() {
    console.log(toDoList);
}

// 3. FUNCTION TO SHOW LIST FOR A DATE
function checkDate() {
    dateQ = prompt("Which date would like to check?");
    for (const iterator of toDoList) {
        if (iterator.date == dateQ && iterator.status == false) {
            //toDoList --> check date --> print all activities that correspond to that date
            alert(`You still have to ${iterator.activity} on ${iterator.date}!`);
        } else if (iterator.date == dateQ  && iterator.status == true) {
            alert(`Congrats, you already did ${iterator.activity} on ${iterator.date}!`);
        }
    }
    console.log(toDoList);
} 

// 4. FUNCTION TO CHANGE STATUS
function changeStatus() {
    indexQ = parseInt(prompt("Please choose index number of activity whose status you'd like to change: "));
    toDoList[indexQ].status = prompt("Insert new status :");
} 


// 5. FUNCTION TO DELETE AN ITEM
function deleteItem() {

    deleteQ = parseInt(prompt("Please choose index number of activity which you'd like to delete: "));

    // method array.spluce(index number, amount of items to delete at that index)
    toDoList.splice(deleteQ, 1);
}

////////////***** this is where the program stars *********/////////
start();

console.log(toDoList);