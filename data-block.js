/*
Lucid Generated Code
*/
function lucidDebug(uid,event) {
	try{
event.allAttributes_Lucid = "";
 for(var propertyName in event) {event.allAttributes_Lucid += propertyName+",";}		window.LucidWebPreviewDelegate.javascriptFunctionEntered_withEvent_(uid,event);
	} catch(err) { }
}


function lucidLog(uid,value) {
	try{
		console.log(value);
		window.LucidWebPreviewDelegate.lucidLog_withValue_(uid,value);
	} catch(err) { }
}




$(document).ready(function() {


//Lucid_LucidBinding_0_23_994611877429108491776321611
/*lucidcode*/
$(/*luc!d_element*/document/*luc!d_element_end*/).bind(/*luc!d_event*/'ready'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('994611877429108491776321611',event);/*luc!d_debug_end*/
	/*luc!d_function*/dataProcessor(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid


});

//Lucid_LucidDataAction_48_188_906496459826777921716404714
function dataProcessor(senderObject, event) {
	lucidDebug('906496459826777921716404714',event);
/*lucidcode*/
    /*luc!d_variable*/event.colorText/*luc!d_variable_end*/ = /*luc!d_data*/[["This is a Red Box"],["This is a Green Box"],["This is a Blue Box"]]/*luc!d_data_end*/;
    /*luc!d_callback*/myTimer(senderObject,event);/*luc!d_callback_end*/
    /*lucidcode_end*/


}
//EndLucid

//Lucid_LucidJQueryDOMInsertAction_48_330_28847030614498416632139371179
function insertToRedBox(senderObject, event) {
	lucidDebug('28847030614498416632139371179',event);
/*lucidcode*/
    $(/*luc!d_element*/'DIV.#redbox'/*luc!d_element_end*/)./*luc!d_functiontype*/text/*luc!d_functiontype_end*/(/*luc!d_code*/"" + event.colorText[0]/*luc!d_code_end*/);
    /*lucidcode_end*/

/*luc!d_callback*/myTimer_1(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidJQueryDOMInsertAction_48_496_192489498420163376801295438100
function insertToGreenBox(senderObject, event) {
	lucidDebug('192489498420163376801295438100',event);
/*lucidcode*/
    $(/*luc!d_element*/'DIV.#greenbox'/*luc!d_element_end*/)./*luc!d_functiontype*/text/*luc!d_functiontype_end*/(/*luc!d_code*/"" + event.colorText[1]/*luc!d_code_end*/);
    /*lucidcode_end*/

/*luc!d_callback*/myTimer_2(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidTimeoutAction_48_269_11344509611357483461358263299
function myTimer(senderObject, event) {
	lucidDebug('11344509611357483461358263299',event);
/*lucidcode*/
    var delayFunction = function() { /*luc!d_callback*/insertToRedBox(senderObject,event);/*luc!d_callback_end*/ };
    setTimeout(delayFunction,/*luc!d_delay*/1000/*luc!d_delay_end*/);
    /*lucidcode_end*/


}
//EndLucid

//Lucid_LucidTimeoutAction_48_429_79663261215912544861600290111
function myTimer_1(senderObject, event) {
	lucidDebug('79663261215912544861600290111',event);
/*lucidcode*/
    var delayFunction = function() { /*luc!d_callback*/insertToGreenBox(senderObject,event);/*luc!d_callback_end*/ };
    setTimeout(delayFunction,/*luc!d_delay*/1000/*luc!d_delay_end*/);
    /*lucidcode_end*/


}
//EndLucid

//Lucid_LucidTimeoutAction_48_595_12745219801889022682405979126
function myTimer_2(senderObject, event) {
	lucidDebug('12745219801889022682405979126',event);
/*lucidcode*/
    var delayFunction = function() { /*luc!d_callback*/insertToBlueBox(senderObject,event);/*luc!d_callback_end*/ };
    setTimeout(delayFunction,/*luc!d_delay*/1000/*luc!d_delay_end*/);
    /*lucidcode_end*/


}
//EndLucid

//Lucid_LucidJQueryDOMInsertAction_48_657_20422261444636722071868111733
function insertToBlueBox(senderObject, event) {
	lucidDebug('20422261444636722071868111733',event);
/*lucidcode*/
    $(/*luc!d_element*/'DIV.#bluebox'/*luc!d_element_end*/)./*luc!d_functiontype*/text/*luc!d_functiontype_end*/(/*luc!d_code*/"" + event.colorText[2]/*luc!d_code_end*/);
    /*lucidcode_end*/

}
//EndLucid

