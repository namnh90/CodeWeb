function tinhtoan1() {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve"]
    document.getElementById("inphantudaucuoi").value = names[0] + ' ' + names[names.length - 1]

}

function tinhtoan2() {
    const names = ["John", "Jane", "Jim", "Jake"];
    names[1] = "Mary"
    document.getElementById("thayten").value = names

}

function tinhtoan3() {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
    let inten = ""
    for (i = 0; i < names.length; i++) {
        inten += names[i] + "\n"
    }
    document.getElementById("inphantutrongmang").value = inten

}

function tinhtoan4() {
    const names = ["Alice", "Bob", "Charlie", "David"]
    names[names.length] = "MindX"

    document.getElementById("themvainmang").value = names

}

function tinhtoan5() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    inten = ""
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            continue;
        }
        else {
            inten += numbers[i] + "\n"
        }
    }

    document.getElementById("locsole").value = inten

}


function tinhtoan6() {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
    inten = ""
    for (i = 0; i < names.length; i++) {
        if (names[i] === "David") {
            inten += "Số " + (i + 1) + "-" + names[i] + "\n";
        }




    }
    document.getElementById("timdavid").value = inten
}

function tinhtoan7() {
    const numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
    let sonao = Number(document.getElementById("sonao").value)
    solan = 0
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] === sonao) {
            console.log(solan)
            solan++
        }




    }
    document.getElementById("demlan").value = solan
}

function tinhtoan8() {
    const numbers = [5, 2, 9, 3, 7, 11, 8];
    somax = 0
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > somax) {
            somax = numbers[i]
        }




    }
    document.getElementById("somax").value = somax
}

function tinhtoan9() {
    const array = [1, 2, 3, 4, 5];
    const array1 = []
    for (i = array.length - 1; i >= 0; i--) {
        array1[array.length - 1 - i] = array[i]
        document.getElementById("daonguoc").value = array1

    }
}

function tinhtoan10() {
    let duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
const finalarray =[]
let temp_array =[]

finalarray[0] = duplicatesArray[0]
u=1
for(;;){
    if(duplicatesArray.length==1){break;}
    let temp_array =[]
z = 0
num = Number(duplicatesArray[0])
console.log(num)
    for (i = 0; i <= duplicatesArray.length-1; i++) {
        if (num!==duplicatesArray[i]) 
        {
            temp_array[z]=duplicatesArray[i];z++
            console.log(z)

        }
    }
            duplicatesArray=temp_array
            finalarray[u] = duplicatesArray[0];u++
console.log(temp_array);
console.log(duplicatesArray)
}


    document.getElementById("xoatrung").value = finalarray
}

function tinhtoan11() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tong = 0
    for (i = 0; i <= numbers.length-1; i++) {
        tong += numbers[i]

    }
        document.getElementById("tinhtong").value = tong
}