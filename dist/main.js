(()=>{"use strict";class e{constructor(e,t,n,c,s){this.title=e,this.description=t,this.priority=n,this.date=c,this.id=s}setTitle(e){this.title=e}setDescription(e){this.description=e}setPriority(e){this.priority=e}setDate(e){this.date=e}getId(){return this.id}}const t=[];(()=>{const n=document.querySelector("#main"),c=document.querySelector("#form"),s=document.querySelector("#form-container"),o=document.querySelector("#overlay"),d=document.querySelector("#add-task"),i=document.querySelector("#cancel-task"),a=(document.querySelector("#create-task"),()=>{s.classList.remove("active"),o.classList.remove("active")});d.addEventListener("click",(()=>{s.classList.add("active"),o.classList.add("active"),console.log("open form!")})),i.addEventListener("click",(()=>{a(),console.log("closed form!")})),c.addEventListener("submit",(c=>{c.preventDefault();let s=document.getElementById("task-title").value,o=document.getElementById("task-desc").value,d=document.getElementById("task-priority").value,i=document.getElementById("task-date").value,l=Date.now(),r=new e(s,o,d,i,l);const u=((e,t,n,c,s)=>{const o=document.createElement("div"),d=document.createElement("input"),i=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div"),r=document.createElement("button"),u=document.createElement("button");return o.classList.add("card"),i.classList.add("title"),a.classList.add("date"),l.classList.add("priority"),r.classList.add("edit"),u.classList.add("delete"),d.setAttribute("type","checkbox"),i.textContent=String(e),a.textContent=String(c),l.textContent=String(n),r.textContent="edit",u.textContent="delete",o.append(d),o.append(i),o.append(a),o.append(l),o.append(r),o.append(u),o})(s,0,d,i);n.append(u),t.push(r),console.log(s),console.log(t),document.getElementById("form").reset(),a(),console.log(r),console.log("clicked submit!")}))})()})();