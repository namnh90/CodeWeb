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
function tinhtoan4() {
    let sotrai = 2
    let sophai = 1
    let bcc =""
    for (let sotrai = 2; sotrai <= 9; sotrai++) {
        for (let sophai = 1; sophai <=9; sophai++)
        {   
            let tich = Number(sophai)*Number(sotrai)
            bcc += sotrai+'x'+sophai+'='+tich+'\n'
        }
         bcc += "\n"
    }
    document.getElementById("bcc").value = bcc
}

function tinhtoan5() {
    let sobichia = document.getElementById("sobichia").value
    let thuong = 1
    let du = ""
    for (;;) {
        if (thuong > 0) { thuong=(sobichia-(sobichia%2))/2; du = sobichia%2+du; sobichia = (sobichia-(sobichia%2))/2 ;console.log(thuong)
    }else{break;}}
    document.getElementById("nhiphan").value = du
}

function tinhtoan6() {
    let socantinh = document.getElementById("socantinh").value
    if (!Number.isInteger(Number(socantinh))) { alert('Không phải là số nguyên'); return}
    let socanlaycan = 1
    can = 1
    console.log("socantinh",socantinh)
for (let i = 1; i <= Number(socantinh) + 1; i++)
        {   
            
            can = Math.sqrt(socanlaycan)
            socanlaycan = can + i
            console.log("can",can)
            console.log("socanlaycan",socanlaycan)
        }
    document.getElementById("tinhbai6").value = Number(can)
}

function tinhtoan7() {
    let socantinh1 = document.getElementById("socantinh1").value
    if (!Number.isInteger(Number(socantinh1))) { alert('Không phải là số nguyên'); return}
    let socanlaycan = Number(socantinh1)
    can = 1
    console.log("socantinh1",socantinh1)
for (let i = Number(socantinh1); i >= 0; i--)
        {   
            
            can = Math.sqrt(socanlaycan)
            socanlaycan = can + i
            console.log("can",can)
            console.log("socanlaycan",socanlaycan)
        }
    document.getElementById("tinhbai7").value = Number(can)
}