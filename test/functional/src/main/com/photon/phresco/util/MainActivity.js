/*
 
 This is the Main class and it is common for all the Testcase
 It will execute firstly.
 Here we defined all the common functionalities. 
 
 */

#import "UIElements.js"


var application;
var target;
var mainwindow;
var j=10;


/*	This function will launch the application	*/


function launchingApplication(testname){
	
	target=UIATarget.localTarget();
	application=target.frontMostApp();
	mainwindow= application.mainWindow();	
	UIALogger.logMessage("Device Name: " + target.name() + "  OS Version:" + target.systemVersion());	
	
	
}




/*	
 	It will wait for text till the given time
	It will tap the text if it exists in given time
	It will Capture the screen if text not exists in given time
 */


function clickOnText(text){
	
	var textpresent = isTextPresent(text);
	textpresent.tap();
}




/*
 It will wait for button till the given time
 It till tap the button if it exists in given time
 It will Capture the screen if button not exists in given time
 */
//function clickScroll(button){
///	mainwindow.scrollViews()[0].webViews()[0].links()[button].tap();
//}

function clickOnScroll(button){
	
	var scroll = isScrollViewExist(button);
	UIALogger.logMessage("---ScrollView Exists---");
	scroll.tap();
}




/*
 It will wait for button till the given time
 It will Capture the screen if button not exists in given time
 */



function isScrollViewExist(button){
	
	if(button!=null){
		for(var i=0;i<=j;i++){
			var scrollview=mainwindow.scrollViews()[0].webViews()[0].links()[button];
			if(scrollview.isVisible() && scrollview.isEnabled()){
				return scrollview;
			}
			else{
				if(i==j){
					UIALogger.logMessage("Assertion failed  Excepcted value is:"+ scrollview.name()+"     Getting value is: "+ button);
					UIALogger.logMessage("---ScrollView not Exists---");
					throw error;
					
				}
				else{
					UIALogger.logMessage("---Waiting for ScrollView to exist---");
					target.delay(1);
				}
			}
		}
	}
	
	else{
		
		UIALogger.logMessage("-----------ScrollView  Value is empty-------------");
	}
}


/*
	It will wait for text till the given time
	It will Capture the screen if text not exists in given time
*/


function isTextPresent(text){
	if (text!=null){
		for(var i=0;i<=j;i++){
			var imagepresent = mainwindow.images()[0];
			var textpresent = imagepresent.staticTexts()[text];
			if(textpresent.isVisible() && textpresent.isEnabled()){
				return textpresent;
				//break;
			}
			else{
				if(i==j){
					UIALogger.logMessage("---Expected text not exists---");
					throw error;
				}
				else{
					UIALogger.logMessage("---wait for text present---");
					waitForFewSeconds(1);
				}
			}
		}
	}
	else{
		UIALogger.logMessage("---Text not exists---");
	}	
}




/* 	whenever the testcases fail it will capture the screenshot 	*/


function captureScreenshot(name){

	target.captureScreenWithName(name); 
}




/* It will delay the process for few seconds */


function waitForFewSeconds(seconds){
	
	if(seconds!==null){
		target.delay(seconds);
	}
	else{
		UIALogger.logMessage("---Shouldnot be null---"+seconds);
		throw error;
	}	
}




/*
	Here the function will check the screen coordinates and click on particular element.

*/


function clickOnScreen(xpath,ypath){
	
	try{
		if(xpath!==null && ypath!==null){
			UIALogger.logMessage("---clickOnScreen---");
			waitForFewSeconds(2);
			target.tap({x:xpath,y:ypath});
			waitForFewSeconds(2);
		}
		else{
			UIALogger.logMessage(" X value should not be: "+xpath.value+" And "+"  Y value should not be: "+ypath.value);
			}
	}
	catch(exception){
		throw exception;
	}
}



function clickOnTableCell(CellValues){
	
	try{	
		if(CellValues!==null){
			var image=mainwindow.images()[0];
			var table= image.tableViews()[0];
			var cellValue= table.cells()[CellValues].tap();
		}
		else{
		UIALogger.logMessage("---Shouldnot be null---");
		}	
	}
	catch(exception){
	throw exception;
	}
}

function clickOnStaticText(text){
	
	var scroll = isStaticTextExist(text);
	UIALogger.logMessage("---StaticText Exists---");
	scroll.tap();
}


function isStaticTextExist(text){
	
	if(button!=null){
		for(var i=0;i<=j;i++){
			var scrollview=mainwindow.scrollViews()[0].webViews()[0].links()[6].staticTexts()[text];
			if(scrollview.isVisible() && scrollview.isEnabled()){
				return scrollview;
			}
			else{
				if(i==j){
					UIALogger.logMessage("Assertion failed  Excepcted value is:"+ scrollview.name()+"     Getting value is: "+ button);
					UIALogger.logMessage("---StaticText not Exists---");
					throw error;
					
				}
				else{
					UIALogger.logMessage("---Waiting for StaticText to exist---");
					target.delay(1);
				}
			}
		}
	}
	
	else{
		
		UIALogger.logMessage("-----------ScrollView  Value is empty-------------");
	}
}




launchingApplication("---Launching the application---");