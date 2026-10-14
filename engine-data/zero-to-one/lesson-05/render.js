const b0=TM.empty_map;
cells.forEach((c,i)=>c.setAttribute('opacity',p(u,b0+i*.05,b0+i*.05+.4)));
rise($('seed'),p(u,b0+6.6,b0+7.1)); const ph=(t%1.6)/1.6; $('seedr').setAttribute('r',(14+30*ph).toFixed(1)); $('seedr').setAttribute('opacity',(1-ph).toFixed(2));

const g1=TM.gear_icon,tx=TM.ten_x_badge,sb=TM.search_bar;
rise($('gearg'),p(u,g1,g1+.5)); $('gear').setAttribute('transform','rotate('+(t*20%360).toFixed(1)+' 300 400)');
rise($('bars'),p(u,tx,tx+.5)); $('bar10').setAttribute('width',(80+720*p(u,tx+.4,tx+2)).toFixed(1)); rise($('badge'),p(u,tx+1.8,tx+2.3));
rise($('srch'),p(u,sb,sb+.5)); $('stxt').textContent='Google search'.slice(0,Math.round(13*p(u,sb+.3,sb+1.6)));
rise($('rivals'),p(u,sb+1,sb+1.5)); RV.forEach((r,i)=>r[0].setAttribute('width',(r[1]*p(u,sb+1,sb+3)*(.9+.1*Math.sin(t*2+i))).toFixed(1)));
rise($('small'),p(u,sb+5,sb+5.6));

const pw=TM.phone_web;
ND.forEach((n,i)=>rise(n,p(u,pw+i*.3,pw+i*.3+.3)));
LK2.forEach(l=>l[0].setAttribute('opacity',p(u,pw+l[1]*.3+.2,pw+l[1]*.3+.5)));
const mh=388*p(u,pw,pw+4.7); $('meter').setAttribute('y',(696-mh).toFixed(1)); $('meter').setAttribute('height',mh.toFixed(1));
rise($('gate'),p(u,TM.harvard_gate,TM.harvard_gate+.5)); ST.forEach((s,i)=>s.setAttribute('opacity',p(u,TM.harvard_gate+.3+i*.15,TM.harvard_gate+.6+i*.15)));
rise($('startsm'),p(u,TM.small_circle,TM.small_circle+.6));

const cs=TM.code_screen,cc=TM.cost_curve,fx=cc+5.7;
rise($('mon'),p(u,cs,cs+.5)); CD.forEach((c,i)=>c.setAttribute('opacity',p(u,cs+.3+i*.2,cs+.5+i*.2)));
rise($('chart'),p(u,cc,cc+.5)); const k3=p(u,cc+.3,cc+3);
$('curve').setAttribute('stroke-dashoffset',(1-k3).toFixed(3)); $('cdot').setAttribute('cx',(660+760*k3).toFixed(1)); $('cdot').setAttribute('cy',cy3(k3).toFixed(1));
CU.forEach((c,i)=>c.setAttribute('opacity',p(u,cc+.3+i*.22,cc+.5+i*.22)));
rise($('fixed'),p(u,fx,fx+.5)); SLI.forEach((s,i)=>s.setAttribute('opacity',p(u,fx+.4+i*.2,fx+.6+i*.2)));

const ib=TM.iceberg;
rise($('brand'),p(u,TM.apple_logo,TM.apple_logo+.6)); rise($('berg'),p(u,ib,ib+.6));
let wv='M120 520';for(let x=120;x<=1480;x+=40)wv+='L'+x+' '+(520+6*Math.sin(x/60+t*2)).toFixed(1); $('wave4').setAttribute('d',wv);
rise($('hollow'),p(u,ib+.6,ib+1.1)); const wob=p(u,ib+1.6,ib+2.4);
$('hollowA').setAttribute('transform','translate(1300 '+(466+5*Math.sin(t*2+1300/60)).toFixed(1)+') rotate('+(9*wob*Math.sin(t*1.6)).toFixed(1)+')');

const es=TM.ebay_sellers,cf=TM.crowded_field;
rise($('pp'),p(u,TM.paypal_logo,TM.paypal_logo+.5)); rise($('sell'),p(u,es,es+.5));
rise($('need'),p(u,es+4.1,es+4.6)); SL.forEach((s,i)=>{const on=u>=es+4.4+i*.25; s.forEach(e=>e.setAttribute('class',on?'gain':'ink'))});
rise($('crowd'),p(u,cf,cf+.5));
RD.forEach((r,i)=>{r[0].setAttribute('cx',(r[1]+10*Math.sin(t*2+i)).toFixed(1)); r[0].setAttribute('cy',(r[2]+10*Math.cos(t*1.7+i*1.3)).toFixed(1)); r[0].setAttribute('opacity',p(u,cf+.3+i*.06,cf+.5+i*.06))});

const bk=TM.bookshelf,rr=TM.ripple_rings,lr=TM.last_runner;
rise($('shelf'),p(u,bk,bk+.5));
RG.forEach((g,i)=>{const a=i?rr+(i-1)*.7:bk; g.setAttribute('opacity',p(u,a,a+.4)); g.setAttribute('stroke',u>=(i?a+.3:rr)?'var(--gain)':'var(--line)')});
rise($('every'),p(u,rr+2.4,rr+2.9));
rise($('race'),p(u,lr,lr+.5)); $('first').setAttribute('opacity',(1-.75*p(u,lr+1.5,lr+2.5)).toFixed(2));
$('ybar').setAttribute('width',(330*p(u,lr+5.4,lr+7)).toFixed(1)); rise($('years'),p(u,lr+5.4,lr+5.9));

const nb=TM.notebook,tg=TM.target;
rise($('nb'),p(u,nb,nb+.5)); SCR.forEach((s,i)=>s.setAttribute('stroke-dashoffset',(1-p(u,nb+.8+i*1.2,nb+1.8+i*1.2)).toFixed(3)));
rise($('tgt'),p(u,tg,tg+.5)); const ka=p(u,tg+.4,tg+1);
$('arrow').setAttribute('transform','translate('+(120*(1-ka)).toFixed(1)+' '+(-120*(1-ka)).toFixed(1)+')'); $('arrow').setAttribute('opacity',ka.toFixed(2));
TD.forEach((d,i)=>d.setAttribute('class',i<7&&u>=tg+1.4+i*.3?'gain':'ink'));
rise($('tlab'),p(u,tg+2,tg+2.5));

const b8=SC[8][0]/K;
rise($('qa'),p(u,b8+.3,b8+.8)); rise($('qb'),p(u,b8+.7,b8+1.2)); rise($('qc'),p(u,b8+1.1,b8+1.6));
rise($('qg'),p(u,b8+1.5,b8+2)); $('qdot').setAttribute('r',(26+6*Math.sin(t*3)).toFixed(1));
rise($('qd'),p(u,b8+3.8,b8+4.3)); CH8.forEach((c,i)=>rise(c,p(u,b8+4.3+i*.3,b8+4.7+i*.3)));