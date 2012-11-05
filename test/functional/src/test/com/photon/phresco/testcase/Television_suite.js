#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function testTelevision(testname){
	try{
		
		UIALogger.logStart(testname);
		clickOnScroll(Browse_id);		
		clickOnScroll(Television_id);
		waitForFewSeconds(1);
		clickOnScreen(110,127);
		clickOnScreen(184,211);
		clickOnScreen(259,223);
		waitForFewSeconds(1);
		clickOnScroll(UpdateCart_id);
		clickOnScroll(Checkout_id);
		waitForFewSeconds(1);
		clickOnScreen(259,223);
		clickOnScroll(MyCart_id);
		clickOnScreen(259,223);
		clickOnScroll(Remove_id);
		waitForFewSeconds(1);		
		clickOnScroll(Back_id);
		
		
		}
	  	
	catch(exception){		
			captureScreenshot(testname);			
			UIALogger.logFail("Fail");
			UIALogger.logError(exception);
			throw exception;					
		}
	}


testTelevision("TelvisionTest");





