function solve() {
    let txt = document.getElementById('text').value.toLowerCase();
    let namingConvention = document.getElementById('naming-convention').value;

    let workTxt = txt.split(' ');

    let res = '';

    let result = document.querySelector('#result');

    if (namingConvention !== "Camel Case" && namingConvention !== "Pascal Case") {
        result.textContent = 'Error!';
    }
    else {
        for (namingConvention === 'Camel Case' ? i = 1 : i = 0; i < workTxt.length; i++) {

            workTxt[i] = workTxt[i][0].toUpperCase() + workTxt[i].slice(1);
            if (namingConvention ==="Camel Case" && i === 1) {
                res += workTxt[0];
            }
            res += workTxt[i]
            result.textContent = res;

        }
    }
}