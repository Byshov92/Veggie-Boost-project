(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();(()=>{const s={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtns:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};s.openModalBtn.addEventListener("click",t),s.openModalBtns.forEach(n=>{n.addEventListener("click",t)}),s.closeModalBtn.addEventListener("click",t);function t(){const n=window.matchMedia("(max-width: 767px)").matches;s.modal.classList.toggle("is-hidden"),!s.modal.classList.contains("is-hidden")&&n&&r()}function r(){const n=document.querySelector(".js-menu-container"),e=document.querySelector(".js-toggle-menu");n.classList.remove("is-open"),e.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),document.body.style.overflow="auto"}})();(()=>{const s=document.querySelector(".js-menu-container"),t=document.querySelector(".js-toggle-menu");document.getElementById("check");const r=document.body,n=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),s.classList.toggle("is-open"),t.classList.toggle("is-open"),e?r.style.overflow="auto":r.style.overflow="hidden"};t.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(s.classList.remove("is-open"),t.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),r.style.overflow="auto")})})();
