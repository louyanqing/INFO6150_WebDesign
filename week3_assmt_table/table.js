
var totalStudents = 0;

window.onload = function(){
    let authorInfo = document.querySelector('#authorInfo')
    authorInfo.innerHTML = 'Yanqing Lou  002083406'
    authorInfo.classList.add('authorInfo')

    
    // hide delete and edit columns
    let trs = document.querySelectorAll('tr.row')
    // initialize the value of totalStuents
    totalStudents = trs.length -1

    for(let i = 0; i < trs.length; i++){
        if(trs[i].cells.length === 10 ){

            trs[i].cells[8].style.display = 'none'
            trs[i].cells[9].style.display = 'none'

        }else if(trs[i].cells.length === 8 ){

            trs[i].cells[8].style.display = 'none'
        }     
       
    }

    // close expanded row
    let trsForDrop = document.querySelectorAll('.dropDownTextArea')
    for(let i = 0; i<trsForDrop.length; i++){
        trsForDrop[i].style.display = 'none'
    }

    // checkbox - unchecked
    let inputs = document.querySelectorAll('input')
    for(let i = 0; i<inputs.length; i++){ 
        inputs[i].checked = false
        inputs[i].parentNode.parentNode.style.backgroundColor = 'white'
    }

 
    // submit Button : disabled
    document.querySelector('#button').disabled = true
   

    // setTimeout(function(){
    //     authorInfo.style.display = 'none'
    //     dispalyTable.style.display = 'block'
    // },1000)

}

function showDetail(obj){
    const tr = obj.parentElement.parentElement
    const details = tr.nextElementSibling;
    if(details.style.display == 'none'){
        details.style.display = ''

    }else{
        details.style.display = 'none'
    }
    
}

function selectRow(obj){

    let row = obj.parentElement.parentElement;
    let submit = document.querySelector('#button')
    let ths = document.querySelectorAll('.action')
    let tds =  row.children 
    let tdDel = row.lastElementChild.previousElementSibling
    let tdEdi = row.lastElementChild
    let btnEdi = tdEdi.children[0]
    let btnDel = tdDel.children[0]

    if(obj.checked){

        row.style.backgroundColor = 'yellow'
        ths[0].style.display = 'table-cell'
        ths[1].style.display = 'table-cell'
        tds[tds.length-1].style.display = 'table-cell'
        tds[tds.length-2].style.display = 'table-cell'
        btnEdi.style.display = 'table-cell'
        btnDel.style.display = 'table-cell'
        submit.disabled = false

    }else if(!obj.checked){

        row.style.backgroundColor = 'white'
        tdDel.style.display = 'none'
        tdEdi.style.display = 'none'

        fresh() 
    }
}

function fresh(){

    let submit = document.querySelector('#button')
    let ths = document.querySelectorAll('.action')

    if(isCheckedInList()){

        ths[0].style.display = 'table-cell'
        ths[1].style.display = 'table-cell'
        submit.disabled = false

    }else if(!isCheckedInList()){

        ths[0].style.display = 'none'
        ths[1].style.display = 'none'
        submit.disabled = true
    } 
}

// There is checked row in the table
function isCheckedInList(){
    let inputs = document.querySelectorAll('input')
    for(let i = 0; i<inputs.length; i++){ 
        if(inputs[i].checked ){
            return true
        }else if(i === inputs.length-1){
            return false
        }
    }
}


