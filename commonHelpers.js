import{S as d,i as a}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(o){const r="https://pixabay.com",s="/api/",i=new URLSearchParams({key:"42985160-4d9b5f931f1b68b881db47de1",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${s}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(response.status);return t.json()})}function h(o){return o.map(r=>`<li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <ul class="img-description">
        <li>
          <h3>Likes</h3>
          <p>${r.likes}</p>
        </li>
        <li>
          <h3>Views</h3>
          <p>${r.views}</p>
        </li>
        <li>
          <h3>Comments</h3>
          <p>${r.comments}</p>
        </li>
        <li>
          <h3>Downloads</h3>
          <p>${r.downloads}</p>
        </li>
      </ul>
    </li>`).join("")}const l=document.querySelector(".form"),p=document.querySelector(".gallery");let c=new d(".gallery a",{captionsData:"alt",captionDelay:250});c.on("show.simplelightbox",function(){});const u=document.querySelector(".loader");function g(){return u.classList.remove("is-hidden")}function m(){return u.classList.add("is-hidden")}m();l.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.search.value.trim();if(r==="")return a.warning({message:"Please complete the field!",color:"red",position:"topRight"});g(),f(r).then(s=>{const i=h(s.hits);s.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}):(p.innerHTML=i,c.refresh())}).catch(s=>{a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}).finally(()=>{m(),l.reset()})});
//# sourceMappingURL=commonHelpers.js.map
