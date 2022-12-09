(()=>{"use strict";class t{constructor(t){this.name=t,this.tasks=[]}setName(t){this.name=t}getName(){return this.name}setTasks(t){this.tasks=t}getTasks(){return this.tasks}getTask(t){return this.tasks.find((e=>e.getName()===t))}contains(t){return this.tasks.some((e=>e.getName()===t))}addTask(t){this.tasks.find((e=>e.getName()===t.name))||this.tasks.push(t)}deleteTask(t){this.tasks=this.tasks.filter((e=>e.name!==t))}}class e{constructor(t,e="No Date"){this.name=t,this.dueDate=e}setName(t){this.name=t}setDate(t){this.dueDate=t}getName(){return this.name}getDate(){return this.dueDate}}class s{static aProjectCard(t){const e=document.querySelector("#custom-projects-list"),s=document.createElement("button");s.setAttribute("class","button-project"),s.textContent=t,e.append(s)}static aTaskCard(t,e){const s=document.querySelector("#project-preview"),a=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),r=document.createElement("input"),n=document.createElement("p"),d=document.createElement("p"),i=document.createElement("button"),l=document.createElement("button");a.classList.add("task"),c.classList.add("left-panel"),o.classList.add("right-panel"),n.classList.add("task-name"),d.classList.add("date"),i.classList.add("button-edit-task"),l.classList.add("button-delete-task"),r.setAttribute("type","checkbox"),n.textContent=t,d.textContent=e,i.textContent="edit",l.textContent="delete",c.append(r),c.append(n),o.append(d),o.append(i),o.append(l),a.append(c),a.append(o),s.append(a)}}class a{static forTaskButtons(){const t=document.querySelectorAll(".button-edit-task"),e=document.querySelectorAll(".button-delete-task");t.forEach((t=>{t.addEventListener("click",a.editTask)})),e.forEach((t=>{t.addEventListener("click",a.deleteTask)}))}static editTask(t){t.target.parentElement.parentElement.children[0].children[1].textContent}static deleteTask(t){t.target.parentElement.parentElement.remove()}static projectEvents(){a.addProjectButtons()}static addProjectButtons(){const t=document.querySelector("#button-add-project"),e=document.querySelector("#button-cancel-project");t.addEventListener("click",a.addProject),e.addEventListener("click",a.cancelProject)}static addProject(){const t=document.querySelector("#input-add-project").value;""!==t&&s.aProjectCard(t)}static cancelProject(){document.querySelector("#input-add-project").value=""}static formEvents(){a.forAddTaskButton(),a.forTaskFormButtons()}static forAddTaskButton(){document.querySelector("#add-task").addEventListener("click",a.openTaskForm)}static openTaskForm(){const t=document.querySelector("#overlay"),e=document.querySelector("#form-container");t.classList.add("active"),e.classList.add("active")}static forTaskFormButtons(){const t=document.querySelector("#cancel-task"),e=document.querySelector("#form");t.addEventListener("click",a.cancelTaskForm),e.addEventListener("submit",a.createTask)}static cancelTaskForm(){const t=document.querySelector("#overlay"),e=document.querySelector("#form-container");t.classList.remove("active"),e.classList.remove("active")}static createTask(t){t.preventDefault();const a=document.querySelector("#task-title").value,c=document.querySelector("#task-date").value,o=new e(a,c);s.aTaskCard(o.getName(),o.getDate()),document.querySelector("#form-container").classList.remove("active"),document.querySelector("#overlay").classList.remove("active")}}class c{constructor(){this.projects=[],this.projects.push(new t("Inbox","ADRE"))}setProjects(t){this.projects=t}getProjects(){return this.projects}getProject(t){return this.projects.find((e=>e.getName()===t))}contains(t){return this.projects.some((e=>e.getName()===t))}addProject(t){this.projects.find((e=>e.name===t.name))||this.projects.push(t)}deleteProject(t){const e=this.projects.find((e=>e.getName()===t));this.projects.splice(this.projects.indexOf(e),1)}}class o{static saveProjectsList(t){localStorage.setItem("projectsList",JSON.stringify(t))}static getProjectsList(){const s=Object.assign(new c,JSON.parse(localStorage.getItem("projectsList")));return s.setProjects(s.getProjects().map((e=>Object.assign(new t,e)))),s.getProjects().forEach((t=>t.setTasks(t.getTasks().map((t=>Object.assign(new e,t)))))),s}static addProject(t){const e=o.getProjectsList();e.addProject(t),o.saveProjectsList(e)}static deleteProject(t){const e=o.getProjectsList();e.deleteProject(t),o.saveProjectsList(e)}static addTask(t,e){const s=o.getProjectsList();s.getProject(t).addTask(e),o.saveProjectsList(s)}static deleteTask(t,e){const s=o.getProjectsList();s.getProject(t).deleteTask(e),o.saveProjectsList(s)}static renameTask(t,e,s){const a=o.getProjectsList();a.getProject(t).getTask(e).setName(s),o.saveProjectsList(a)}static setTaskDate(t,e,s){o.getProjectsList().getProject(t).getTask(e).setDate(s)}}class r{static loadPage(){r.projectsListTesting(),a.formEvents(),a.forTaskButtons(),a.projectEvents()}static projectsListTesting(){const t=r.exampleProjects(),e=r.exampleTasks();o.deleteTask(t.testProject2.name,e.task2.name)}static exampleTasks(){const t=new e("example 1","12/15/2022");s.aTaskCard(t.getName(),t.getDate());const a=new e("example 2","11/15/2022");s.aTaskCard(a.getName(),a.getDate());const c=new e("example 3","10/15/2022");s.aTaskCard(c.getName(),c.getDate());const o=new e("example 4","9/15/2022");s.aTaskCard(o.getName(),o.getDate());const r=new e("example 5","8/15,2022");return s.aTaskCard(r.getName(),r.getDate()),{task1:t,task2:a,task3:c,task4:o,task5:r}}static exampleProjects(){return{testProject1:new t("testProject1"),testProject2:new t("testProject2")}}}document.addEventListener("DOMContentLoaded",r.loadPage)})();