// Add Student
function addStudent(){
    let table = document.querySelector('#myTable')

    // let rows = document.querySelectorAll('tr.row')
    // let studentName = rows[rows.length-1].cells[1].innerHTML
    //let lastIndex = studentName.split(" ")[1]

    let lastIndex = totalStudents + 1;

    // create tr /tds / innerHTML with input
    let tr = document.createElement('tr')
    tr.classList.add('row')
    // create tds
    let td1 = document.createElement('td')
    td1.innerHTML = '<input onclick="selectRow(this)" type="checkbox" /><br /><br /><img onclick ="showDetail(this)" id="r1_img" src="down.png" width="25px" />'

    let td2 = document.createElement('td')
    td2.innerHTML = "Student " + (parseInt(lastIndex))

    let td3 = document.createElement('td')
    td3.innerHTML = "Teacher " + (parseInt(lastIndex))

    let td4 = document.createElement('td')
    td4.innerHTML = 'Approved'

    let td5 = document.createElement('td')
    td5.innerHTML = "Fall"

    let td6 = document.createElement('td')
    td6.innerHTML = "TA"
    
    let td7 = document.createElement('td')
    td7.innerHTML = "12345"


    let td8 = document.createElement('td')
    td8.innerHTML = "100%"

    let td9 = document.createElement('td')
    td9.innerHTML = '<button onclick="removeRow(this)">Delete</button>'

    let td10 = document.createElement('td')
    td10.innerHTML= '<td><button onclick="edit(this)">Edit</button></td>'

    //drop area
    let trDrop = document.createElement('tr')
    trDrop.innerHTML = '<td colspan="10">Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /></td>'
    trDrop.style.display = 'none'
    
    tr.appendChild(td1)     
    tr.appendChild(td2)     
    tr.appendChild(td3)     
    tr.appendChild(td4)     
    tr.appendChild(td5)     
    tr.appendChild(td6)     
    tr.appendChild(td7)     
    tr.appendChild(td8)     
    tr.appendChild(td9)     
    tr.appendChild(td10) 
    
    
    table.appendChild(tr)
    table.appendChild(trDrop)
    td9.style.display = 'none'
    td10.style.display = 'none'

    let isSuccess = true;

    if (isSuccess) {
        alert(`${td2.innerHTML} Record added successfully!`);
        totalStudents ++
    } else {
        alert("Error: Failed to add record!");
    }
    

}


// Delete: 'Student X Record deleted successfully'
function removeRow(obj){

    let table = document.querySelector('#myTable')
    let row = obj.parentElement.parentElement
    let dropBox = row.nextElementSibling
    let student = row.children[1].innerHTML

    if(row.parentElement.tagName === 'TBODY'){
        document.querySelector('tbody').removeChild(row)
        document.querySelector('tbody').removeChild(dropBox)
    }else if(row.parentElement.tagName === 'TABLE'){
        table.removeChild(row)
        table.removeChild(dropBox)
    } 

    fresh()
    alert( student + ' record deleted successfully!')  

}

// Edit : 'Edit details of Student X'
function edit(obj){
    let data = {};
    let row = obj.parentElement.parentElement
    let student = row.children[1].innerHTML
    let advisor = row.children[2].innerHTML
    let award = row.children[3].innerHTML
    let semester = row.children[4].innerHTML
    let type = row.children[5].innerHTML
    let budget = row.children[6].innerHTML
    let percentage = row.children[7].innerHTML

    let modal = document.querySelector('#editModal')
    // h4 : title
    modal.firstElementChild.firstElementChild.innerHTML = `Edit details of ${student}`

    data = {
        Advisor:advisor,
        Award:award,
        Semester:semester,
        Type:type,
        Budget:budget,
        Percentage:percentage
    }
    let div = document.querySelector('.text')
    
    // object type loop
    Object.keys(data).forEach((key)=>{
        div.innerHTML += `<p>${key}: ${data[key]}</p>`
    });
    modal.style.display = 'flex'

}

function update(obj){
    let title = document.querySelector('div.modal-content>h4');
    let student = title.innerHTML.split(' ')

    document.querySelector('#editModal').style.display = 'none'
    alert(`${student[3]} ${student[4]} data updated successfully!`)
    document.querySelector('.text').innerHTML = ''
}

function cancel(){
    document.querySelector('#editModal').style.display = 'none'
    document.querySelector('.text').innerHTML = ''
}