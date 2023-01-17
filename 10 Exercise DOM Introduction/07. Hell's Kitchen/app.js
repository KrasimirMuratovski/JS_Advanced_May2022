function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputArr=JSON..parse(document.querySelector('#inputs textarea').value)
      let inputArr2=document.querySelector('#inputs textarea').value
      // console.log(inputArr)
      console.log(inputArr2)
      let avgSailary=0
      let totalSailary=0
      let currAvgSailary=0
      let bestName=''
      let output={}

      for(let inputElement of inputArr){
         let restaurantInfo=inputElement.split(' - ')
         let restaurantName=restaurantInfo.shift()
         let workerData=restaurantInfo[0].split(', ')

         for(let worker of workerData){
            let[name, salary]=worker.split(' ')

            if (!output.hasOwnProperty(restaurantName)){
                output={}
            }else {
               output[restaurantName][name]=Number(salary)
            }
         }
      }
      let entries=Object.entries(output)



      for (let entry of entries){
         let key=entry[0]
         let values=Object.entries(entry[1])//
         for (let [name, salary] of values) {
            totalSailary+=salary
         }
         avgSailary=totalSailary/values.length

         if (avgSailary>currAvgSailary){
            currAvgSailary=avgSailary
            bestName=key
            totalSailary=0
         }


      }
      let print=''
      let result=Object.entries(output[bestName]).sort((a, b) => b[1]-a[1])
      result.forEach(w=> print+=`Name: ${w[0]} With Salary: ${w[1]} `)

      document.querySelector('#bestRestaurant p')
          .textContent=`Name: ${bestName} Average Salary: ${currAvgSailary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`

      document.querySelector('#workers p').textContent=print
   }
}