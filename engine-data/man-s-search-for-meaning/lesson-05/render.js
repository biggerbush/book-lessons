const dw=p(u,TM.title_door,TM.title_door+1.6);
  $('dp').setAttribute('width',(160-136*dw).toFixed(1)); $('glow').setAttribute('opacity',dw.toFixed(2));
  $('walker').setAttribute('transform','translate('+(1110+80*p(u,TM.title_door+.8,TM.title_door+3)).toFixed(1)+' '+(428-3*Math.abs(Math.sin(t*3))).toFixed(1)+')');

  rise($('nz'),p(u,TM.nietzsche,TM.nietzsche+.5)); rise($('qc'),p(u,TM.quote_card,TM.quote_card+.5)); rise($('why'),p(u,TM.quote_card+.6,TM.quote_card+1.1));
  const lv=p(u,TM.quote_card+1,TM.quote_card+2.2);
  $('beam').setAttribute('transform','rotate('+(-10*(1-lv)+lv*1.2*Math.sin(t*1.6)).toFixed(2)+' 800 740)');
  rise($('camps'),p(u,TM.quote_card+5.8,TM.quote_card+6.4));

  rise($('trade'),p(u,TM.cigarettes,TM.cigarettes+.5)); rise($('bunk'),p(u,TM.bunk,TM.bunk+.5)); rise($('look'),p(u,TM.bunk+.8,TM.bunk+1.3));
  const dm=p(u,TM.dim_figure,TM.dim_figure+1.2); $('man').setAttribute('opacity',(1-.75*dm).toFixed(2));
  let sm='M972 392'; for(let k=1;k<=8;k++)sm+='L'+(972+10*Math.sin(t*2+k*.9)*k/4).toFixed(1)+' '+(392-k*14);
  $('smoke').setAttribute('d',sm); $('smoke').setAttribute('opacity',(1-dm).toFixed(2)); rise($('gone'),p(u,TM.dim_figure+.3,TM.dim_figure+.9));

  rise($('men'),p(u,TM.two_men,TM.two_men+.5));
  rise($('ch'),p(u,TM.child_abroad,TM.child_abroad+.5)); $('th0').setAttribute('x2',(330+890*p(u,TM.child_abroad+.4,TM.child_abroad+1.6)).toFixed(1));
  rise($('bk'),p(u,TM.books_stack,TM.books_stack+.5)); $('th1').setAttribute('x2',(330+830*p(u,TM.books_stack+.4,TM.books_stack+1.6)).toFixed(1));
  const hd=u>=TM.books_stack+5; MEN.forEach(m=>m.forEach(e=>e.setAttribute('class',hd?'gain':'loss')));
  [0,1].forEach(i=>{const n=$('n'+i); rise(n,p(u,TM.two_men+.6,TM.two_men+1.1)); n.textContent=hd?'HAS A REASON TO HOLD ON':'EXPECTS NOTHING'; n.style.fill=hd?'var(--gain)':'var(--loss)'});
  rise($('hold'),p(u,TM.books_stack+5,TM.books_stack+5.6));

  rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); rise($('hf'),p(u,TM.calendar+.6,TM.calendar+1.1)); rise($('res'),p(u,TM.calendar+1.2,TM.calendar+1.7));
  const m3=u>=TM.march_31, fd=p(u,TM.march_31,TM.march_31+1.2);
  $('cnum').textContent='30'; $('cnum').style.fill=m3?'var(--loss)':'var(--ink)';
  $('sun').setAttribute('cy',(300+6*Math.sin(t*2)+60*fd).toFixed(1)); $('sun').setAttribute('opacity',(p(u,TM.calendar+.6,TM.calendar+1.1)*(1-fd)).toFixed(2));
  HF.forEach(e=>{e.setAttribute('class',m3?'loss':'ink'); e.setAttribute('fill-opacity',(1-.5*fd).toFixed(2))});
  $('rbar').setAttribute('width',(500*(1-.8*p(u,TM.march_31+5.8,TM.march_31+7.5))).toFixed(1));
  rise($('fell'),p(u,TM.march_31+.6,TM.march_31+1.2)); rise($('frb'),p(u,TM.march_31+5.8,TM.march_31+6.4));

  rise($('chart'),p(u,TM.christmas,TM.christmas+.5));
  BR.forEach(([r,h],i)=>{const k=i===5?p(u,TM.christmas+1.5,TM.christmas+2.8):p(u,TM.christmas+.3+i*.1,TM.christmas+.8+i*.1); r.setAttribute('y',(640-h*k).toFixed(1)); r.setAttribute('height',(h*k).toFixed(1))});
  rise($('xl'),p(u,TM.christmas+2.4,TM.christmas+2.9));
  rise($('home'),p(u,TM.home_house,TM.home_house+.5)); rise($('pr'),p(u,TM.home_house,TM.home_house+.5));
  const lk=p(u,TM.home_house+.6,TM.home_house+1.1), br=p(u,TM.broken_link,TM.broken_link+.8);
  ['l0','l1'].forEach((id,i)=>{const e=$(id); e.setAttribute('opacity',lk.toFixed(2)); e.setAttribute('transform','rotate('+((i?-1:1)*30*br).toFixed(1)+' '+(i?1190:1045)+' 510)'); e.style.stroke=br>0?'var(--loss)':'var(--gain)'});
  $('hbody').style.fill=br>0?'var(--stage)':'var(--gain)';
  rise($('coll'),p(u,TM.broken_link+.4,TM.broken_link+1));

  rise($('ms'),p(u,TM.manuscript,TM.manuscript+.5)); const tk=p(u,TM.manuscript+2.4,TM.manuscript+3);
  $('msi').setAttribute('opacity',(1-.7*tk).toFixed(2)); $('msx').setAttribute('opacity',tk.toFixed(2)); $('taken').setAttribute('opacity',tk.toFixed(2));
  rise($('pg'),p(u,TM.paper_scraps,TM.paper_scraps+.4));
  SCR.forEach((g,i)=>rise(g,p(u,TM.paper_scraps+i*.3,TM.paper_scraps+i*.3+.4)));
  rise($('dir'),p(u,TM.paper_scraps+5,TM.paper_scraps+5.6));

  rise($('flag'),p(u,TM.arrow_ahead,TM.arrow_ahead+.5));
  const fx=300+460*p(u,TM.arrow_ahead+.3,TM.arrow_ahead+5);
  $('pw').setAttribute('transform','translate('+fx.toFixed(1)+' '+(531-3*Math.abs(Math.sin(t*3))).toFixed(1)+')');
  $('rope').setAttribute('x1',(fx+40).toFixed(1)); $('rope').setAttribute('opacity',p(u,TM.arrow_ahead+.4,TM.arrow_ahead+.9).toFixed(2));
  rise($('ng'),p(u,TM.arrow_ahead+5.8,TM.arrow_ahead+6.4)); rise($('sign'),p(u,TM.signpost,TM.signpost+.6));

  rise($('qa'),p(u,TM.your_why,TM.your_why+.5)); rise($('qb'),p(u,TM.your_why+.4,TM.your_why+.9)); rise($('qc8'),p(u,TM.your_why+.8,TM.your_why+1.3));
  rise($('wdn'),p(u,TM.your_why+5,TM.your_why+5.5)); rise($('card'),p(u,TM.your_why+5,TM.your_why+5.5));
  $('w0').setAttribute('width',(220*p(u,TM.your_why+5.5,TM.your_why+6.5)).toFixed(1)); $('w1').setAttribute('width',(150*p(u,TM.your_why+6.4,TM.your_why+7.2)).toFixed(1));