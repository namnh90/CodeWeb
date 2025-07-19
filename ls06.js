console.log('Hello world!');
function tinhtoan() {
let chieudai = document.getElementById("chieudai").value
let chieurong = document.getElementById("chieurong").value
document.getElementById("dientich").value = chieudai*chieurong
document.getElementById("chuvi").value = (Number(chieudai)+Number(chieurong))*2
}

function tinhtoan1() {
let sogiay = document.getElementById("giay").value
let giaydu =sogiay%3600
let sogio = (sogiay-giaydu)/3600
let sophut = (giaydu-giaydu%60)/60
let sogiayconlai = giaydu%60
document.getElementById("quydoi").value = sogio+' gio '+sophut+' phut '+sogiayconlai+' giay.'

}

function tinhtoan2() {
let socantinhluythua = document.getElementById("socantinhluythua").value
let bac = document.getElementById("luythuabac").value
let luythua = Math.pow(Number(socantinhluythua),Number(bac))
document.getElementById("luythua").value = luythua
}

function tinhtoan3() {
let socantinhtrungbinh = document.getElementById("socantinhtrungbinh").value
let soxuathien = socantinhtrungbinh.split(',').map(Number)
let tong=0
soxuathien.forEach(item => {
    tong += item
});
document.getElementById("trungbinh").value = tong/socantinhtrungbinh.split(',').length
}

function tinhtoan4() {
let toadox1 = document.getElementById("toadox1").value
let toadoy1 = document.getElementById("toadoy1").value
let toadox2 = document.getElementById("toadox2").value
let toadoy2 =document.getElementById("toadoy2").value
document.getElementById("khoangcach").value = Math.sqrt(Math.pow(Math.abs(toadox1-toadox2),2) + Math.pow(Math.abs(toadoy1-toadoy2),2))
}

function tinhtoan5() {
let timsolonnhat = document.getElementById("timsolonnhat").value
let soxuathien = timsolonnhat.split(',').map(Number)
let solonnhat = Math.max(...soxuathien)
let sodautien = soxuathien[0]
let sosanh = solonnhat === sodautien
document.getElementById("solonnhat").value = sosanh
}

function tinhtoan6() {
let chuoi1 = document.getElementById("chuoi1").value
let chuoi2 = document.getElementById("chuoi2").value
let gionghaykhac = chuoi1 === chuoi2
document.getElementById("giongnhaukhong").value = gionghaykhac
}

function tinhtoan7() {
let sonhapvao = document.getElementById("sonhapvao").value
let duongkhong = Number(sonhapvao) >0
document.getElementById("duongkhong").value = duongkhong
}

function tinhtoan8() {
let nam = document.getElementById("nam").value
let nhuan1 = Number(nam)%400 == 0
let nhuan2 = Number(nam)%4 ==0 && Number(nam)%100 !==0
document.getElementById("nhuankhong").value = nhuan1 || nhuan2
}

function tinhtoan9() {
let gio1 = document.getElementById("gio1").value
let phut1 = document.getElementById("phut1").value
let gio2 = document.getElementById("gio2").value
let phut2 = document.getElementById("phut2").value
let checkgio = Number(gio1)>Number(gio2)? "Giờ 1 lớn hơn giờ 2": Number(phut1)>Number(phut2) ? "Giờ 1 lớn hơn giờ 2" : "Giờ 2 lớn hơn giờ 1"

document.getElementById("sosanhgio").value = checkgio
}