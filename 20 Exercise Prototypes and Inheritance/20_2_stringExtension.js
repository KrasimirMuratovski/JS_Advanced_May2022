(function strings(){

    String.prototype.ensureStart = function(str){
        if (!this.startsWith(str)) {
            return str+this..toString()//this.toString() we work with str, but toString returns new instance
        }else {
            return this.toString()
        }
    }

    String.prototype.ensureEnd = function(str){
        if (!this.endsWith(str)) {
            return this.toString()+str
        }else {
            return this.toString()
        }
    }

    String.prototype.isEmpty = function(){
        return this.length===0
    }


    String.prototype.truncate = function(n){
        if (n<=3){
            return '.'.repeat(n)
        }
        if (this.toString().length<=n){
            return this.toString()
        }else{
            let lastIndex = this.substring(0, n -2).lastIndexOf(' ')
            if (lastIndex!==-1) {
                return this.substring(0, lastIndex)+ '...'
            } else {
                return this.substring(0, n-3)+ '...'
            }
        }
    }


    String.format = function(string, ...params){
        let str=string

        params.forEach((p, i)=>{
            str=str..replace(`{${i}}`,p)//read the task
        })
        return str

    }


})()