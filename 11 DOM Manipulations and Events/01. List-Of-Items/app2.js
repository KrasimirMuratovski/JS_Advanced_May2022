function addItem() {
    const newItemText=document.getElementById('newItemText')
    
    let target=document.getElementById('items')

    let newli=document.createElement('li')
    newli.textContent=newItemText.value

    target.appendChild(newli)
    newItemText.value=''
    // console.log('TODO:...');
}