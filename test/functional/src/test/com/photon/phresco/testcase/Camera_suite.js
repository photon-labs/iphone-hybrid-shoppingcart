#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function testCamera(testname){
	try{
		//clickOnScroll(Browse_id);
		clickOnScroll(Camera_id);
		waitForFewSeconds(1);
		clickOnScreen(110,127);
		waitForFewSeconds(3);
		target.logElementTree();
		clickOnScreen(184,231);
		waitForFewSeconds(3);
		clickOnScreen(259,223);
		clickOnScroll(UpdateCart_id);
		waitForFewSeconds(1);		
		clickOnScroll(Checkout_id);
		clickOnScreen(259,223);
		waitForFewSeconds(1);
		clickOnScroll(MyCart_id);
		clickOnScreen(259,223);
		waitForFewSeconds(1);
		clickOnScroll(Remove_id);
		waitForFewSeconds(2);
		clickOnScroll(Back_id);
		UIALogger.logPass(testname);	
	}	
	catch(error){		
			captureScreenshot(testname);			
			UIALogger.logFail("Fail");
			UIALogger.logError(testname);	
	}
}
testCamera("CameraTest");