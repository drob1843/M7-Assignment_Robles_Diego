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

    let tr = table.insertRow()
    let cellId = tr.insertCell()
    let textId = createTextNode(id)
    cellId.appendChild(textId)

    
 

//    tr1.appendChild(row)

//    let list = document.getElementById('employees')
//    list.appendChild(tr)




    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

     

    // let tdId = document.createElement('td')
    // let contentID = document.createTextNode(id)
  
    // let tdName = document.createElement('td')
    // let contentName = document.createTextNode(name)
    

    // let tdExt = document.createElement('td')
    // let contentExt = document.createTextNode(extension)
    

    // let tdEmail = document.createElement('td')
    // let contentEmail= document.createTextNode(email)
    

    // let tdDept = document.createElement('td')
    // let contentDept= document.createTextNode(department)
    

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    // tr.append(tdId)
    // tdId.appendChild(contentID)

    // tr.append(tdName)
    // tdName.appendChild(contentName)

    // tr.append(tdExt)
    // tdExt.appendChild(contentExt)

    // tr.append(tdEmail)
    // tdEmail.appendChild(contentEmail)

    // tr.append(tdDept)
    // tdDept.appendChild(contentDept)


    // // tr.innerHTML = `<td>${id}</td><td>${name}</td><td>${extension}</td>
    // //                 <td>${email}</td><td>${department}</td><td>${&nbsp;}</td>`

    // // CREATE THE DELETE BUTTON

    // let btn = document.createElement('td')
    // let deleteBtn = document.createElement('button')
    // btn.append(deleteBtn)
    // deleteBtn.className = 'btn btn-danger btn-sm float-end delete'

    // let textDelete = document.createTextNode('X')
    // deleteBtn.appendChild(textDelete)
    // tr.appendChild(btn)

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

})

// DELETE EMPLOYEE

// tr.addEventListener('click', (e) => {
//     if(e.target.classList.contains('delete')) {
//         console.log('delete')
//     }
// })