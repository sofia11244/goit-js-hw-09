import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form");document.querySelector(".feedback-form input");const o="feedback-form-state";let t={email:"",message:""};function s(){const e=localStorage.getItem(o);e&&(t=JSON.parse(e),a.email.value=t.email,a.message.value=t.message)}a.addEventListener("input",e=>{const{name:r,value:m}=e.target;t[r]=m,localStorage.setItem(o,JSON.stringify(t))});a.addEventListener("submit",e=>{e.preventDefault(),console.log(t),localStorage.removeItem(o),a.reset()});s();
//# sourceMappingURL=page-3.js.map
