

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3877682d-d394-40f9-86c2-ec6717381657","54921d71-7d06-4c6f-8eeb-7653d66def45","3b7e11c4-da1e-42dd-89c2-d79fe83aceb6"],"propsByKey":{"3877682d-d394-40f9-86c2-ec6717381657":{"name":"diamante","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":4,"looping":true,"frameDelay":12,"version":"x07mMi_VMQnnIb48Gu3bjUwwQ7gjMJIU","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":256},"rootRelativePath":"assets/3877682d-d394-40f9-86c2-ec6717381657.png"},"54921d71-7d06-4c6f-8eeb-7653d66def45":{"name":"ladron.","sourceUrl":"assets/v3/animations/ayfe5PcY8mOn_zs-Za-XawxUrqPNp03mhbz360KrqSA/54921d71-7d06-4c6f-8eeb-7653d66def45.png","frameSize":{"x":612,"y":612},"frameCount":1,"looping":true,"frameDelay":4,"version":"Ff1n4W9WT9Fx0aDnwruUcgePcDbRLVSO","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":612,"y":612},"rootRelativePath":"assets/v3/animations/ayfe5PcY8mOn_zs-Za-XawxUrqPNp03mhbz360KrqSA/54921d71-7d06-4c6f-8eeb-7653d66def45.png"},"3b7e11c4-da1e-42dd-89c2-d79fe83aceb6":{"name":"ladron","sourceUrl":"assets/api/v1/animation-library/gamelab/3OPR7fNp2GuC01rgoimtapzXeAYybc.O/category_retro/retrocreature_03.png","frameSize":{"x":398,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"3OPR7fNp2GuC01rgoimtapzXeAYybc.O","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3OPR7fNp2GuC01rgoimtapzXeAYybc.O/category_retro/retrocreature_03.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var laser1, laser2, edges;
var treasure, thief;
function setup() {
  diamondBox = createSprite(380,18,30,30);
  diamondBox.shapeColor="blue";
  diamondBox.setAnimation("diamante")
  diamondBox.scale=0.5
  thief=createSprite(30,375,30,30);
  thief.setAnimation("ladron")
  thief.scale=0.1
  laser1=createSprite(100,150,200,5);
    laser1.shapeColor = "red";
    laser1.velocityX=8;
  laser2=createSprite(300,225,200,5)
    laser2.shapeColor="red";
    laser2.velocityX=-8
  edges = createEdgeSprites();
 
}
function draw() {
  background("white");
  
  fill("white");

    drawSprites();
  laser1.bounceOff(leftEdge)
  laser1.bounceOff(rightEdge);
  laser2.bounceOff(leftEdge)
  laser2.bounceOff(rightEdge)
  thief.bounceOff(laser1)
  thief.bounceOff(laser2)
  laser1.bounceOff(thief)
  laser2.bounceOff(thief)
  thief.bounceOff(topEdge)
  thief.bounceOff(rightEdge)
  thief.bounceOff(leftEdge)
  thief.bounceOff(bottomEdge)
  bounceOff = createEdgeSprites();
  if(keyDown(RIGHT_ARROW)){
    thief.velocityX=2
    thief.velocityY=0
  }
  if(keyDown(LEFT_ARROW)){
    thief.velocityX=-2
    thief.velocityY=0
  }
  if(keyDown(UP_ARROW)){
    thief.velocityX=0
    thief.velocityY=-2
  }
  if(keyDown(DOWN_ARROW)){
    thief.velocityX=0
    thief.velocityY=2
  }
  if(thief.isTouching(diamondBox)){
    stroke(0)
  fill(0)
  textSize(24)
  text("El ladrón consigio el diamante😓",25,200);
  laser1.velocityX=0;
  laser2.velocityX=0;
  thief.velocityY=0;
  thief.velocityX=0;
  }
  
  
  if(laser1.isTouching(thief)||laser2.isTouching(thief)){
  stroke(0)
  fill(0)
  textSize(24)
  text("Atrapa al ladrón",120,200);
  laser1.velocityX=0;
  laser2.velocityX=0;
  thief.velocityY=0;
  thief.velocityX=0;
  } 
}
             
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
