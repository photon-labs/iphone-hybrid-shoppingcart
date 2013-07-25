#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function testLogin_Invalid(testname){
	try{
		clickOnScroll("\nLogin\n");
		waitForFewSeconds(2);
		//target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["\nLogin\n"].tap();
		target.logElementTree();
		waitForFewSeconds(2);
		target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].textFields()[0].setValue("Photon@phresco.com");
		waitForFewSeconds(2);
		target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
		waitForFewSeconds(2);
		target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].secureTextFields()[0].tap();
		waitForFewSeconds(1);
		target.frontMostApp().keyboard().typeString("photon");
		waitForFewSeconds(1);
		target.frontMostApp().windows()[1].toolbar().buttons()["Done"].tap();
		//target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["Submit"].tap();
		clickOnScroll("Submit");
		waitForFewSeconds(2);
		target.logElementTree();
		//target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["Submit"].tap();
		var textValue = mainwindow.scrollViews()[0].webViews()[0].staticTexts()["Status : Login failed"].value();
		var logSuccess="Status : Login failed";
    
    		if (textValue !== null){ 
    		     UIALogger.logMessage("Login Success") ;       			 
    			}
   			 else{
       			 UIALogger.logFail( "Login Fail" ); 
   			 }
		waitForFewSeconds(2);
		target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].tapWithOptions({tapOffset:{x:0.12, y:0.95}});
		UIALogger.logPass(testname);	
	}	
	catch(error){		
		
			captureScreenshot(testname);			
			UIALogger.logFail("Fail");
		waitForFewSeconds(3);
			UIALogger.logError(testname);	
	}
}
testLogin_Invalid("testLogin_Invalid");