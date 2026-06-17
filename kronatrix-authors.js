
(function(){
  function track(name, detail){
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({event:name, detail:detail || {}, page:location.pathname});
    if (window.localStorage) { try { localStorage.setItem('kx_last_event', JSON.stringify({name:name,path:location.pathname,at:new Date().toISOString()})); } catch(e){} }
  }
  document.addEventListener('click', function(e){
    var el=e.target.closest('[data-event]'); if(el){ track(el.getAttribute('data-event'), {text:(el.innerText||'').trim(), href:el.href||''}); }
  });
  var formStarted=false;
  document.addEventListener('focusin', function(e){
    if(!formStarted && e.target.closest('form[data-event-form="free_check"]')){ formStarted=true; track('free_check_form_start'); }
  });
  document.addEventListener('submit', function(e){ if(e.target.matches('form[data-event-form="free_check"]')) track('free_check_form_submit'); });
  var s50=false,s90=false;
  window.addEventListener('scroll', function(){
    var h=document.documentElement.scrollHeight-window.innerHeight; if(h<=0)return;
    var p=(window.scrollY/h)*100;
    if(!s50 && p>=50){s50=true; track('scroll_50');}
    if(!s90 && p>=90){s90=true; track('scroll_90');}
  }, {passive:true});
  var input=document.querySelector('#siteSearchInput'), out=document.querySelector('#siteSearchResults');
  if(input && out){
    var data=[]; fetch('site-search.json').then(r=>r.json()).then(j=>{data=j.pages||[]}).catch(()=>{});
    input.addEventListener('input', function(){
      var q=input.value.toLowerCase().trim(); out.innerHTML=''; if(!q)return;
      data.filter(p=>(p.title+' '+p.description+' '+p.keywords).toLowerCase().includes(q)).slice(0,12).forEach(function(p){
        var div=document.createElement('div'); div.className='result'; div.innerHTML='<a href="'+p.url+'">'+p.title+'</a><p>'+p.description+'</p>'; out.appendChild(div);
      });
    });
  }
})();
