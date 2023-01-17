// function solve() {
//    const rows=document.querySelectorAll('tbody tr')
//    let input=document.getElementById('searchField')
//
//    document.querySelector('#searchBtn').addEventListener('click', onClick);
//
//    function onClick() {
//       for (let row of rows) {
//          row.classList.remove('select')
//          if(input.value!=='' && row.innerHTML.includes(input.value)){
//             row.className='select'
//          }
//       }
//       //   TODO:
//       input.value=''
//
//    }
// }


function solve() {
   document.querySelector("#searchBtn").addEventListener("click", onClick);
   let searchField = document.querySelector("#searchField");

   function onClick() {
      let searchValue = searchField.value;
      let rows = document.querySelector("tbody").children;
      Array.from(rows).forEach((td) => {
         td.removeAttribute("class", "select");
         if (td.textContent.includes(searchValue)) {
            td.setAttribute("class", "select");
         }
      });
      searchField.value = "";
   }
}