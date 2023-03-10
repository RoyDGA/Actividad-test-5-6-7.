///////////////////////////////////////////////EJERCICIO 7//////////////////////////////////////////////////////////////////

var arr = [1,3,4,2,7,0,9];

for (const element in arr) {
    var num = arr[element];
    for (let index = 0; index < arr.length; index++) {
        var list = arr[index];
        var suma = num + list;
        
        if(suma==10){
            console.log(num, ' + ', list);
            break;
        }
    }
}

///////////////////////////////////////////////EJERCICIO 6/////////////////////////////////////////////////////////////////

var arr = [1,2,2,2,2,5,4,7,8,8,8];
var count_rep_num = 1;
var count = 1; 
var num = 0;


for (var element in arr) {
    var num_fix = arr[element];
    count_rep_num = 0;

    for (let index = 0; index < arr.length; index++) {
        var num_loop = arr[index];

        if(num_fix == num_loop) count_rep_num++;


        if (count_rep_num > count) {
            num = num_fix;
            count = count_rep_num;
        }
    }
}

console.log("El numero: ",num,".");
console.log("Se repite: ",count," veces.");

////////////////////////////////////////EJERCICIO 5/////////////////////////////////////////////////////////////



var arr = [1,2,1,3,3,1,2,1,5,1,4,4,4,4];

var uno = '1:',dos ='2:',tres ='3:',cuatro ='4:',cinco ='5:';
var boolean = true;

for (var element in arr) {
    if (arr < 1 || arr > 5) {
        boolean = false;
        break;
        
        
    }
    switch (arr[element]) {
        case 1:
            uno += '*';
            break;
        case 2:
            dos += '*';
            break;
        case 3:
            tres += '*';
            break;
        case 4:
            cuatro += '*';
            break;
        case 5:
            cinco += '*';
            break;
    }
    
}
console.log(uno);
console.log(dos);
console.log(tres);
console.log(cuatro);
console.log(cinco);