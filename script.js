let array = []
let names = []

function save() {
    let name = document.getElementById('name').value
    if (names.includes(name)) {
        alert('Nome já cadastrado.')
    } else {
        names.push(name)
        let age = document.getElementById('age').value
        array.unshift([name, age])
        let tbody = document.getElementById('tbody')
        let row = tbody.insertRow(0)
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        cell1.innerHTML = array[0][0]
        cell2.innerHTML = array [0][1]
    }
}
