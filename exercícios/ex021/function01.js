function parimp(n){
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'ímpar!'
    }
}
var res = parimp(3)
console.log(`O número que você escolheu ${res}`)