#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function testTablet(testname){
	try{
		UIALogger.logStart(testname);
		clickOnScroll(Browse_id);
		waitForFewSeconds(1);
		clickOnScroll(Tablet_id);
		clickOnScreen(110,127);
		clickOnScreen(184,211);
		clickOnScreen(259,223);
		clickOnScroll(UpdateCart_id);
		clickOnScroll(Checkout_id);
		clickOnScreen(259,223);
		clickOnScroll(MyCart_id);
		waitForFewSeconds(1);
		clickOnScreen(259,223);
		clickOnScroll(Remove_id);
		waitForFewSeconds(1);		
		clickOnScroll(Invali_ID);
		
	}
	
	catch(exception){		
			captureScreenshot(testname);			
			UIALogger.logFail("Fail");
			UIALogger.logError(exception);
			throw exception;					
		}
	}

testTablet("TabletTest");