
function Slot(time, location) {
  this.time = time;
  this.location = location;
}

function arrayRemove(arr, value) {
        return arr.filter(function(ele){
            return ele != value;
        });
    }
//Citation: code taken from https://love2dev.com/blog/javascript-remove-from-array/#:~:text=There%20are%20different%20methods%20and%20techniques%20you%20can,you%20to%20programatically%20remove%20elements%20from%20an%20Array


//For Test Appointments------------------------------------------------------
var selected_slot = [];
var selected_slot_id = [];

function selectedSlot(id) {

    var slotinfo = document.getElementById("appointment-"+id).innerHTML;
    var time = slotinfo.slice(0,32);
    var location = slotinfo.slice(44,52);
    var slot = new Slot(time, location);
    if (selected_slot_id.includes (id) == true){
        var index = selected_slot.findIndex(slot => slot.time === time)
        selected_slot.splice(index)
        selected_slot_id = arrayRemove(selected_slot_id,id);
        }
    else
        {selected_slot_id.push(id);
        selected_slot.push(slot);}
    sessionStorage.setItem("myTestSlot", JSON.stringify(selected_slot))
    return id;
}


function confirmSlot() {
    if((selected_slot_id.length)>1)
        { alert ("You can only select one slot!");
        }
    if((selected_slot_id.length)==0)
        { alert ("Selection should not be empty!");
        }
    if((selected_slot_id.length)==1)
        { window.location.href = 'Schedule Test Confirm.html';
        }
}

//Cancel Test-----------------------

function deleteTest() {
    let confirmAction = confirm("Are you sure to delete this test appointment?");
    if (confirmAction) {
        sessionStorage.setItem("myTestSlot", JSON.stringify(null))
        alert("Vaccine Appointment successfully deleted");
        location.reload();}
    else {
        }
    }



//For Vaccination Appointments-------------------------------

var selected_vaccine = [];
var selected_vaccine_id = [];

function selectedVac(id) {

    var slotinfo = document.getElementById("vaccine-"+id).innerHTML;
    var time = slotinfo.slice(0,32);
    var location = slotinfo.slice(44,52);
    var slot = new Slot(time, location);
    if (selected_vaccine_id.includes (id) == true){
        var index = selected_vaccine.findIndex(slot => slot.time === time)
        selected_vaccine.splice(index)
        selected_vaccine_id = arrayRemove(selected_vaccine_id,id)
        console.log (selected_vaccine_id)
        }
    else
        {selected_vaccine_id.push(id);
        selected_vaccine.push(slot);}
    sessionStorage.setItem("myVaccineSlot", JSON.stringify(selected_vaccine))
    sessionStorage.setItem("myVaccineSlotId", JSON.stringify(selected_vaccine_id))
    return id;
}



//For Selection of Vaccine Type (type name, deselect other type) -------------------------------
var all_button = ['Pfitzer','Moderna','Booster']
var type_name = null

function selectedType(type) {
    type_name = type
    sessionStorage.setItem("myVaccineType", JSON.stringify(type_name)) //update selection
    for (let i = 0; i < 3;)//initialize all colors
        {button_name = all_button[i]
        button_button = document.getElementById(button_name)
        button_button.style.backgroundColor = '#d3d3d3';
        button_button.style.color = '#4d4d4d';
        i++}
    var selectedtype_button = document.getElementById(type_name)
    selectedtype_button.style.backgroundColor = '#4b4b4b';
    selectedtype_button.style.color = '#FFFFFF';
}


function confirmVac(covidSlot) {
    console.log(selected_vaccine)
    console.log (type_name)
    if((selected_vaccine_id.length)>1)
    { alert ("You can only select one slot!");
    }
    if((selected_vaccine_id.length)==0 || type_name == null)
    { alert ("Selection of Slot and Vaccine Type should not be empty!");
    }
    if((selected_vaccine_id.length)==1 && type_name != null)
    { window.location.href = 'Schedule Covid Confirm.html';
    }
}

//Delete Vaccination--------------------------

function deleteVac() {
    let confirmAction = confirm("Are you sure to delete this vaccine appointment?");
    if (confirmAction) {
        sessionStorage.setItem("myVaccineSlot", JSON.stringify(null))
        sessionStorage.setItem("myVaccineSlotId", JSON.stringify(null))
        sessionStorage.setItem("myVaccineType", JSON.stringify(null))
        alert("Vaccine Appointment successfully deleted");
        location.reload();}
    else {
        }
    }

//View Slots-------------------------


function viewAvailTest()
     {window.location.href = 'View Available Test.html'}

function viewAllTest()
     {window.location.href = 'View Test Slot.html'}

function viewAvailVac()
     {window.location.href = 'View Available Vaccine.html'}

function viewAllVac()
     {window.location.href = 'View Vaccination Slot.html'}




