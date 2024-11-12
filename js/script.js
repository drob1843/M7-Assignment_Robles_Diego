// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

let table = document.getElementById('employees')
let form = document.getElementById('addForm')


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0
document.getElementById('empCount')

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

    let tr = document.createElement('tr')
    table.appendChild(tr)

    //TESTING
    // console.log(tr)
    // console.log(table)


    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    
    let td = document.createElement('td')
    // let contentId = document.createTextNode(id, name)
    // td.appendChild(contentId)

    tr.innerHTML = `<td>${id}</td><td>${name}</td>`

    console.log(td)
    console.log(tr)
    


      
    
    // let thId = tr.insertCell()
    // let thName = tr.insertCell()
    // let thExt = tr.insertCell()
    // let thEmail = tr.insertCell()
    // let thDepartment = tr.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    // let contentID = document.createTextNode(id)
    // thId.appendChild(contentID)

    // let th = document.createElement('tr')
    // let content = document.createTextNode('List Items')
    // tr.appendChild(content)

    // CREATE THE DELETE BUTTON

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

})

// DELETE EMPLOYEE

form.reset()