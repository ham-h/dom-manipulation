var xyz=document.getElementById('main')
// console.log(xyz);
var button=document.getElementById('button')

button.addEventListener('click',buttonClick);

function buttonClick(){
xyz.style.backgroundColor='red'
var txt=document.getElementById('txt');

txt.style.color='white'
console.log('button clicked');
}


const divElement = document.createElement("div"); //created new element
divElement.classList.add("add-new-employee");
divElement.style.padding = "20px";
divElement.style.border = "1px solid #ccc";
divElement.style.borderRadius = "5px";
divElement.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
divElement.style.margin = "30px";
// let textNode= document.createTextNode('this is newly created div element')//add text content to div element
// divElement.appendChild(textNode);
divElement.innerHTML = "<h2>Add Employee</h2>";
let formElement = `<form>
<input type="text" id="name" placeholder="Enter Your Name">

<input type="text" id="designation" placeholder="Enter Your Designation"/>
<br><br>
<select id="role" name="role">
<option value="admin">Game Developer</option>
<option value="read">UI/UX developer</option>
<option value="write">Python developer</option>
<option value="readwrite">Training</option>
</select>
<br><br>
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

function addEmployee() {
    // collect form data
    let name = document.getElementById('name').value;
    let designation = document.getElementById('designation').value;
    // let role = document.getElementById('role').value;
    let roleSelect = document.getElementById('role');
    let role = roleSelect.options[roleSelect.selectedIndex].text;
    let gender = document.querySelector('input[name="employeeGender"]:checked').value;
    let source = gender === 'male' ? 'profile.png' : 'woman.png';

    function removeInput() {
        // 'this' now refers to the button element
        this.closest('.card').remove();
    }

    let employeeDetails = ` 
        <div class="card">
        <div class="card2">
            <img src="${source}" height="70" width="70">
            <button class="register-button">Register</button></div>
          <div class="emp-details">
                <div class="emp-name">${name}</div>
                <div class="emp-designation"><i>${designation}</i></div>
                <div class="emp-role">${role}</div>
               
            </div>
            <div class="div-remove-card">
                <button class="remove-card">
                    <img src="close.png" height="25" width="25">
                </button>
            </div>
            
        </div>`;

    // Add the content to employee table
    employeeDiv.insertAdjacentHTML('beforeend', employeeDetails);

    // Add event listener for the last added "Remove" button
    // let lastRemoveButton = employeeDiv.querySelector('.remove-card:last-child');
    // lastRemoveButton.addEventListener('click', removeInput);
    let removeButtons = document.querySelectorAll('.remove-card');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeInput);
    });
    let lastRegisterButton = employeeDiv.querySelector('.register-button:last-child');
    lastRegisterButton.addEventListener('click', redirectToNewPage);
}
function redirectToNewPage() {
    // Redirect to another webpage
    window.location.href = "index.html"; // Replace "newPage.html" with the URL of the page you want to redirect to
}