import{i as l}from"./assets/vendor-38388549.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function a(s){const t="https://pixabay.com",i="/api/",o=new URLSearchParams({key:"42985160-4d9b5f931f1b68b881db47de1",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${i}?${o}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(response.status);return r.json()})}function c(s){return s.map(t=>`<li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <ul class="img-description">
        <li>
          <h3>Likes</h3>
          <p>${t.likes}</p>
        </li>
        <li>
          <h3>Views</h3>
          <p>${t.views}</p>
        </li>
        <li>
          <h3>Comments</h3>
          <p>${t.comments}</p>
        </li>
        <li>
          <h3>Downloads</h3>
          <p>${t.downloads}</p>
        </li>
      </ul>
    </li>`).join("")}const u=document.querySelector(".form"),m=document.querySelector(".gallery");u.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.search.value.trim();t.length!==0&&a(t).then(i=>{const o=c(i.hits);i.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}):m.innerHTML=o})});
//# sourceMappingURL=commonHelpers.js.map
