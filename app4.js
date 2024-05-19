let form=document.querySelector("#task-form")
let taskInput=document.querySelector("#task")
let taskList=document.querySelector(".collection")
let clearbtn=document.querySelector(".clear-task")
loadEventListener()
function loadEventListener(){
    //addTask
   form.addEventListener('submit',addTask)
   //remove task
   taskList.addEventListener("click",removeTask)
   //clear task
   clearbtn.addEventListener("click",clearTask)
}
//add task
function addTask(e){
    e.preventDefault();
    //validate
    if(taskInput.value===""){
        alert("please fill the form")
        return
    }
    let exitingTask=document.querySelectorAll(".collection-item")
    for(let task of exitingTask){
        if(task.innerText.trim().toUpperCase()===taskInput.value.trim().toUpperCase()){
            alert("already exit")
            return
        }
    }
        let li=document.createElement('li')
        li.className="collection-item"
        li.appendChild(document.createTextNode(taskInput.value))
        let link=document.createElement("a")
        link.className="delete-item secondary-content"
        link.innerHTML=`<i class="fa fa-remove"></i>`;
        li.appendChild(link)
        taskList.appendChild(li)
        console.log((taskList));
        taskInput.value=""
    
}
//remove task
function removeTask(event){
    console.log(event.target.parentElement.parentElement);
    if(event.target.parentElement.classList[0]==="delete-item"){
        event.target.parentElement.parentElement.remove();
    }
}
//clear task
function clearTask(){
    // console.log(taskList.children);
    // let changeToArr=Array.from(taskList.children)
    // console.log(changeToArr);
    // changeToArr.forEach(function(element){
    //     element.remove()
    // })
    if(confirm("Are You Sure Clear")){
    taskList.innerHTML=null
    }
}