
const msg=`Hey Shravani,

I know it was only a few minutes, but I understand that it still made you feel ignored.

I'm really sorry.

You've always deserved better communication from me, and I regret making you feel otherwise.

I don't expect this little website to fix everything. I just wanted to show that I genuinely care about our friendship and wanted to put in a little extra effort instead of sending a simple 'sorry'.

If you're willing, I'd really like the chance to make things right.

— Rajan 💙`;
let i=0,out=document.getElementById("text");
(function type(){if(i<msg.length){out.textContent+=msg[i++];setTimeout(type,28);}})();
document.getElementById("btn").onclick=()=>{
for(let i=0;i<50;i++){
let h=document.createElement("div");
h.className="heart";h.textContent=Math.random()>.5?"💙":"🥺";
h.style.left=Math.random()*100+"vw";
document.body.appendChild(h);
setTimeout(()=>h.remove(),4000);
}
this.disabled=true;
};
