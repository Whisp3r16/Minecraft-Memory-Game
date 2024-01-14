// ---Pickaxe Variables----
var imgBasePickaxe0=document.getElementById('img0');
var imgBasePickaxe5=document.getElementById('img5');
var imgPickaxe0='mediaFiles/DiamondPickaxe.webp'
var imgFinalPickaxe0='mediaFiles/Bedrock.webp';

// ---Sword Variables----
var imgBaseSword1=document.getElementById('img1');
var imgBaseSword4=document.getElementById('img4');
var imgSword0='mediaFiles/DiamondSword.webp'
var imgFinal='mediaFiles/Bedrock.webp';

//----Axe variables-----
var imgBaseAxe6=document.getElementById('img6');
var imgBaseAxe7=document.getElementById('img7');
var imgAxe0='mediaFiles/DiamondAxe.webp'
var imgFinalAxe='mediaFiles/Bedrock.webp';

//----Diamond Variables
var imgBaseDiamond1=document.getElementById('img2');
var imgBaseDiamond4=document.getElementById('img3');
var imgDiamond0='mediaFiles/Diamond.webp'
var imgFinalDiamond = 'mediaFiles/Bedrock.webp';

//--TNT variables
 var imgbaseTnt=document.getElementById('img8');
 var imgTnt='mediaFiles/Bedrock.webp';
 var imgBedrock='mediaFiles/Bedrock.webp';

//

document.addEventListener('click', function (event) {
    if (todasLasImagenesTerminanConValorEspecifico()) {
        // Si no todas las imágenes terminan con el valor específico, prevenir el clic
        event.preventDefault();
    }
}, false);

//----Diamond functions
function changeBothImagesDiamond() {
    setTimeout(function() {
        if (imgBaseDiamond1.src.endsWith(imgDiamond0) && imgBaseDiamond4.src.endsWith(imgDiamond0)) {
            imgBaseDiamond1.src = imgFinal;
            imgBaseDiamond4.src = imgFinal;
        }
    }, 1000);
}

function revealImgDiamond2(){
    if (imgBaseDiamond1.src.endsWith('mediaFiles/crafting2.jpg')) {
        imgBaseDiamond1.src=imgDiamond0
    }else{
        imgBaseDiamond1.src='mediaFiles/crafting2.jpg';
    }
    changeBothImagesDiamond()
   
}

function revealImgDiamond3(){
    if (imgBaseDiamond4.src.endsWith('mediaFiles/crafting2.jpg')) {
        imgBaseDiamond4.src=imgDiamond0
    }else{
        imgBaseDiamond4.src='mediaFiles/crafting2.jpg';
    }
    changeBothImagesDiamond()
   
    
}

//---Axe functions----------

function changeBothImagesAxe() {
    setTimeout(function() {
        if (imgBaseAxe6.src.endsWith(imgAxe0) && imgBaseAxe7.src.endsWith(imgAxe0)) {
            imgBaseAxe6.src = imgFinalAxe;
            imgBaseAxe7.src = imgFinalAxe;
        }
    }, 1000);
}

function revealImgAxe6(){
    if (imgBaseAxe6.src.endsWith('mediaFiles/crafting2.jpg')) {
        imgBaseAxe6.src=imgAxe0
    }else{
        imgBaseAxe6.src='mediaFiles/crafting2.jpg';
    }
    changeBothImagesAxe()
  
}

function revealImgAxe7(){
    if (imgBaseAxe7.src.endsWith('mediaFiles/crafting2.jpg')) {
        imgBaseAxe7.src=imgAxe0
    }else{
        imgBaseAxe7.src='mediaFiles/crafting2.jpg';
    }
    changeBothImagesAxe()
    
}

//---Sword functions----------
function changeBothImagesSword() {
    setTimeout(function() {
        if (imgBaseSword1.src.endsWith(imgSword0) && imgBaseSword4.src.endsWith(imgSword0)) {
            imgBaseSword1.src = imgFinal;
            imgBaseSword4.src = imgFinal;
        }
    }, 1000);
}

function revealImgSword1(){
    if (imgBaseSword1.src.endsWith('mediaFiles/crafting2.jpg')) {
        imgBaseSword1.src=imgSword0
    }else{
        imgBaseSword1.src='mediaFiles/crafting2.jpg';
    }
    changeBothImagesSword()
    toggleClickFunctionalitySword()
}

function revealImgSword4(){
    if (imgBaseSword4.src.endsWith('mediaFiles/crafting2.jpg')) {
        imgBaseSword4.src=imgSword0
    }else{
        imgBaseSword4.src='mediaFiles/crafting2.jpg';
    }
    changeBothImagesSword()
    toggleClickFunctionalitySword()
}

//---Pickaxe functions----------
function changeBothImagesPickAxe() {
    setTimeout(function() {
        if (imgBasePickaxe0.src.endsWith(imgPickaxe0) && imgBasePickaxe5.src.endsWith(imgPickaxe0)) {
            imgBasePickaxe0.src = imgFinalPickaxe0;
            imgBasePickaxe5.src = imgFinalPickaxe0;
        }
    }, 1000);
}

//inabilitar click

function revealImgPickAxe0(){
    if (imgBasePickaxe0.src.endsWith('mediaFiles/crafting2.jpg')) {
        imgBasePickaxe0.src=imgPickaxe0
    }else{
        imgBasePickaxe0.src='mediaFiles/crafting2.jpg';
    }
    changeBothImagesPickAxe()
   
}

function revealImgPickAxe5(){
    if (imgBasePickaxe5.src.endsWith('mediaFiles/crafting2.jpg')) {
        imgBasePickaxe5.src=imgPickaxe0
    }else{
        imgBasePickaxe5.src='mediaFiles/crafting2.jpg';
    }
    changeBothImagesPickAxe()
   
}

function revealImgTnt(){
    if (imgbaseTnt.src.endsWith('mediaFiles/crafting2.jpg')) {
        imgbaseTnt.src=imgTnt;
    }else{
        imgbaseTnt.src='mediaFiles/crafting2.jpg';
    }
}

