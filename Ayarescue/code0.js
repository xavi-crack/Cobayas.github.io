gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDPlayButtonObjects1= [];
gdjs.menuCode.GDPlayButtonObjects2= [];
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];
gdjs.menuCode.GDNewSprite2Objects1= [];
gdjs.menuCode.GDNewSprite2Objects2= [];
gdjs.menuCode.GDNewSprite3Objects1= [];
gdjs.menuCode.GDNewSprite3Objects2= [];
gdjs.menuCode.GDNewSprite4Objects1= [];
gdjs.menuCode.GDNewSprite4Objects2= [];
gdjs.menuCode.GDNewSprite5Objects1= [];
gdjs.menuCode.GDNewSprite5Objects2= [];
gdjs.menuCode.GDNewSprite6Objects1= [];
gdjs.menuCode.GDNewSprite6Objects2= [];
gdjs.menuCode.GDPintorTransicionObjects1= [];
gdjs.menuCode.GDPintorTransicionObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.menuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDPlayButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDPlayButtonObjects1[k] = gdjs.menuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PintorTransicion"), gdjs.menuCode.GDPintorTransicionObjects1);
{for(var i = 0, len = gdjs.menuCode.GDPintorTransicionObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDPintorTransicionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 255, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PintorTransicion"), gdjs.menuCode.GDPintorTransicionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDPintorTransicionObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDPintorTransicionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDPintorTransicionObjects1[k] = gdjs.menuCode.GDPintorTransicionObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDPintorTransicionObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel", false);
}
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDPlayButtonObjects1.length = 0;
gdjs.menuCode.GDPlayButtonObjects2.length = 0;
gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewSprite2Objects1.length = 0;
gdjs.menuCode.GDNewSprite2Objects2.length = 0;
gdjs.menuCode.GDNewSprite3Objects1.length = 0;
gdjs.menuCode.GDNewSprite3Objects2.length = 0;
gdjs.menuCode.GDNewSprite4Objects1.length = 0;
gdjs.menuCode.GDNewSprite4Objects2.length = 0;
gdjs.menuCode.GDNewSprite5Objects1.length = 0;
gdjs.menuCode.GDNewSprite5Objects2.length = 0;
gdjs.menuCode.GDNewSprite6Objects1.length = 0;
gdjs.menuCode.GDNewSprite6Objects2.length = 0;
gdjs.menuCode.GDPintorTransicionObjects1.length = 0;
gdjs.menuCode.GDPintorTransicionObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDPlayButtonObjects1.length = 0;
gdjs.menuCode.GDPlayButtonObjects2.length = 0;
gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewSprite2Objects1.length = 0;
gdjs.menuCode.GDNewSprite2Objects2.length = 0;
gdjs.menuCode.GDNewSprite3Objects1.length = 0;
gdjs.menuCode.GDNewSprite3Objects2.length = 0;
gdjs.menuCode.GDNewSprite4Objects1.length = 0;
gdjs.menuCode.GDNewSprite4Objects2.length = 0;
gdjs.menuCode.GDNewSprite5Objects1.length = 0;
gdjs.menuCode.GDNewSprite5Objects2.length = 0;
gdjs.menuCode.GDNewSprite6Objects1.length = 0;
gdjs.menuCode.GDNewSprite6Objects2.length = 0;
gdjs.menuCode.GDPintorTransicionObjects1.length = 0;
gdjs.menuCode.GDPintorTransicionObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
