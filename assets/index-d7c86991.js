(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?l.credentials="include":e.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(e){if(e.ep)return;e.ep=!0;const l=o(e);fetch(e.href,l)}})();(()=>{const n=document.querySelector(".js-menu-container"),t=document.querySelector(".js-toggle-menu");document.getElementById("check");const o=document.body,s=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),n.classList.toggle("is-open"),t.classList.toggle("is-open"),e?o.style.overflow="auto":o.style.overflow="hidden"};t.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),t.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),o.style.overflow="auto")})})();(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtns:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn.addEventListener("click",t),n.openModalBtns.forEach(s=>{s.addEventListener("click",t)}),n.closeModalBtn.addEventListener("click",t);function t(){n.modal.classList.toggle("is-hidden"),n.modal.classList.contains("is-hidden")||o()}function o(){const s=document.querySelector(".js-menu-container"),e=document.querySelector(".js-toggle-menu");s.classList.remove("is-open"),e.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),document.body.style.overflow="auto"}})();(()=>{document.querySelectorAll(".anchor").forEach(o=>{o.addEventListener("click",()=>{let s=document.getElementById(`${o.getAttribute("data-value")}`).offsetTop;t(),o.getAttribute("data-value")==="vegetables"?window.scrollTo({top:s-40,behavior:"smooth"}):window.scrollTo({top:s,behavior:"smooth"})})});function t(){const o=document.querySelector(".js-menu-container"),s=document.querySelector(".js-toggle-menu");o.classList.remove("is-open"),s.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),document.body.style.overflow="auto"}})();(()=>{const n=document.getElementById("to-top-button");window.onscroll=function(){t()},n.addEventListener("click",o);function t(){document.body.scrollTop>200||document.documentElement.scrollTop>200?n.classList.add("show"):n.classList.remove("show")}function o(){window.scrollTo({top:0,behavior:"smooth"})}})();
