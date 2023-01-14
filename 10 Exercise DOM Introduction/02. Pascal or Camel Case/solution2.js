function solve() {
    const text = document.getElementById('text').value
    const task = document.getElementById('naming-convention').value
    let result = document.getElementById('result')


    let arr = text.split(' ').map(x => x.toLowerCase())
    // let arr=text.split('/(\s+)/').filter((x => x!==' '))
    if (task!=='Pascal Case' && task!=='Camel Case'){
        result.textContent='Error!'
        return
    }

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0 || task==='Pascal Case') {
            arr[i]=arr[i].charAt(0).toUpperCase() +arr[i].substring(1)
        }
    }
    result.textContent=arr.join('')
}

