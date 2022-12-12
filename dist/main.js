(()=>{"use strict";class t{constructor(t,e="No Date"){this.name=t,this.dueDate=e}setName(t){this.name=t}setDate(t){this.dueDate=t}getName(){return this.name}getDate(){return this.dueDate}}class e{static aProjectCard(t){const e=document.querySelector("#custom-projects-list"),s=document.createElement("button");s.setAttribute("class","button-project"),s.textContent=t,e.append(s)}static aTaskCard(t,e){const s=document.querySelector("#project-preview"),c=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),r=document.createElement("input"),n=document.createElement("p"),i=document.createElement("p"),d=document.createElement("button"),l=document.createElement("button");c.classList.add("task"),o.classList.add("left-panel"),a.classList.add("right-panel"),n.classList.add("task-name"),i.classList.add("date"),d.classList.add("button-edit-task"),l.classList.add("button-delete-task"),r.setAttribute("type","checkbox"),n.textContent=t,i.textContent=e,d.textContent="edit",l.textContent="delete",o.append(r),o.append(n),a.append(i),a.append(d),a.append(l),c.append(o),c.append(a),s.append(c)}}class s{static formEvents(){s.forAddTaskButton(),s.forTaskFormButtons()}static forAddTaskButton(){document.querySelector("#add-task").addEventListener("click",s.openTaskForm)}static openTaskForm(){const t=document.querySelector("#overlay"),e=document.querySelector("#form-container");t.classList.add("active"),e.classList.add("active")}static forTaskFormButtons(){const t=document.querySelector("#cancel-task"),e=document.querySelector("#form");t.addEventListener("click",s.cancelTaskForm),e.addEventListener("submit",s.createTask)}static cancelTaskForm(){const t=document.querySelector("#overlay"),e=document.querySelector("#form-container");t.classList.remove("active"),e.classList.remove("active")}static createTask(s){s.preventDefault();const c=document.querySelector("#task-title").value,o=document.querySelector("#task-date").value,a=new t(c,o);e.aTaskCard(a.getName(),a.getDate()),document.querySelector("#form-container").classList.remove("active"),document.querySelector("#overlay").classList.remove("active")}}class c{constructor(t){this.name=t,this.tasks=[]}setName(t){this.name=t}getName(){return this.name}setTasks(t){this.tasks=t}getTasks(){return this.tasks}getTask(t){return this.tasks.find((e=>e.getName()===t))}contains(t){return this.tasks.some((e=>e.getName()===t))}addTask(t){this.tasks.find((e=>e.getName()===t.name))||this.tasks.push(t)}deleteTask(t){this.tasks=this.tasks.filter((e=>e.name!==t))}}class o{constructor(){this.projects=[],this.projects.push(new c("Inbox","ADRE"))}setProjects(t){this.projects=t}getProjects(){return this.projects}getProject(t){return this.projects.find((e=>e.getName()===t))}contains(t){return this.projects.some((e=>e.getName()===t))}addProject(t){this.projects.find((e=>e.name===t.name))||this.projects.push(t)}deleteProject(t){const e=this.projects.find((e=>e.getName()===t));this.projects.splice(this.projects.indexOf(e),1)}}class a{static saveProjectsList(t){localStorage.setItem("projectsList",JSON.stringify(t))}static getProjectsList(){const e=Object.assign(new o,JSON.parse(localStorage.getItem("projectsList")));return e.setProjects(e.getProjects().map((t=>Object.assign(new c,t)))),e.getProjects().forEach((e=>e.setTasks(e.getTasks().map((e=>Object.assign(new t,e)))))),e}static addProject(t){const e=a.getProjectsList();e.addProject(t),a.saveProjectsList(e)}static deleteProject(t){const e=a.getProjectsList();e.deleteProject(t),a.saveProjectsList(e)}static addTask(t,e){const s=a.getProjectsList();s.getProject(t).addTask(e),a.saveProjectsList(s)}static deleteTask(t,e){const s=a.getProjectsList();s.getProject(t).deleteTask(e),a.saveProjectsList(s)}static renameTask(t,e,s){const c=a.getProjectsList();c.getProject(t).getTask(e).setName(s),a.saveProjectsList(c)}static setTaskDate(t,e,s){a.getProjectsList().getProject(t).getTask(e).setDate(s)}}class r{static projectEvents(){r.addProjectButtons()}static addProjectButtons(){const t=document.querySelector("#button-add-project"),e=document.querySelector("#button-cancel-project");t.addEventListener("click",r.addProject),e.addEventListener("click",r.cancelProject)}static addProject(){const t=document.querySelector("#input-add-project").value;""!==t?a.getProjectsList().contains(t)?console.log(`${t} already exist!`):(a.addProject(new c(t)),e.aProjectCard(t),r.initProjectButtons(),console.log(`${t} created!`)):console.log("Project name cannot be empty!")}static cancelProject(){document.querySelector("#input-add-project").value="",console.log("project cancelled")}static initProjectButtons(){document.querySelectorAll(".button-project").forEach((t=>{t.addEventListener("click",r.selectedProjectInSidebar)}))}static selectedProjectInSidebar(t){const e=t.target.textContent;console.log(`project button ${e} clicked!`),r.openProject(e,this)}static openProject(t,e){const s=document.querySelector("#project-name-header");[...document.querySelectorAll(".button-default-project"),...document.querySelectorAll(".button-project")].forEach((t=>t.classList.remove("active"))),e.classList.add("active"),s.textContent=t}static openInboxProject(){document.querySelector("#button-inbox-projects").addEventListener("click",r.selectedProjectInSidebar)}}class n{static taskEvents(){const t=document.querySelectorAll(".button-edit-task"),e=document.querySelectorAll(".button-delete-task");t.forEach((t=>{t.addEventListener("click",n.editTask)})),e.forEach((t=>{t.addEventListener("click",n.deleteTask)}))}}class i{static task(){n.taskEvents()}static project(){r.projectEvents()}static initProjectButtons(){r.initProjectButtons()}static openProject(t,e){r.openProject(t,e)}static openInboxProject(){r.openInboxProject()}static form(){s.formEvents()}}class d{static loadPage(){i.form(),i.task(),i.project(),i.openProject("Inbox",document.querySelector("#button-inbox-projects")),d.loadProjects(),i.openInboxProject()}static loadProjects(){a.getProjectsList().getProjects().forEach((t=>{"Inbox"!==t.name&&d.loadProject(t.name)}))}static loadProject(t){e.aProjectCard(t),i.initProjectButtons(),console.log(`${t} button created!`)}}document.addEventListener("DOMContentLoaded",d.loadPage)})();