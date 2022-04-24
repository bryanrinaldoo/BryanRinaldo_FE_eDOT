// <--------------------------------------NOMOR 3-------------------------------------->
const btnSubmit = document.getElementById("btnSubmit")
const btnNama = document.getElementById("btnNama")
const btnUmur = document.getElementById("btnUmur")
const btnKelamin = document.getElementById("btnKelamin")
const btnPekerjaan = document.getElementById("btnPekerjaan")
const tableManusia = document.getElementById("manusiaTable")

const arrManusia =[]

btnSubmit.addEventListener('click', () =>{
    submitHandler()
})
btnNama.addEventListener('click', () =>{
    namaHandler()
})
btnUmur.addEventListener('click', () =>{
    umurHandler()
})
btnKelamin.addEventListener('click', () =>{
    kelaminHandler()
})
btnPekerjaan.addEventListener('click', () =>{
    pekerjaanHandler()
})

function submitHandler(){
    const nama = document.getElementById("nama").value
    const umur = parseInt(document.getElementById("umur").value)
    const kelamin = displayRadioValue()
    const pekerjaan = document.getElementById("pekerjaan").value

    if(nama && umur && kelamin && pekerjaan){
        arrManusia.push({
            nama: nama,
            umur: umur,
            kelamin: kelamin,
            pekerjaan: pekerjaan
        })
        addToHtml()
    }else{
        alert("Semua harus diisi!")
    }
}
function addToHtml() {
    tableManusia.innerHTML =`
    <tr>
        <th>Nama</th>
        <th>Umur</th>
        <th>Kelamin</th>
        <th>Pekerjaan</th>
    </tr>`
    for(var i = 0; i<arrManusia.length ; i++){
        var row = tableManusia.insertRow(-1);
        
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
    
        cell1.innerHTML = arrManusia[i].nama;
        cell2.innerHTML = arrManusia[i].umur;
        cell3.innerHTML = arrManusia[i].kelamin;
        cell4.innerHTML = arrManusia[i].pekerjaan;
    }
}

function namaHandler(){
    selectionSort(arrManusia, 'nama');
    addToHtml()
}
function umurHandler(){
    selectionSort(arrManusia, 'umur');
    addToHtml()
}
function kelaminHandler(){
    selectionSort(arrManusia, 'kelamin');
    addToHtml()
}
function pekerjaanHandler(){
    selectionSort(arrManusia, 'pekerjaan');
    addToHtml()
}
function displayRadioValue() {
    var radio = document.getElementsByName('kelamin');
    for(i = 0; i < radio.length; i++) {
        if(radio[i].checked){
            return radio[i].value
        }
    }
}

function selectionSort(arr, type){
    n = arr.length;
    for(let i = 0; i < n - 1; i++){
        let min = i;
        let minStr = arr[i][type];

        for(let j = i + 1; j < n; j++){
            if(minStr == String){
                if ((arr[j][type]).localeCompare(minStr) === -1){
                    minStr = arr[j][type];
                    min = j;
                }
            }else{
                if(arr[j][type] < arr[min][type]) {
                    min = j; 
                }
            }
        }
        if (min != i){
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
}