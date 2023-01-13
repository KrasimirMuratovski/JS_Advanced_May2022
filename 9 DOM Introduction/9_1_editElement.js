function edit(element, match, replacer){
    const text = element.textContent

    const result=text.split(match).join(replacer)
    element.textContent=result
}

// OR

function edit(element, match, replacer){
    const text = element.textContent

    const pattern= new RegExp(match,'g')
    const result=text.replace(pattern, replacer)
    element.textContent=result
}
