gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.idToCallbackMap = new Map();
gdjs.winCode.GDMenuButtonObjects1= [];
gdjs.winCode.GDMenuButtonObjects2= [];
gdjs.winCode.GDNewSpriteObjects1= [];
gdjs.winCode.GDNewSpriteObjects2= [];
gdjs.winCode.GDNewSprite2Objects1= [];
gdjs.winCode.GDNewSprite2Objects2= [];
gdjs.winCode.GDNewSprite3Objects1= [];
gdjs.winCode.GDNewSprite3Objects2= [];
gdjs.winCode.GDNewSprite4Objects1= [];
gdjs.winCode.GDNewSprite4Objects2= [];
gdjs.winCode.GDNewSprite5Objects1= [];
gdjs.winCode.GDNewSprite5Objects2= [];
gdjs.winCode.GDNewSprite6Objects1= [];
gdjs.winCode.GDNewSprite6Objects2= [];
gdjs.winCode.GDnew_9595winObjects1= [];
gdjs.winCode.GDnew_9595winObjects2= [];
gdjs.winCode.GDNewSprite7Objects1= [];
gdjs.winCode.GDNewSprite7Objects2= [];
gdjs.winCode.GDlogo1Objects1= [];
gdjs.winCode.GDlogo1Objects2= [];
gdjs.winCode.GDNewShapePainterObjects1= [];
gdjs.winCode.GDNewShapePainterObjects2= [];


gdjs.winCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.winCode.GDNewShapePainterObjects1);
{for(var i = 0, len = gdjs.winCode.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.winCode.GDNewShapePainterObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Backward", 255, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.winCode.GDMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.winCode.GDMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.winCode.GDMenuButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.winCode.GDMenuButtonObjects1[k] = gdjs.winCode.GDMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.winCode.GDMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.winCode.GDMenuButtonObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}
{for(var i = 0, len = gdjs.winCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.winCode.GDMenuButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDMenuButtonObjects1.length = 0;
gdjs.winCode.GDMenuButtonObjects2.length = 0;
gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;
gdjs.winCode.GDNewSprite2Objects1.length = 0;
gdjs.winCode.GDNewSprite2Objects2.length = 0;
gdjs.winCode.GDNewSprite3Objects1.length = 0;
gdjs.winCode.GDNewSprite3Objects2.length = 0;
gdjs.winCode.GDNewSprite4Objects1.length = 0;
gdjs.winCode.GDNewSprite4Objects2.length = 0;
gdjs.winCode.GDNewSprite5Objects1.length = 0;
gdjs.winCode.GDNewSprite5Objects2.length = 0;
gdjs.winCode.GDNewSprite6Objects1.length = 0;
gdjs.winCode.GDNewSprite6Objects2.length = 0;
gdjs.winCode.GDnew_9595winObjects1.length = 0;
gdjs.winCode.GDnew_9595winObjects2.length = 0;
gdjs.winCode.GDNewSprite7Objects1.length = 0;
gdjs.winCode.GDNewSprite7Objects2.length = 0;
gdjs.winCode.GDlogo1Objects1.length = 0;
gdjs.winCode.GDlogo1Objects2.length = 0;
gdjs.winCode.GDNewShapePainterObjects1.length = 0;
gdjs.winCode.GDNewShapePainterObjects2.length = 0;

gdjs.winCode.eventsList0(runtimeScene);
gdjs.winCode.GDMenuButtonObjects1.length = 0;
gdjs.winCode.GDMenuButtonObjects2.length = 0;
gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;
gdjs.winCode.GDNewSprite2Objects1.length = 0;
gdjs.winCode.GDNewSprite2Objects2.length = 0;
gdjs.winCode.GDNewSprite3Objects1.length = 0;
gdjs.winCode.GDNewSprite3Objects2.length = 0;
gdjs.winCode.GDNewSprite4Objects1.length = 0;
gdjs.winCode.GDNewSprite4Objects2.length = 0;
gdjs.winCode.GDNewSprite5Objects1.length = 0;
gdjs.winCode.GDNewSprite5Objects2.length = 0;
gdjs.winCode.GDNewSprite6Objects1.length = 0;
gdjs.winCode.GDNewSprite6Objects2.length = 0;
gdjs.winCode.GDnew_9595winObjects1.length = 0;
gdjs.winCode.GDnew_9595winObjects2.length = 0;
gdjs.winCode.GDNewSprite7Objects1.length = 0;
gdjs.winCode.GDNewSprite7Objects2.length = 0;
gdjs.winCode.GDlogo1Objects1.length = 0;
gdjs.winCode.GDlogo1Objects2.length = 0;
gdjs.winCode.GDNewShapePainterObjects1.length = 0;
gdjs.winCode.GDNewShapePainterObjects2.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;
