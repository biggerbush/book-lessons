const a0=p(u,TM.sad_smiler,TM.sad_smiler+1),d0=p(u,TM.sad_smiler+5.8,TM.sad_smiler+6.6);
$('mask').setAttribute('transform','translate(0 '+(260*(1-a0)+320*d0).toFixed(1)+') rotate('+(30*d0).toFixed(1)+' 1360 600)');
$('mask').setAttribute('opacity',(a0*(1-d0)).toFixed(2));

rise($('phone'),p(u,TM.phone_ads-.4,TM.phone_ads));
cards.forEach((c,i)=>rise(c,p(u,TM.phone_ads+.5+i*.7,TM.phone_ads+.9+i*.7)));
rows.forEach((r,i)=>rise(r,p(u,TM.checklist+i*.7,TM.checklist+i*.7+.4)));
xs.forEach((x,i)=>x.setAttribute('opacity',p(u,TM.checklist+5.4+i*.25,TM.checklist+5.7+i*.25).toFixed(2)));
rise($('remind'),p(u,TM.checklist+5.4,TM.checklist+6));

rise($('watts'),p(u,TM.watts,TM.watts+.5));
[TM.arrow_flip,TM.arrow_flip+3.8].forEach((a,i)=>{rise($('bw'+i),p(u,a,a+.4));dr($('ba'+i),p(u,a+.4,a+1.2));
  const f=p(u,a+1,a+1.8);$('br'+i).setAttribute('transform','translate(1290 '+(360+280*i)+') scale('+Math.max(.001,Math.abs(Math.cos(Math.PI*(1-f)))).toFixed(3)+' 1)');
  $('br'+i).setAttribute('opacity',f>0?1:0);rise($('bl'+i),p(u,a+1.6,a+2.1))});

const w3=p(u,TM.money_bag+.4,TM.money_bag+3),hw=60+280*w3,hf=300-220*w3;
$('barW').setAttribute('y',(680-hw).toFixed(1));$('barW').setAttribute('height',hw.toFixed(1));
$('barF').setAttribute('y',(680-hf).toFixed(1));$('barF').setAttribute('height',hf.toFixed(1));
$('bag').setAttribute('transform','translate(300 530) scale('+(1-.35*w3).toFixed(3)+') translate(-300 -530)');
rise($('pL'),p(u,TM.money_bag-.4,TM.money_bag));rise($('pR'),p(u,TM.mirror-.4,TM.mirror));
const m3=p(u,TM.mirror+.6,TM.mirror+3);
$('refl').setAttribute('transform','translate(1280 470) scale('+(1+.3*m3).toFixed(3)+' '+(1-.35*m3).toFixed(3)+')');
$('refl').setAttribute('fill',m3>.5?'var(--loss)':'var(--ink)');
rise($('gapL'),p(u,TM.mirror+6.2,TM.mirror+6.7));rise($('gap3'),p(u,TM.mirror+6.4,TM.mirror+7));

const acc=p(u,TM.spiral+9.9,TM.spiral+10.6),sp=p(u,TM.spiral,TM.spiral+1.5);
rise($('man'),p(u,TM.worried_man,TM.worried_man+.5));
$('worry').setAttribute('transform','translate(300 310) scale('+((.6*p(u,TM.worried_man+.5,TM.worried_man+1.2)+.6*sp)*(1-acc)+.001).toFixed(3)+')');
rise($('pa'),p(u,TM.worried_man+1,TM.worried_man+1.5));rise($('pb'),p(u,TM.spiral,TM.spiral+.5));
dr($('loopA'),p(u,TM.spiral+.3,TM.spiral+1));dr($('loopB'),p(u,TM.spiral+1,TM.spiral+1.7));
$('headA').setAttribute('opacity',p(u,TM.spiral+.7,TM.spiral+1).toFixed(2));
$('headB').setAttribute('opacity',p(u,TM.spiral+1.4,TM.spiral+1.7).toFixed(2));
$('loop').setAttribute('opacity',(1-.7*acc).toFixed(2));
rise($('x2'),p(u,TM.spiral+1.2,TM.spiral+1.7)*(1-acc));
orb.forEach((o,i)=>{const a=t*1.6+i*2.094;o.setAttribute('cx',(950+170*Math.cos(a)).toFixed(1));o.setAttribute('cy',(480+170*Math.sin(a)).toFixed(1));o.setAttribute('opacity',(sp*(1-acc)).toFixed(2))});
rise($('fb'),p(u,TM.spiral+4.5,TM.spiral+5));rise($('exit'),acc);

