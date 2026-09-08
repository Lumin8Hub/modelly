import { chromium } from 'playwright';
import fs from 'node:fs';
const base='http://127.0.0.1:5174/modelly/v2/';
const out='C:/Claude/Projects/Lumin8 Clients/Modelly/_review';
const browser=await chromium.launch({headless:true, executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const page=await browser.newPage();
const widths=[360,390,768,1024,1280,1440]; const results=[];
for(const width of widths){
 await page.setViewportSize({width,height:900}); await page.goto(base,{waitUntil:'networkidle'});
 const r=await page.evaluate(()=>{const els=[...document.querySelectorAll('h1,h2,h3,p,li,a,button,img')]; const vw=innerWidth; const clipped=els.filter(e=>{const b=e.getBoundingClientRect(); return b.width>0&&(b.right>vw+1||b.left<-1||e.scrollWidth>e.clientWidth+1)}).map(e=>({tag:e.tagName,text:(e.textContent||'').trim().slice(0,90)})); return {innerWidth:vw,scrollWidth:document.documentElement.scrollWidth,bodyScrollWidth:document.body.scrollWidth,clipped,desktopMenu:!!document.querySelector('nav[aria-label="Main navigation"]')&&getComputedStyle(document.querySelector('nav[aria-label="Main navigation"]')).display!=='none',menuButton:[...document.querySelectorAll('button')].some(b=>b.textContent.trim()==='Menu'&&getComputedStyle(b).display!=='none')};});
 results.push({width,...r});
 if(width===390||width===1440){await page.screenshot({path:`${out}/v2-home-${width}.png`,fullPage:true});}
}
await page.goto(base+'five-fs',{waitUntil:'networkidle'}); await page.setViewportSize({width:390,height:900}); await page.screenshot({path:`${out}/v2-five-fs-390.png`,fullPage:true});
const fsr=await page.evaluate(()=>({sections:document.querySelectorAll('main section[id]').length,lists:[...document.querySelectorAll('main section[id] ul')].map(x=>x.querySelectorAll('li').length),cta:[...document.querySelectorAll('h2')].filter(x=>x.textContent.includes('Start with a diagnostic')).length}));
console.log(JSON.stringify({results,fsr})); await browser.close();
