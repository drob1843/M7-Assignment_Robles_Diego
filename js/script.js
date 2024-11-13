// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

let table = document.getElementById('employees')
let form = document.getElementById('addForm')


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

let employeeCount = 0
document.getElementById('empCount').textContent = `(${employeeCount})`
// ADD EMPLOYEE

form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION

    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES

    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let extension = document.getElementById('extension').value
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    let tr = table.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    let cellId = tr.insertCell()
    let cellName = tr.insertCell()
    let cellExt = tr.insertCell()
    let cellEmail = tr.insertCell()
    let cellDept = tr.insertCell()
    let cellBtn = tr.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    let textId = document.createTextNode(id)
    cellId.appendChild(textId)

    let textName = document.createTextNode(name)
    cellName.appendChild(textName)

    let textExt = document.createTextNode(extension)
    cellExt.appendChild(textExt)

    let textEmail = document.createTextNode(email)
    cellEmail.appendChild(textEmail)

    let textDept = document.createTextNode(department)
    cellDept.appendChild(textDept)

    // CREATE THE DELETE BUTTON

    let deleteBtn = document.createElement('button')
    deleteBtn.type = 'button'
    cellBtn.appendChild(deleteBtn)
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'

    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)

    // RESET THE FORM

    const resetForm = () => {
        form.reset()

        // SET FOCUS BACK TO THE ID TEXT BOX

        document.getElementById('id').focus()
    }
    resetForm()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

    employeeCount++
    document.getElementById('empCount').textContent = `(${employeeCount})`

})

// DELETE EMPLOYEE

table.addEventListener('click', (e) => {
    if (confirm("Delete Employee?")) {
        table.deleteRow(e.target.parentElement.parentElement.rowIndex)
        
        employeeCount--
        document.getElementById('empCount').textContent = `(${employeeCount})`
    }

})