rise($('poet'),p(u,TM.poet,TM.poet+.5));
lets.forEach((g,i)=>rise(g,p(u,TM.rejections+i*.25,TM.rejections+i*.25+.3)));
rise($('po'),p(u,TM.post_office,TM.post_office+.5));
rise($('tl'),p(u,TM.rejections,TM.rejections+.5));
$('trav').setAttribute('cx',(160+1140*p(u,TM.rejections+.5,TM.post_office+5)).toFixed(1));
rise($('yes'),p(u,TM.post_office+5,TM.post_office+5.6));

books.forEach((b,i)=>rise(b,p(u,TM.book_stack+i*.25,TM.book_stack+i*.25+.3)));
rise($('bkl'),p(u,TM.book_stack+2,TM.book_stack+2.5));
rise($('h0'),p(u,TM.book_stack+3.8,TM.book_stack+4.3));
$('hs').setAttribute('x2',(612+430*p(u,TM.book_stack+5,TM.book_stack+5.6)).toFixed(1));
rise($('h1'),p(u,TM.book_stack+8.4,TM.book_stack+9));rise($('tomb'),p(u,TM.tombstone,TM.tombstone+.6));

// let it be bad: name it, admit it, walk on while the cloud shrinks
const tf=p(u,TM.open_hand,TM.open_hand+.5),wk=p(u,TM.open_hand+.3,TM.open_hand+2.2);
const s0a=TM.rain_cloud+4.2,s1a=Math.min(TM.rain_cloud+5.6,TM.open_hand-.4),s2a=TM.open_hand+.3;
rain.forEach((r,i)=>{const x=330+i*28,y=345+((t*110+i*23)%60);r.setAttribute('d','M'+x+' '+y.toFixed(1)+'v16');r.setAttribute('opacity',(p(u,TM.rain_cloud+.3,TM.rain_cloud+.8)*(1-wk)).toFixed(2))});
rise($('cloud'),p(u,TM.rain_cloud,TM.rain_cloud+.5)*(1-.75*wk));
$('cloudIn').setAttribute('transform','translate(400 300) scale('+(1-.55*wk).toFixed(3)+') translate(-400 -300)');
rise($('tag'),p(u,s0a,s0a+.5)*(1-tf));
rise($('dft'),p(u,TM.rain_cloud+1,TM.rain_cloud+1.5)*(1-tf));
[s0a,s1a,s2a].forEach((a,i)=>{rise($('st'+i),p(u,a,a+.5));$('sc'+i).setAttribute('fill',u>=a+.3?'var(--gain)':'var(--line)')});
rise($('me'),p(u,TM.rain_cloud+.5,TM.rain_cloud+1));
const bob=wk>0&&wk<1?-10*Math.abs(Math.sin(t*9)):0;
$('me').setAttribute('transform','translate('+(460*wk).toFixed(1)+' '+bob.toFixed(1)+')');
$('me').setAttribute('fill',wk>.3?'var(--gain)':'var(--ink)');
dr($('goA'),p(u,TM.open_hand+.2,TM.open_hand+1.4));
$('goH').setAttribute('opacity',p(u,TM.open_hand+1.2,TM.open_hand+1.5).toFixed(2));
rise($('go'),p(u,TM.open_hand+.2,TM.open_hand+.6));
rise($('free'),p(u,TM.open_hand+.8,TM.open_hand+1.4));

// close: the chaser stops chasing "feeling better", lets it go, and acts
const q0=SC[8][0]/K+.3,q1=q0+5,qa=p(u,q1,q1+1),qd=p(u,q1+.4,q1+1.8);
rise($('qa'),p(u,q0,q0+.5));rise($('qb'),p(u,q0+.4,q0+.9));rise($('qc'),p(u,q1,q1+.5));rise($('qd'),p(u,q1+.4,q1+.9));
rise($('ql'),p(u,q1+1.4,q1+1.9));rise($('qg'),p(u,q0,q0+.5));rise($('qact'),p(u,q1+1,q1+1.6));
const sw=Math.sin(t*3)*(1-qa),X=(330+70*(1+sw))*(1-qa)+600*qa;
$('chs').setAttribute('transform','translate('+X.toFixed(1)+' 0) rotate('+(12*(1-qa)).toFixed(1)+' 0 800)');
$('chs').setAttribute('fill',qa>.5?'var(--gain)':'var(--ink)');
const tx=(X+170+30*Math.sin(t*3+1)*(1-qa))*(1-qd)+1100*qd,ty=740-60*qd;
$('tgt').setAttribute('transform','translate('+tx.toFixed(1)+' '+ty.toFixed(1)+')');
$('tgt').setAttribute('opacity',(1-qd).toFixed(2));