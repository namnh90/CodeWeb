function tinhtoan1() {
    let tongso = 0
    for (let so = 0; so <= 100; so++) {
        tongso += so;

    }
    document.getElementById("tongso").value = tongso
}

function tinhtoan2() {
    let cacso = ""
    for (let so = 1; so <= 100; so++) {
        if (so % 3 == 0 || so % 5 == 0) {
            cacso += so + ';'
        } else { '' }

    }
    document.getElementById("printso").value = cacso
}

function tinhtoan3() {
    let sodauvao = document.getElementById("sodauvao").value
    let giaithua =1
    if (Number.isInteger(Number(sodauvao))) {
        for (let so = 1; so <= sodauvao; so++) {
        giaithua *= so

    }ketqua = giaithua.toString()
    }else{
        ketqua = "Số bạn nhập vào không phải là một số nguyên"
    }
    
    
    document.getElementById("tinhgiaithua").value = ketqua
}

