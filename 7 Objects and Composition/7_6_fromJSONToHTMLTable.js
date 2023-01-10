function someFunction(json){
    let parsed=JSON.parse(json)

    let columnNames=Object.keys(parsed[0])
    let values =parsed.map(obj => Object.values(obj))
    let result= '<table>\n'

    appendHeaders(columnNames)
    appendValues(values)
    result+= '</table>'
    function appendHeaders(columnNames){
        result+=`   <tr>`
        for (let columnName of columnNames){
            result+=`<th>${columnName}</th>`
        }
        result+=`</tr>\n`

    }

    function appendValues(rows){
        for (let row of rows){
            result+=`   <tr>`
            for (let value of row){
                result+=`<td>${escape(value)}</td>`
            }

            result+=`</tr>\n`
        }
    }

    function escape(value){
        return value.toString().replace('<', '&lt;').replace('>', '&gt;')
    }




    console.log(result);
}

someFunction(`[{"Name":"Pesho","Score":4," Grade":8},{"Name":"Gosho","Score":5, Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]`)
