// <--------------------------------------NOMOR 2-------------------------------------->
const gambarContainer = document.getElementById("gambarContainer")
const btnLihat = document.getElementById("btnLihat")

btnLihat.addEventListener('click', () =>{
    lihatHandler()
})

function lihatHandler() {
    gambarContainer.innerHTML ='';
    const jenis = document.getElementById("jenis").value
    const ukuran = parseInt(document.getElementById("ukuran").value)
    console.log(jenis);
    console.log(ukuran);
    if(jenis && ukuran){
        if(jenis == 1){
            persegi(ukuran)
        }else if(jenis == 2){
            segitigaKiri(ukuran)
        }else if(jenis == 3){
            segitigaKanan(ukuran)
        }else{
            var newcontent = document.createElement('p');
            newcontent.innerHTML = 'Jenis Tidak ada!'
            gambarContainer.appendChild(newcontent);
        }
    }else{
        var newcontent = document.createElement('p');
        newcontent.innerHTML = 'Jenis dan ukuran harus diisi!'
        gambarContainer.appendChild(newcontent);
    }

}

function persegi(n){
    console.log(n);
    let arrayTemp = new Array(n).fill('#');
    console.log(arrayTemp);
    for(var i= 0; i<n ; i++) {
        var newcontent = document.createElement('p');
        newcontent.innerHTML = `${arrayTemp.join('')}`
        gambarContainer.appendChild(newcontent);
        console.log(arrayTemp);
    }
}

function segitigaKanan(n) {
    let arrayTemp = new Array(n).fill(' ');
    let arrayTemp1 = new Array(n).fill(' ');
    while (arrayTemp.indexOf(' ') !== -1) {
        arrayTemp.shift();
        arrayTemp.push('#');
        arrayTemp1.shift();
        arrayTemp1.push('#');
        for (const i in arrayTemp){
            if (arrayTemp[i] ===" "){
                arrayTemp1[i] = '&nbsp '
            }
        }
        var newcontent = document.createElement('p');
        newcontent.innerHTML = `${arrayTemp1.join('')}`
        gambarContainer.appendChild(newcontent);
        n--;
    }
}
function segitigaKiri(n) {
    let arrayTemp = new Array(n).fill(' ');
    while (arrayTemp.indexOf(' ') !== -1) {
        arrayTemp.shift();
        arrayTemp.push('#');
        var newcontent = document.createElement('p');
        newcontent.innerHTML = `${arrayTemp.join('')}`
        gambarContainer.appendChild(newcontent);
        n--;
    }
}
