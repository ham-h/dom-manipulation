const divElement = document.createElement("div"); //created new element
divElement.classList.add("add-new-employee");
divElement.style.padding = "20px";
divElement.style.border = "1px solid #ccc";
divElement.style.borderRadius = "5px";
divElement.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
divElement.style.marginTop = "30px";
// let textNode= document.createTextNode('this is newly created div element')//add text content to div element
// divElement.appendChild(textNode);
divElement.innerHTML = "<h2>Add Employee</h2>";
let formElement = `<form>
<input type="text" id="name" placeholder="Enter Your Name">

<input type="text" id="designation" placeholder="Enter Your Designation"/>
<br><br>
<select id="role" name="role">
<option value="admin">Administrator</option>
<option value="read">Read Only</option>
<option value="write">Write Only</option>
<option value="readwrite">Read/Write</option>
</select>
<br>
<label for="gender">Gender: </label>

<input type="radio" id="male" name="employeeGender" value="male">
<label for="male">Male</label>
<input type="radio" id="female" name="employeeGender" value="female">
<label for="female">Female</label>
<input type="radio" id="other" name="employeeGender" value="other">
<label for="other">Other</label>

<br><br>

<input type="button" value="Create" id="create">


</form>`;
divElement.insertAdjacentHTML('beforeend',formElement);
let containerDiv = document.querySelector(".container"); //add elemnt to web page
containerDiv.appendChild(divElement);

let employeeDiv = document.createElement('div');
employeeDiv.classList.add('employee-list');
containerDiv.appendChild(employeeDiv);

document.getElementById('create').addEventListener('click',addEmployee);//added event listener on button
function addEmployee(){
    //collect form data
  let name=  document.getElementById('name').value;
  let designation=  document.getElementById('designation').value;
  let role=  document.getElementById('role').value;
  let gender = document.querySelector('input[name="employeeGender"]:checked').value;
  let source=gender === 'male'? 'profile.png' :'woman.png';


  let employeeDetails = `
    <div class="card">
        <img src="${source}" height="70" width="70">
        <div class="emp-details">
            <div class="emp-name">${name}</div>
            <div class="emp-designation"><i>${designation}</i></div>
            <div class="emp-role">${role}</div>
        </div>
        <div class="div-remove-card">
            <button class="remove-card">
                <img src="close.png" height="58" width="58">
            </button>
        </div>
    </div>`;
  //add the content to employee table
  employeeDiv.insertAdjacentHTML('beforeend',employeeDetails);

}