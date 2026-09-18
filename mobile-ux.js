(function(){
  function ensureDrawerButton(){
    var center=document.querySelector('body.archive-active .archive-center');
    if(!center || center.querySelector('.mobile-drawer-toggle'))return;
    var b=document.createElement('button');
    b.type='button'; b.className='mobile-drawer-toggle';
    b.innerHTML='\u2630';
    b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();document.body.classList.add('drawer-open');});
    center.insertBefore(b,center.firstChild);
  }
  function ensureCloseButton(){
    var pane=document.querySelector('body.archive-active .archive-detail-pane');
    if(!pane || pane.querySelector('.mobile-detail-close'))return;
    var b=document.createElement('button');
    b.type='button'; b.className='mobile-detail-close';
    b.innerHTML='\u2715';
    b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();document.body.classList.remove('detail-open');});
    pane.insertBefore(b,pane.firstChild);
  }
  document.addEventListener('click',function(e){
    if(!document.body.classList.contains('drawer-open'))return;
    if(e.target.closest('.archive-sidebar'))return;
    if(e.target.closest('.mobile-drawer-toggle'))return;
    document.body.classList.remove('drawer-open');
  },true);
  document.addEventListener('click',function(e){
    if(e.target.closest('.archive-nav'))document.body.classList.remove('drawer-open');
  });
  document.addEventListener('click',function(e){
    var row=e.target.closest('.archive-click-row');
    if(row && window.innerWidth<=750){setTimeout(function(){document.body.classList.add('detail-open');},60);}
  });
  new MutationObserver(function(){
    if(document.body.classList.contains('archive-active')){
      setTimeout(function(){if(document.body.classList.contains('archive-active')){ensureDrawerButton();ensureCloseButton();}},80);
    } else {
      document.body.classList.remove('drawer-open');
      document.body.classList.remove('detail-open');
    }
  }).observe(document.body,{attributes:true,attributeFilter:['class']});
  function boot(){setTimeout(function(){ensureDrawerButton();ensureCloseButton();},500);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./service-worker.js').catch(function(){});
  });
}
