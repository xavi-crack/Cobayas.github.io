gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.idToCallbackMap = new Map();
gdjs.GameOverCode.GDGameOverTextObjects1= [];
gdjs.GameOverCode.GDGameOverTextObjects2= [];
gdjs.GameOverCode.GDReiniciar_9595Objects1= [];
gdjs.GameOverCode.GDReiniciar_9595Objects2= [];
gdjs.GameOverCode.GDRetryButton2Objects1= [];
gdjs.GameOverCode.GDRetryButton2Objects2= [];
gdjs.GameOverCode.GDNewSpriteObjects1= [];
gdjs.GameOverCode.GDNewSpriteObjects2= [];
gdjs.GameOverCode.GDNewSprite2Objects1= [];
gdjs.GameOverCode.GDNewSprite2Objects2= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameOverText"), gdjs.GameOverCode.GDGameOverTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Reiniciar_"), gdjs.GameOverCode.GDReiniciar_9595Objects1);
{for(var i = 0, len = gdjs.GameOverCode.GDGameOverTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDGameOverTextObjects1[i].getBehavior("Text").setText("GAME OVER" + gdjs.evtTools.string.newLine() + "Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("FinalScore"))));
}
}
{for(var i = 0, len = gdjs.GameOverCode.GDReiniciar_9595Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDReiniciar_9595Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameOverCode.GDReiniciar_9595Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDReiniciar_9595Objects1[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Reiniciar_"), gdjs.GameOverCode.GDReiniciar_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDReiniciar_9595Objects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDReiniciar_9595Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDReiniciar_9595Objects1[k] = gdjs.GameOverCode.GDReiniciar_9595Objects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDReiniciar_9595Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RetryButton2"), gdjs.GameOverCode.GDRetryButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDRetryButton2Objects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDRetryButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDRetryButton2Objects1[k] = gdjs.GameOverCode.GDRetryButton2Objects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDRetryButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGameOverTextObjects1.length = 0;
gdjs.GameOverCode.GDGameOverTextObjects2.length = 0;
gdjs.GameOverCode.GDReiniciar_9595Objects1.length = 0;
gdjs.GameOverCode.GDReiniciar_9595Objects2.length = 0;
gdjs.GameOverCode.GDRetryButton2Objects1.length = 0;
gdjs.GameOverCode.GDRetryButton2Objects2.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverCode.GDNewSprite2Objects1.length = 0;
gdjs.GameOverCode.GDNewSprite2Objects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDGameOverTextObjects1.length = 0;
gdjs.GameOverCode.GDGameOverTextObjects2.length = 0;
gdjs.GameOverCode.GDReiniciar_9595Objects1.length = 0;
gdjs.GameOverCode.GDReiniciar_9595Objects2.length = 0;
gdjs.GameOverCode.GDRetryButton2Objects1.length = 0;
gdjs.GameOverCode.GDRetryButton2Objects2.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverCode.GDNewSprite2Objects1.length = 0;
gdjs.GameOverCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
