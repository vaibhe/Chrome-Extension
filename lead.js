let myLeads = []
const inputEl = document.getElementById("input-el")
const btn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-l")
let deleteButt = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-tab")





    tabBtn.addEventListener("click",function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads",JSON.stringify(myLeads))
            renderLeads(myLeads)

        })
    })

deleteButt.addEventListener("click", function() {
  
    localStorage.clear()

     myLeads = []
     renderLeads(myLeads)
})





const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

 if(leadsFromLocalStorage) {
    myLeads =  leadsFromLocalStorage
    renderLeads(myLeads)
 }


 function renderLeads(leads) {
    let create = ""
    for (let i = 0 ; i < leads.length; i++) {
    
        create += `
        <li>
        <a  target='_blank' href='${leads[i]}'>
        ${leads[i]}
         </a>
        </li>
        ` 
    }
    ulEl.innerHTML = create
    }
    


btn.addEventListener( "click" , function() {
    myLeads.push(inputEl.value)
     inputEl.value = ""
     localStorage.setItem("myLeads",JSON.stringify(myLeads))
   renderLeads(myLeads)
   console.log(localStorage.getItem("myLeads"))
  
})





