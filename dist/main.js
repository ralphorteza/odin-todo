(()=>{"use strict";class t{constructor(t,e="No Date"){this.name=t,this.dueDate=e}setName(t){this.name=t}setDate(t){this.dueDate=t}getName(){return this.name}getDate(){return this.dueDate}}class e{static aProjectCard(t){const e=document.querySelector("#custom-projects-list"),c=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div"),a=document.createElement("button"),r=document.createElement("button"),n=document.createElement("button");c.classList.add("card-project"),o.classList.add("left-panel"),s.classList.add("right-panel"),a.setAttribute("class","button-project"),r.setAttribute("class","button-edit-project"),n.setAttribute("class","button-delete-project"),a.textContent=t,r.textContent="edit",n.textContent="del",o.append(a),s.append(r),s.append(n),c.append(o),c.append(s),e.append(c)}static aTaskCard(t,e){const c=document.querySelector("#project-preview"),o=document.createElement("div"),s=document.createElement("div"),a=document.createElement("div"),r=document.createElement("input"),n=document.createElement("p"),d=document.createElement("p"),i=document.createElement("button"),l=document.createElement("button");o.classList.add("task"),s.classList.add("left-panel"),a.classList.add("right-panel"),n.classList.add("task-name"),d.classList.add("date"),i.classList.add("button-edit-task"),l.classList.add("button-delete-task"),r.setAttribute("type","checkbox"),n.textContent=t,d.textContent=e,i.textContent="edit",l.textContent="delete",s.append(r),s.append(n),a.append(d),a.append(i),a.append(l),o.append(s),o.append(a),c.append(o)}static aProjectEditForm(){}}class c{static formEvents(){c.forAddTaskButton(),c.forTaskFormButtons()}static forAddTaskButton(){document.querySelector("#add-task").addEventListener("click",c.openTaskForm)}static openTaskForm(){const t=document.querySelector("#overlay"),e=document.querySelector("#form-container");t.classList.add("active"),e.classList.add("active")}static forTaskFormButtons(){const t=document.querySelector("#cancel-task"),e=document.querySelector("#form");t.addEventListener("click",c.cancelTaskForm),e.addEventListener("submit",c.createTask)}static cancelTaskForm(){const t=document.querySelector("#overlay"),e=document.querySelector("#form-container");t.classList.remove("active"),e.classList.remove("active")}static createTask(c){c.preventDefault();const o=document.querySelector("#task-title").value,s=document.querySelector("#task-date").value,a=new t(o,s);e.aTaskCard(a.getName(),a.getDate()),document.querySelector("#form-container").classList.remove("active"),document.querySelector("#overlay").classList.remove("active")}}class o{constructor(t){this.name=t,this.tasks=[]}setName(t){this.name=t}getName(){return this.name}setTasks(t){this.tasks=t}getTasks(){return this.tasks}getTask(t){return this.tasks.find((e=>e.getName()===t))}contains(t){return this.tasks.some((e=>e.getName()===t))}addTask(t){this.tasks.find((e=>e.getName()===t.name))||this.tasks.push(t)}deleteTask(t){this.tasks=this.tasks.filter((e=>e.name!==t))}}class s{constructor(){this.projects=[],this.projects.push(new o("Inbox"))}setProjects(t){this.projects=t}getProjects(){return this.projects}getProject(t){return this.projects.find((e=>e.getName()===t))}contains(t){return this.projects.some((e=>e.getName()===t))}addProject(t){this.projects.find((e=>e.name===t.name))||this.projects.push(t)}deleteProject(t){const e=this.projects.find((e=>e.getName()===t));this.projects.splice(this.projects.indexOf(e),1)}}class a{static saveProjectsList(t){localStorage.setItem("projectsList",JSON.stringify(t))}static getProjectsList(){const e=Object.assign(new s,JSON.parse(localStorage.getItem("projectsList")));return e.setProjects(e.getProjects().map((t=>Object.assign(new o,t)))),e.getProjects().forEach((e=>e.setTasks(e.getTasks().map((e=>Object.assign(new t,e)))))),e}static addProject(t){const e=a.getProjectsList();e.addProject(t),a.saveProjectsList(e)}static deleteProject(t){const e=a.getProjectsList();e.deleteProject(t),a.saveProjectsList(e)}static renameProject(t,e){const c=a.getProjectsList();c.getProject(t).setName(e),a.saveProjectsList(c)}static addTask(t,e){const c=a.getProjectsList();c.getProject(t).addTask(e),a.saveProjectsList(c)}static deleteTask(t,e){const c=a.getProjectsList();c.getProject(t).deleteTask(e),a.saveProjectsList(c)}static renameTask(t,e,c){const o=a.getProjectsList();o.getProject(t).getTask(e).setName(c),a.saveProjectsList(o)}static setTaskDate(t,e,c){a.getProjectsList().getProject(t).getTask(e).setDate(c)}}class r{static projectEvents(){r.addProjectButtons()}static addProjectButtons(){const t=document.querySelector("#button-add-project"),e=document.querySelector("#button-cancel-project");t.addEventListener("click",r.addProject),e.addEventListener("click",r.cancelProject)}static addProject(){const t=document.querySelector("#input-add-project").value;""!==t?a.getProjectsList().contains(t)?console.log(`${t} already exist!`):(a.addProject(new o(t)),e.aProjectCard(t),r.initProjectButtons(),console.log(`${t} created!`)):console.log("Project name cannot be empty!")}static cancelProject(){document.querySelector("#input-add-project").value="",console.log("project cancelled")}static initProjectButtons(){const t=document.querySelectorAll(".button-project"),e=document.querySelectorAll(".button-delete-project"),c=document.querySelectorAll(".button-edit-project");t.forEach((t=>{t.addEventListener("click",r.selectedProjectInSidebar)})),c.forEach((t=>{t.addEventListener("click",r.openForm)})),e.forEach((t=>{t.addEventListener("click",r.deleteProject)}))}static selectedProjectInSidebar(t){const e=t.target.textContent;console.log(`project button ${e} clicked!`),r.openProject(e,this)}static openProject(t,e){const c=document.querySelector("#project-name-header"),o=document.querySelectorAll(".button-default-project"),s=document.querySelectorAll(".button-project");c.textContent=t,[...o,...s].forEach((t=>t.classList.remove("active"))),e.classList.add("active")}static deleteProject(t){const e=t.target.parentElement.parentElement,c=e.children[0].children[0].textContent;console.log(`${c} deleted!`),a.deleteProject(c),e.remove(),r.openProject("Inbox",document.querySelector("#button-inbox-projects"))}static openInboxProject(){document.querySelector("#button-inbox-projects").addEventListener("click",r.selectedProjectInSidebar)}static openForm(t){t.preventDefault();const e=document.querySelector("#overlay"),c=document.querySelector("#form-project-container"),o=document.querySelector("#button-cancel-project-edit"),s=t.target.parentElement.parentElement.children[0].children[0].textContent;e.classList.add("active"),c.classList.add("active"),console.log(`Openned edit form for project ${s}!`),o.addEventListener("click",(t=>r.cancelForm(t,this)))}static cancelForm(t,e){console.log(e);const c=document.querySelector("#overlay"),o=document.querySelector("#form-project-container");c.classList.remove("active"),o.classList.remove("active")}}class n{static taskEvents(){const t=document.querySelectorAll(".button-edit-task"),e=document.querySelectorAll(".button-delete-task");t.forEach((t=>{t.addEventListener("click",n.editTask)})),e.forEach((t=>{t.addEventListener("click",n.deleteTask)}))}}class d{static task(){n.taskEvents()}static project(){r.projectEvents()}static initProjectButtons(){r.initProjectButtons()}static openProject(t,e){r.openProject(t,e)}static projectForm(){r.forProjectFormButtons()}static openInboxProject(){r.openInboxProject()}static form(){c.formEvents()}}class i{static loadPage(){d.form(),d.task(),d.project(),d.openProject("Inbox",document.querySelector("#button-inbox-projects")),i.loadProjects(),d.openInboxProject()}static loadProjects(){a.getProjectsList().getProjects().forEach((t=>{"Inbox"!==t.name&&i.loadProject(t.name)}))}static loadProject(t){e.aProjectCard(t),d.initProjectButtons(),console.log(`${t} button created!`)}}document.addEventListener("DOMContentLoaded",i.loadPage)})();