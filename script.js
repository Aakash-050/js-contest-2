const form = document.getElementById('bookEntry')
const bookNameField = document.getElementById('bookName')
const issuedToField = document.getElementById('issuedTo')
const libraryTable = document.getElementById('libraryEntry')

const bookArray = []

function submitEvent(event){
    event.preventDefault()
    let object = {
        id:bookArray.length + 1,
        book_name:bookNameField.value,
        issued_to:issuedToField.value,
        issued_time:new Date().toLocaleString('en-IN'),
        status:'not returned'
    }
    insertDataInTable(object)
    bookArray.push(object)
    bookNameField.value = ''
    issuedToField.value = ''
}

function insertDataInTable(object){
    const tableRow = document.createElement('tr')
    const idData = document.createElement('td')
    const bookNameData = document.createElement('td')
    const issuedToData = document.createElement('td')
    const issuedTimeData = document.createElement('td')
    const statusDataRow = document.createElement('td')
    const statusDataDiv = document.createElement('div')
    statusDataDiv.style.display = 'flex'
    statusDataDiv.style.alignItems = 'center'
    statusDataDiv.style.gap = '5px'
    statusDataDiv.style.justifyContent = 'center'
    const statusData = document.createElement('span')
    const editIcon = document.createElement('span')
    idData.textContent = object.id
    bookNameData.textContent = object.book_name
    issuedToData.textContent = object.issued_to
    issuedTimeData.textContent = object.issued_time
    statusData.textContent = object.status
    editIcon.textContent = 'edit_square'
    statusData.classList.add('not-returned')
    editIcon.classList.add("material-symbols-outlined")
    editIcon.addEventListener('click',() => {
        let index = bookArray.findIndex((element) => element.id === object.id)
        if(statusData.textContent === 'not returned'){
            statusData.textContent = 'returned'
            statusData.classList.remove('not-returned')
            statusData.classList.add('returned')
            bookArray[index].status = 'returned'
        }
        else{
            statusData.textContent = 'not-returned'
            statusData.classList.remove('returned')
            statusData.classList.add('not-returned')
            bookArray[index].status = 'not returned'
        }
    })
    statusDataDiv.append(statusData,editIcon)
    statusDataRow.append(statusDataDiv)
    tableRow.append(idData,bookNameData,issuedToData,issuedTimeData,statusDataRow)
    libraryTable.append(tableRow)
}

form.addEventListener('submit',submitEvent)