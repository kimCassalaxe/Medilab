let imagens=[
  "/img/departments-1.jpg",
  "/img/departments-2.jpg",
  "/img/departments-3.jpg",
  "/img/departments-4.jpg",
  "/img/departments-5.jpg"
];
let titulos=[
  "Cardiology",
  "Et blanditiis nemo veritatis excepturi",
  "Impedit facilis occaecati odio neque aperiam sit",
  "Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore",
  "Est eveniet ipsam sindera pad rone matrelat sando reda"
  ];
let paragrafo1=[
  "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
  "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
  "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut",
  "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
  "Omnis blanditiis saepe eos autem qui sunt debitis porro quia."
];
let paragrafo2=[
  "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
  "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal",
  "Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae",
  "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
  "Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel"
];
 function criar(typeDepartament,i){
  let h3 = document.createElement('h3');
    h3.innerHTML=titulos[i];
    let p1 = document.createElement('p');
    p1.setAttribute("class","p1");
    p1.innerHTML=paragrafo1[i];
    let p2 = document.createElement('p');
    p2.setAttribute("class","p2");
    p2.innerHTML=paragrafo2[i];
    let img = document.createElement('img');
    img.src=imagens[i];
    typeDepartament.appendChild(img);
    typeDepartament.appendChild(h3);
    typeDepartament.appendChild(p1);
    typeDepartament.appendChild(p2);
 }
function removerElementos(typeDepartament){ 
  for (let elemento=1;elemento < 5; elemento++) {
    typeDepartament.lastChild.remove();
  }
}

document.getElementById("Cardiology").addEventListener('click',d);
document.getElementById("Neurology").addEventListener('click',d1);
document.getElementById("Hepatology").addEventListener('click',d2);
document.getElementById("Padiatrics").addEventListener('click',d3);
document.getElementById("Eye_Care").addEventListener('click',d4);
//document.getElementById("DepartmentsDescrition").addEventListener('load',d);

let typeDepartament= document.getElementById("typeDepartament"); 
function d(){ 
  if(typeDepartament.childElementCount==0){
    criar(typeDepartament,0);
  }
  if(typeDepartament.lastChild.src.endsWith("1.jpg")!= true){
    removerElementos(typeDepartament);
    criar(typeDepartament,0);
  }
  
}
function d1(){
  if(typeDepartament.childElementCount==0){
    console.log(typeDepartament.lastElementChild);
    criar(typeDepartament,1);
  }
  if(typeDepartament.lastChild.src.endsWith("2.jpg")!= true){
    removerElementos(typeDepartament);
    criar(typeDepartament,1);
  }
}
function d2(){
  if(typeDepartament.childElementCount==0){
    criar(typeDepartament,2);
  }
  if(typeDepartament.lastChild.src.endsWith("3.jpg")!= true){
    removerElementos(typeDepartament);
    criar(typeDepartament,2);
  }
}
function d3(){
  if(typeDepartament.childElementCount==0){
    console.log(typeDepartament.lastElementChild);
    criar(typeDepartament,3);
  }
  if(typeDepartament.lastChild.src.endsWith("4.jpg")!= true){
    removerElementos(typeDepartament);
    criar(typeDepartament,3);
  }
}
function d4(){
  if(typeDepartament.childElementCount==0){
    criar(typeDepartament,4);
  }
  if(typeDepartament.lastChild.src.endsWith("5.jpg")!= true){
    removerElementos(typeDepartament);
    criar(typeDepartament,4);
  }
}



document.getElementById("down").addEventListener('click',a);
function a(){
  let p = document.getElementById("PResp");
  p.style.display == "none"?p.style.display= "block":p.style.display= "none";
}
/**
 * fazer desaparecer os contact do header
 */
let bar = document.getElementById("header");
window.addEventListener('scroll',e);
function e(){
  if(window.scrollY < 44){
    bar.style.display ="flex";
    console.log("pooss");
  }
  if(window.scrollY > 44){
    bar.style.display ="none";
    console.log("pooss");
  }
}

/***
 * 
 * gallery
 */

function ww(){
document.querySelectorAll(".element").forEach((element,index)=>{
  if(element.getBoundingClientRect().top < window.innerHeight){
    console.log('apareceu',index);
    element.src = element.getAttribute('data-src');
  }
  else{
    
    element.dataSrc = element.getAttribute('src');
  }
});
}
window.addEventListener('scroll',ww);