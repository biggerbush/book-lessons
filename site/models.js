/* Models section: home, detail (swipeable cards), saved. Loaded on demand by index.html; data in models.json. */
(function(){
"use strict";
const VG=window.VG;                      // helpers from index.html: app, esc, store, setCrumb, stopWatcher, removeBar
const esc=VG.esc, $=(s,r=document)=>r.querySelector(s);
let DATA=null, filt={cat:"",q:""};

/* ------------------------------------------------------------------ illustrations (viewBox 160x100) */
const ART={
first:'<rect class="m" x="20" y="24" width="30" height="54" rx="3"/><path class="m" d="M20 42h30M20 60h30M35 24v54"/><path class="l" d="M62 52h24m-7-6 7 6-7 6"/><rect class="af" x="98" y="62" width="14" height="14" rx="2"/><rect class="af" x="116" y="62" width="14" height="14" rx="2"/><rect class="af" x="134" y="62" width="14" height="14" rx="2"/><rect class="a" x="107" y="34" width="32" height="20" rx="2" stroke-dasharray="4 4"/>',
inversion:'<path class="m" d="M44 80V26m-10 10 10-10 10 10"/><path class="a" d="M116 20v54m-10-10 10 10 10-10"/><path class="l" d="M62 40c10-16 26-16 36 0m-1-9 1 9-9 1"/>',
second:'<path class="m" d="M33 50 59 34M33 50 59 66M73 32 105 21M73 32 105 43M73 68 105 57M73 68 105 79"/><circle class="af" cx="26" cy="50" r="7"/><circle class="l" cx="66" cy="32" r="6"/><circle class="l" cx="66" cy="68" r="6"/><circle class="if" cx="112" cy="20" r="5"/><circle class="if" cx="112" cy="44" r="5"/><circle class="if" cx="112" cy="56" r="5"/><circle class="if" cx="112" cy="80" r="5"/>',
occam:'<circle class="af" cx="24" cy="28" r="5"/><circle class="af" cx="136" cy="28" r="5"/><path class="m" d="M29 28c14 36 28-30 40 4s30 30 44-6c4-10 14-8 18-3"/><circle class="af" cx="24" cy="76" r="5"/><circle class="af" cx="136" cy="76" r="5"/><path class="a" d="M29 76H131"/>',
hanlon:'<rect class="m" x="14" y="22" width="68" height="26" rx="13"/><text x="48" y="39" text-anchor="middle">MALICE</text><path class="i" d="M22 35h52"/><rect class="a" x="78" y="56" width="68" height="26" rx="13"/><text x="112" y="73" text-anchor="middle">OVERSIGHT</text>',
map:'<path class="l" d="M14 26l22-6 22 6 22-6v50l-22 6-22-6-22 6z"/><path class="m" d="M36 20v50M58 26v50"/><path class="a" d="M104 78l18-34 12 20 8-12 12 26z"/>',
circle:'<circle class="m" cx="72" cy="50" r="40" stroke-dasharray="4 5"/><circle class="a" cx="72" cy="50" r="22"/><circle class="af" cx="72" cy="50" r="4"/><circle class="if" cx="130" cy="30" r="5"/><circle class="if" cx="136" cy="68" r="5"/>',
bayes:'<path class="m" d="M16 80V60h24v20z"/><path class="l" d="M50 50h20m-6-6 6 6-6 6"/><circle class="i" cx="86" cy="50" r="7"/><path class="l" d="M98 50h20m-6-6 6 6-6 6"/><path class="a" d="M128 80V26h24v54z"/>',
steel:'<path class="a" d="M80 16 50 27v24c0 18 12 28 30 35 18-7 30-17 30-35V27z"/><path class="l" d="M66 50l10 10 18-20"/>',
control:'<circle class="i" cx="80" cy="50" r="42" stroke-dasharray="4 5"/><circle class="a" cx="80" cy="50" r="20"/><path class="a" d="M70 51l7 7 13-15"/><circle class="if" cx="36" cy="30" r="3.5"/><circle class="if" cx="126" cy="72" r="3.5"/><circle class="if" cx="120" cy="24" r="3.5"/><circle class="if" cx="40" cy="74" r="3.5"/>',
fence:'<path class="l" d="M20 80V44l5-6 5 6v36M44 80V44l5-6 5 6v36M68 80V44l5-6 5 6v36M92 80V44l5-6 5 6v36M16 56h84M16 70h84"/><text class="big" x="116" y="62" style="font:800 40px var(--display);fill:var(--gain)">?</text>',
oppcost:'<path class="l" d="M16 50h38"/><path class="a" d="M54 50c14 0 18-22 38-22h42m-8-8 8 8-8 8"/><path class="m" d="M54 50c14 0 18 22 38 22h30" stroke-dasharray="4 5"/><path class="i" d="M126 64l12 12m0-12-12 12"/>',
regret:'<path class="l" d="M16 74h128"/><circle class="af" cx="30" cy="74" r="5"/><path class="a" d="M124 74V30l18 8-18 8"/><path class="m" d="M120 22C90 2 50 12 34 60"/><path class="m" d="M32 50l2 11 9-6"/>',
eisen:'<rect class="l" x="40" y="14" width="80" height="72" rx="3"/><path class="l" d="M80 14v72M40 50h80"/><rect class="af" x="42" y="16" width="36" height="32" rx="2" opacity=".3"/><circle class="af" cx="60" cy="32" r="4"/><circle class="if" cx="100" cy="32" r="3"/><circle class="mf" cx="60" cy="68" r="3"/><path class="m" d="M96 64l8 8m0-8-8 8"/>',
margin:'<path class="i" d="M16 24H144" stroke-dasharray="5 4"/><rect class="af" x="24" y="54" width="40" height="26" rx="2"/><path class="m" d="M80 30v18m-4-5 4 5 4-5m-4-13-4 5m8 0-4-5"/><text x="92" y="42">SAFETY GAP</text>',
premortem:'<path class="l" d="M54 82V42a26 26 0 0 1 52 0v40z"/><path class="i" d="M72 40l16 16m0-16-16 16"/><path class="m" d="M36 82h88"/><path class="a" d="M122 24l14 0m-7-7v14"/>',
ev:'<path class="l" d="M80 18v62M56 80h48M32 34h96"/><path class="a" d="M32 34 20 58h24zM128 34l-12 24h24z"/><circle class="af" cx="80" cy="18" r="4"/>',
doors:'<rect class="l" x="18" y="18" width="52" height="64" rx="2"/><path class="a" d="M28 50h32m-6-6 6 6-6 6M60 50H28m6-6-6 6 6 6" /><rect class="l" x="92" y="18" width="52" height="64" rx="2"/><path class="i" d="M102 50h32m-6-6 6 6-6 6"/>',
pareto:'<path class="m" d="M14 80H150"/><path class="af" d="M22 80V24h18v56zM46 80V38h18v42z"/><path class="m" d="M76 80V62h14v18zM96 80V66h14v14zM116 80V68h14v12zM136 80V70h12v10z"/>',
compound:'<path class="l" d="M16 14V80H150"/><path class="m" d="M16 80 148 46"/><path class="a" d="M16 80C70 78 112 66 148 18"/>',
loop:'<path class="a" d="M112 38a32 32 0 0 0-62-6"/><path class="a" d="M46 20l4 12 12-4"/><path class="i" d="M48 62a32 32 0 0 0 62 6"/><path class="i" d="M114 80l-4-12-12 4"/>',
lever:'<path class="l" d="M14 62 146 38"/><path class="l" d="M86 78l-14 0 14-26 14 26z"/><path class="a" d="M24 34v20m-5-6 5 6 5-6"/><rect class="m" x="120" y="16" width="26" height="22" rx="2"/>',
bottle:'<path class="l" d="M14 28h62q10 0 14 16h24q4-16 14-16h18"/><path class="l" d="M14 72h62q10 0 14-16h24q4 16 14 16h18"/><circle class="af" cx="26" cy="42" r="3"/><circle class="af" cx="38" cy="58" r="3"/><circle class="af" cx="50" cy="46" r="3"/><circle class="af" cx="62" cy="54" r="3"/><circle class="af" cx="76" cy="50" r="3"/><circle class="mf" cx="128" cy="50" r="3"/>',
network:'<path class="m" d="M80 50 40 30M80 50l44-18M80 50 36 70M80 50l46 22M40 30 36 70M124 32l2 40"/><circle class="af" cx="80" cy="50" r="8"/><circle class="l" cx="40" cy="30" r="5"/><circle class="l" cx="124" cy="32" r="5"/><circle class="l" cx="36" cy="70" r="5"/><circle class="l" cx="126" cy="72" r="5"/>',
diminish:'<path class="l" d="M16 14V82H150"/><path class="a" d="M16 82C34 36 60 26 148 22"/><path class="m" d="M36 82V50M100 82V28" stroke-dasharray="3 4"/>',
confirm:'<g class="mf"><circle cx="24" cy="22" r="3"/><circle cx="46" cy="76" r="3"/><circle cx="26" cy="54" r="3"/><circle cx="130" cy="24" r="3"/><circle cx="136" cy="62" r="3"/><circle cx="116" cy="82" r="3"/><circle cx="60" cy="16" r="3"/></g><circle class="a" cx="80" cy="48" r="26"/><path class="a" d="M99 68l18 18"/><circle class="af" cx="72" cy="42" r="3.5"/><circle class="af" cx="88" cy="50" r="3.5"/><circle class="af" cx="78" cy="58" r="3.5"/>',
dunning:'<path class="l" d="M16 14V82H150"/><path class="a" d="M20 78C22 30 36 18 50 22c14 4 18 52 42 52 22 0 32-26 54-42"/><circle class="if" cx="44" cy="22" r="3.5"/>',
hedonic:'<path class="m" d="M16 62H148" stroke-dasharray="4 4"/><path class="a" d="M16 62h26l6-40c10 26 24 40 48 40h52"/>',
anchor:'<circle class="l" cx="80" cy="22" r="7"/><path class="l" d="M80 29v50M62 44h36M52 62c4 16 16 20 28 20s24-4 28-20m-7 3 7-5 5 9"/><path class="a" d="M24 18h24M24 30h16" />',
survivor:'<path class="m" d="M14 82H150"/><path class="af" d="M22 82V30h16v52zM62 82V44h16v38zM102 82V24h16v58z"/><path class="m" d="M42 82V54h16v28zM82 82V60h16v22zM122 82V50h16v32z" stroke-dasharray="3 4"/>',
sunk:'<ellipse class="m" cx="40" cy="74" rx="20" ry="6"/><path class="m" d="M20 74v-11M60 74v-11"/><ellipse class="m" cx="40" cy="63" rx="20" ry="6"/><path class="m" d="M20 63v-11M60 63v-11"/><ellipse class="m" cx="40" cy="52" rx="20" ry="6"/><path class="i" d="M76 18v66" stroke-dasharray="3 4"/><path class="a" d="M88 50h54m-8-8 8 8-8 8"/>',
incent:'<path class="m" d="M16 82C40 72 66 56 106 46m-9-5 9 5-8 7"/><path class="m" d="M16 22C46 26 78 34 106 40"/><circle class="af" cx="128" cy="44" r="14"/><text x="128" y="49" text-anchor="middle" style="font:800 14px var(--display);fill:var(--on-gain)">£</text>',
proof:'<g class="mf"><circle cx="40" cy="44" r="6"/><path d="M31 70a9 9 0 0 1 18 0z"/><circle cx="76" cy="44" r="6"/><path d="M67 70a9 9 0 0 1 18 0z"/><circle cx="112" cy="44" r="6"/><path d="M103 70a9 9 0 0 1 18 0z"/><circle cx="144" cy="44" r="6"/><path d="M135 70a9 9 0 0 1 18 0z"/></g><circle class="af" cx="12" cy="44" r="6"/><path class="af" d="M3 70a9 9 0 0 1 18 0z"/><path class="a" d="M10 26h138m-7-6 7 6-7 6"/>',
charity:'<path class="l" d="M20 20h56a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H48L36 62V52H20a6 6 0 0 1-6-6V26a6 6 0 0 1 6-6z"/><path class="m" d="M26 32h44M26 42h28"/><path class="a" d="M96 46h46a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6h-6v12L124 76H96a6 6 0 0 1-6-6V52a6 6 0 0 1 6-6z"/><path class="a" d="M104 62l8 8 16-16"/>',
cycle:'<path class="m" d="M80 18 34 80H126z"/><circle class="af" cx="80" cy="18" r="8"/><circle class="if" cx="34" cy="80" r="8"/><circle class="l" cx="126" cy="80" r="8" style="fill:var(--panel2)"/>',
distort:'<path class="l" d="M36 64c-16-2-18-26-2-28 2-18 26-20 36-6 10-10 32-6 32 10 16 0 20 22 4 24z"/><circle class="l" cx="44" cy="78" r="3.5"/><circle class="l" cx="34" cy="88" r="2.2"/><path class="a" d="M52 52l8-8 8 12 8-12 8 8"/>',
reframe:'<ellipse class="i" cx="40" cy="48" rx="28" ry="20"/><path class="i" d="M26 48l6-6 6 10 6-10 6 6"/><path class="l" d="M76 48h18m-6-6 6 6-6 6"/><ellipse class="a" cx="122" cy="48" rx="28" ry="20"/><path class="a" d="M108 50c8 8 24 8 28 0"/>',
catastrophe:'<path class="m" d="M14 80H150"/><path class="i" d="M32 80 94 14l50 66" stroke-dasharray="5 5"/><path class="a" d="M36 80l12-17 12 17"/><path class="af" d="M60 80h0"/>',
record:'<rect class="l" x="42" y="14" width="76" height="72" rx="4"/><path class="m" d="M58 34h42M58 48h42M58 62h28"/><path class="a" d="M110 72l22-30 8 6-22 30-11 3z"/>',
activate:'<path class="l" d="M14 84h24V70h24V56h24V42h24V28h20"/><circle class="af" cx="136" cy="20" r="8"/><path class="a" d="M136 4v4M122 20h4M146 20h4"/>'
};
const art=k=>'<svg class="art" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">'+(ART[k]||ART.first)+'</svg>';
const ICON={
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  prev:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 2 4 8l6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  next:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m6 2 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  play:'<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 1.5v13l11-6.5z" fill="currentColor"/></svg>',
  check:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3 8.5 3.2 3.2L13 4.8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

/* ------------------------------------------------------------------ state */
const S=()=>VG.store.get("vg:models",{learned:[],revisit:[]});
const has=(k,id)=>S()[k].includes(id);
function toggle(k,id){
  const s=S(),o=k==="learned"?"revisit":"learned",i=s[k].indexOf(id);
  if(i>=0)s[k].splice(i,1);else{s[k].push(id);const j=s[o].indexOf(id);if(j>=0)s[o].splice(j,1)}
  VG.store.set("vg:models",s);
}
const byId=id=>DATA.models.find(m=>m.id===id);

/* ------------------------------------------------------------------ views */
function cover(m){return m.story?'<div class="artbox story-cover"><svg class="scene on" viewBox="0 0 360 280" aria-hidden="true">'+m.story[0].svg+'</svg></div>':'<div class="artbox">'+art(m.art)+'</div>'}
function card(m){
  const n=m.story?m.story.length+1:5;
  return '<a class="mcard'+(m.story?" has-story":"")+'" href="#/models/'+m.id+'">'+(has("learned",m.id)?'<span class="mark" title="Learned">'+ICON.check+'</span>':"")+
    (m.story?'<span class="anim">Animated</span>':"")+cover(m)+'<div class="mcard-b"><h3>'+esc(m.name)+'</h3><p>'+esc(m.tagline)+'</p>'+
    '<div class="foot"><span>'+esc(m.category)+'</span><span>'+n+' swipes</span></div></div></a>';
}
function homeView(){
  VG.stopWatcher();VG.removeBar();
  document.title="Models · VisualGrowth";
  VG.setCrumb([{label:"Library",href:"#/"},{label:"Models"}]);
  const learned=S().learned.length;
  const filtering=filt.cat||filt.q;
  const list=DATA.models.filter(m=>(!filt.cat||m.categorySlug===filt.cat)&&(!filt.q||(m.name+" "+m.tagline+" "+m.category).toLowerCase().includes(filt.q.toLowerCase())));
  const day=new Date(),pool=DATA.models.filter(x=>x.story).length?DATA.models.filter(x=>x.story):DATA.models,f=pool[(day.getFullYear()*372+day.getMonth()*31+day.getDate())%pool.length];
  VG.app.innerHTML=
   '<section class="mh"><div class="eyebrow">Mental models</div><h1>Think with better <em>tools</em>.</h1>'+
   '<p>'+DATA.models.length+' mental models you can swipe through, each explained step by step with moving graphics.</p></section>'+
   '<div class="mtools"><label class="search"><span class="sr">Search models</span>'+ICON.search+'<input id="msearch" type="search" placeholder="Search models" value="'+esc(filt.q)+'" autocomplete="off"></label>'+
   '<a class="btn" href="#/models/saved">'+ICON.check.replace("<svg",'<svg width="16" height="16"')+' '+learned+' learned</a></div>'+
   '<div class="chips" role="group" aria-label="Categories"><button class="chip" type="button" data-c="" aria-pressed="'+(!filt.cat)+'">All<small>'+DATA.models.length+'</small></button>'+
   DATA.categories.map(c=>'<button class="chip" type="button" data-c="'+c.slug+'" aria-pressed="'+(filt.cat===c.slug)+'">'+esc(c.name)+'<small>'+c.count+'</small></button>').join("")+'</div>'+
   (!filtering?'<a class="feat" href="#/models/'+f.id+'">'+cover(f)+'<div class="feat-b"><span class="catag">Model of the day · '+esc(f.category)+'</span><h2>'+esc(f.name)+'</h2><p>'+esc(f.tagline)+'</p><span class="btn primary" style="align-self:flex-start;border-radius:999px">'+ICON.play+' Start</span></div></a>':"")+
   (list.length?'<div class="mgrid">'+list.map(card).join("")+'</div>':'<p class="empty">No models match that search yet.</p>');
  $("#msearch").addEventListener("input",e=>{
    filt.q=e.target.value;const pos=e.target.selectionStart;homeView();const i=$("#msearch");i.focus();try{i.setSelectionRange(pos,pos)}catch(x){}
  });
  VG.app.querySelectorAll(".chip").forEach(b=>b.addEventListener("click",()=>{filt.cat=b.dataset.c;homeView()}));
  window.scrollTo(0,0);
}

/* ------------------------------------------------------------------ story player */
const KIND_ICON={      // visuals for models that do not have a hand-built story yet
  ex:'<g class="fx-pop" style="--d:.1s"><circle cx="180" cy="128" r="62" class="glow"/></g>'+
     '<path pathLength="1" class="la fat fx-draw" style="--d:.2s" d="M180 70a42 42 0 0 1 24 76v18h-48v-18a42 42 0 0 1 24-76z"/>'+
     '<path pathLength="1" class="la fx-draw" style="--d:.9s" d="M160 184h40M166 200h28"/>'+
     '<g class="fx-pop" style="--d:1.2s"><path class="la" d="M180 44v-14M128 66l-10-10M232 66l10-10M110 120H96M250 120h14"/></g>',
  when:'<g class="fx-pop" style="--d:.1s"><circle cx="180" cy="136" r="70" class="pa"/></g>'+
     '<path pathLength="1" class="lk fat fx-draw" style="--d:.6s" d="M180 136V96M180 136l30 18"/>'+
     '<g class="fx-pop" style="--d:1s"><circle cx="180" cy="136" r="7" class="af"/></g>'+
     '<g class="fx-fade" style="--d:1.2s"><circle cx="180" cy="136" r="88" class="glow fx-pulse"/></g>',
  mis:'<g class="fx-pop" style="--d:.1s"><path class="pi" d="M180 52l84 148H96z"/></g>'+
     '<path pathLength="1" class="li fat fx-draw" style="--d:.6s" d="M180 102v52"/>'+
     '<g class="fx-pop" style="--d:1s"><circle cx="180" cy="176" r="6" class="if"/></g>'
};
function slidesFor(m){
  if(m.story&&m.story.length)return m.story.map(x=>({k:x.k,h:x.h,t:x.t,svg:x.svg}));
  const c=m.cards;
  return [
    {k:"The idea",h:m.name,t:c[0].t,svg:ART[m.art]||ART.first,auto:true},
    {k:"Example",h:"A simple example",t:c[1].t,svg:KIND_ICON.ex},
    {k:"When to use it",h:"When it helps",t:c[2].t,svg:KIND_ICON.when},
    {k:"Common mistake",h:"Watch out for this",t:c[3].t,svg:KIND_ICON.mis}
  ];
}
const ASK_SVG='<g class="fx-fade"><circle cx="180" cy="134" r="96" class="glow"/></g>'+
  '<g class="fx-pop" style="--d:.15s"><circle cx="180" cy="134" r="64" class="cA"/></g>'+
  '<g class="fx-pop" style="--d:.5s"><g class="fx-bob" style="--d:1.2s"><text x="180" y="160" class="fd" font-size="76" text-anchor="middle" fill="var(--on-gain)">?</text></g></g>';
const scene=(svg,auto)=>auto?'<svg class="scene auto art" viewBox="-10 -12 180 124" aria-hidden="true">'+svg+'</svg>':'<svg class="scene" viewBox="0 0 360 280" aria-hidden="true">'+svg+'</svg>';

let keyHandler=null;
function detailView(m){
  VG.stopWatcher();VG.removeBar();
  document.title=m.name+" · Models · VisualGrowth";
  VG.setCrumb([{label:"Models",href:"#/models"},{label:m.name}]);
  const i=DATA.models.indexOf(m),prev=DATA.models[i-1],next=DATA.models[i+1];
  const rel=DATA.models.filter(x=>x.categorySlug===m.categorySlug&&x.id!==m.id).slice(0,3);
  const cbt=m.categorySlug==="emotions-cbt";
  const sl=slidesFor(m), N=sl.length+1;
  const slideHtml=(x,n)=>'<section class="st" aria-roledescription="slide" aria-label="'+(n+1)+' of '+N+'">'+
    '<div class="stage">'+scene(x.svg,x.auto)+'</div>'+
    '<div class="stext"><div class="sk"><span>'+esc(x.k)+'</span><span>'+(n+1)+' / '+N+'</span></div><h2>'+esc(x.h)+'</h2><p>'+esc(x.t)+'</p></div></section>';
  VG.app.innerHTML='<div class="story" id="story">'+
   '<div class="shead"><a class="sx" href="#/models" aria-label="Back to models">'+ICON.prev+'</a>'+
     '<div class="stitle"><span class="catag">'+esc(m.category)+'</span><b>'+esc(m.name)+'</b></div>'+
     '<button class="sx" id="sbook" type="button" aria-label="Revisit later"></button></div>'+
   '<div class="segs" aria-hidden="true">'+Array.from({length:N},()=>'<i></i>').join("")+'</div>'+
   '<div class="strack" id="track" tabindex="0" aria-label="'+esc(m.name)+'. Swipe, tap, or use the arrow keys.">'+
     sl.map(slideHtml).join("")+
     '<section class="st last" aria-roledescription="slide" aria-label="'+N+' of '+N+'"><div class="stage">'+scene(ASK_SVG)+'</div>'+
       '<div class="stext"><div class="sk"><span>Ask yourself</span><span>'+N+' / '+N+'</span></div><h2 class="q">'+esc(m.cards[4].t)+'</h2>'+
       '<div class="acts"><button class="btn" id="lrn" type="button"></button>'+(next?'<a class="btn primary" href="#/models/'+next.id+'">Next: '+esc(next.name)+' '+ICON.next.replace("<svg",'<svg width="14" height="14"')+'</a>':'<a class="btn primary" href="#/models">All models</a>')+'</div>'+
       '<span class="soonline">'+ICON.play+' Narrated animation coming soon</span>'+
       (cbt?'<p class="note">An educational overview of a thinking tool, not therapy or medical advice. If you are struggling, a qualified professional can help.</p>':"")+
     '</div></section></div>'+
   '<div class="snav"><button class="circ" id="cp" type="button" aria-label="Previous">'+ICON.prev+'</button><span class="hint" id="hint">Swipe or tap to continue</span><button class="circ big" id="cn" type="button" aria-label="Next">'+ICON.next+'</button></div>'+
   '</div>'+
   '<div class="mdet">'+
   (rel.length?'<div class="related"><h2>More in '+esc(m.category)+'</h2><div class="mgrid" style="grid-template-columns:repeat(auto-fill,minmax(200px,1fr))">'+rel.map(card).join("")+'</div></div>':"")+
   '<div class="pn">'+(prev?'<a href="#/models/'+prev.id+'"><small>Previous</small><b>'+esc(prev.name)+'</b></a>':'<span style="flex:1"></span>')+(next?'<a class="nx" href="#/models/'+next.id+'"><small>Next</small><b>'+esc(next.name)+'</b></a>':'<span style="flex:1"></span>')+'</div></div>';

  const track=$("#track"), segs=[...VG.app.querySelectorAll(".segs i")], scenes=[...track.querySelectorAll(".scene")];
  let cur=-1, lock=0;
  const width=()=>track.clientWidth;
  const idx=()=>Math.max(0,Math.min(N-1,Math.round(track.scrollLeft/width())));
  function activate(n){
    if(n===cur)return;
    if(cur>=0&&scenes[cur])scenes[cur].classList.remove("on");
    cur=n;
    const sc=scenes[n]; sc.classList.remove("on"); void sc.getBoundingClientRect(); sc.classList.add("on");
    segs.forEach((s,k)=>{s.className=k<n?"done":k===n?"now":""});
    $("#cp").disabled=n===0; $("#cn").disabled=n===N-1;
    if(n>0){const h=$("#hint");if(h)h.style.opacity="0"}
    if(n===N-1&&!has("learned",m.id)){/* reaching the end counts as viewed, not learned */}
  }
  function go(n){
    n=Math.max(0,Math.min(N-1,n)); lock=Date.now()+650; activate(n);
    track.scrollTo({left:n*width(),behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"});
  }
  track.addEventListener("scroll",()=>{if(Date.now()>lock)requestAnimationFrame(()=>activate(idx()))},{passive:true});
  track.addEventListener("scrollend",()=>{lock=0;activate(idx())});
  $("#cp").addEventListener("click",()=>go(cur-1)); $("#cn").addEventListener("click",()=>go(cur+1));
  track.querySelectorAll(".stage").forEach(st=>st.addEventListener("click",e=>{
    const r=st.getBoundingClientRect(); go(e.clientX-r.left<r.width*.3?cur-1:cur+1);
  }));
  if(keyHandler)document.removeEventListener("keydown",keyHandler);
  keyHandler=e=>{
    if(!document.body.contains(track)){document.removeEventListener("keydown",keyHandler);keyHandler=null;return}
    if(e.target.closest&&e.target.closest("input,textarea"))return;
    if(e.key==="ArrowRight"){e.preventDefault();go(cur+1)}else if(e.key==="ArrowLeft"){e.preventDefault();go(cur-1)}
  };
  document.addEventListener("keydown",keyHandler);
  addEventListener("resize",()=>{if(document.body.contains(track))track.scrollLeft=cur*width()},{passive:true});
  activate(0);

  const marks=()=>{
    const l=has("learned",m.id),r=has("revisit",m.id);
    $("#lrn").innerHTML=l?ICON.check.replace("<svg",'<svg width="16" height="16"')+" Learned":"Mark as learned";$("#lrn").className="btn"+(l?" on":"");$("#lrn").setAttribute("aria-pressed",l);
    $("#sbook").innerHTML=r?'<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z" fill="currentColor"/></svg>':'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z"/></svg>';
    $("#sbook").setAttribute("aria-pressed",r);$("#sbook").classList.toggle("on",r);
  };
  $("#lrn").addEventListener("click",()=>{toggle("learned",m.id);marks()});
  $("#sbook").addEventListener("click",()=>{toggle("revisit",m.id);marks()});
  marks();window.scrollTo(0,0);
}

function savedView(){
  VG.stopWatcher();VG.removeBar();
  document.title="Saved models · VisualGrowth";
  VG.setCrumb([{label:"Models",href:"#/models"},{label:"Saved"}]);
  const s=S(),n=DATA.models.length,L=s.learned.filter(byId),R=s.revisit.filter(byId);
  const pct=n?L.length/n:0,C=2*Math.PI*40;
  const row=id=>{const m=byId(id);return '<li><a class="mrow" href="#/models/'+m.id+'"><div class="artbox">'+art(m.art)+'</div><div><h4>'+esc(m.name)+'</h4><p>'+esc(m.category)+'</p></div>'+ICON.next.replace("<svg",'<svg width="14" height="14"')+'</a></li>'};
  VG.app.innerHTML='<div class="mdet"><a class="back" href="#/models">'+ICON.prev.replace("<svg",'<svg width="12" height="12"')+' Models</a>'+
   '<div class="mtop"><h1>Saved</h1></div>'+
   '<div class="ring"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="40" fill="none" stroke="var(--line)" stroke-width="10"/><circle cx="50" cy="50" r="40" fill="none" stroke="var(--gain)" stroke-width="10" stroke-linecap="round" stroke-dasharray="'+(C*pct).toFixed(1)+' '+C.toFixed(1)+'" transform="rotate(-90 50 50)"/></svg><div><b>'+L.length+' of '+n+'</b><span>models learned</span></div></div>'+
   '<h2 class="mh2">Revisit later</h2>'+(R.length?'<ul class="mlist">'+R.map(row).join("")+'</ul>':'<p class="empty" style="padding:14px 0;text-align:left">Nothing saved yet. Tap “Revisit later” on any model.</p>')+
   '<h2 class="mh2">Learned</h2>'+(L.length?'<ul class="mlist">'+L.map(row).join("")+'</ul>':'<p class="empty" style="padding:14px 0;text-align:left">Models you mark as learned will appear here.</p>')+'</div>';
  window.scrollTo(0,0);
}

/* ------------------------------------------------------------------ entry */
(function(){if(!document.querySelector('link[href="models-motion.css"]')){const l=document.createElement("link");l.rel="stylesheet";l.href="models-motion.css";document.head.appendChild(l)}})();
window.VGModels={
  async show(parts){                      // parts = ["models", ...]
    if(!DATA){
      try{const r=await fetch("models.json",{cache:"no-store"});if(!r.ok)throw 0;DATA=await r.json()}
      catch(e){VG.app.innerHTML='<section class="mh"><h1>Models unavailable</h1><p>Could not load models.json.</p></section>';return}
    }
    const ft=document.querySelector("footer p");
    if(ft){ft.dataset.o=ft.dataset.o||ft.textContent;ft.textContent="Models are short paraphrased explainers made for learning. CBT content is educational only, not therapy or medical advice. Drawings are illustrative."}
    const id=parts[1];
    if(id==="saved")return savedView();
    const m=id&&byId(id);
    if(m)return detailView(m);
    homeView();
  }
};
})();
