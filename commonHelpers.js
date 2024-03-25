import{S as m,i as a}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(s){const r="https://pixabay.com",o="/api/",i=new URLSearchParams({key:"42985160-4d9b5f931f1b68b881db47de1",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(response.status);return t.json()})}function p(s){return s.map(r=>`<li class="gallery-item">
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
    </li>`).join("")}const l=document.querySelector(".form"),c=document.querySelector(".gallery");let u=new m(".gallery a",{captionsData:"alt",captionDelay:250});u.on("show.simplelightbox",function(){});l.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.search.value.trim();r.length!==0&&(c.innerHTML='<span class="loader"></span>',f(r).then(o=>{const i=p(o.hits);o.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}):(c.innerHTML=i,u.refresh())}).catch(o=>{a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}).finally(()=>{l.reset()}))});
//# sourceMappingURL=commonHelpers.js.map
