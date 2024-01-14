var imgBasePickaxe0=document.getElementById('img0');
var imgBasePickaxe5=document.getElementById('img5');
var imgPickaxe0='mediaFiles/DiamondPickaxe.webp'
var imgFinalPickaxe0='mediaFiles/Bedrock.webp';

function changeBothImagesPickAxe() {
    setTimeout(function() {
        if (imgBasePickaxe0.src.endsWith(imgPickaxe0) && imgBasePickaxe5.src.endsWith(imgPickaxe0)) {
            imgBasePickaxe0.src = imgFinalPickaxe0;
            imgBasePickaxe5.src = imgFinalPickaxe0;
        }
    }, 1000);
}
function toggleClickFunctionalityPickaxe(){
    setTimeout(function(){
        if (imgBasePickaxe0.src.endsWith(imgFinalPickaxe0)&&imgBasePickaxe5.src.endsWith(imgFinalPickaxe0)) {
            imgBasePickaxe0.onclick=null;
            imgBasePickaxe5.onclick=null;
        }else{
            imgBasePickaxe0.onclick=function(){};
            imgBasePickaxe5.onclick=function(){};
        }
    },1000)
    
}

function revealImgPickAxe0(){
    if (imgBasePickaxe0.src.endsWith('mediaFiles/crafting2.jpg')) {
        imgBasePickaxe0.src=imgPickaxe0
    }else{
        imgBasePickaxe0.src='mediaFiles/crafting2.jpg';
    }
    changeBothImagesPickAxe()
    toggleClickFunctionalityPickaxe()
}

function revealImgPickAxe5(){
    if (imgBasePickaxe5.src.endsWith('mediaFiles/crafting2.jpg')) {
        imgBasePickaxe5.src=imgPickaxe0
    }else{
        imgBasePickaxe5.src='mediaFiles/crafting2.jpg';
    }
    changeBothImagesPickAxe()
    toggleClickFunctionalityPickaxe()
}
