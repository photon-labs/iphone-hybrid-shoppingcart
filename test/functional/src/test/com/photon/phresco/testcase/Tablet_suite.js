#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function testTablet(testname){
	try{
		
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
		UIALogger.logPass(testname);
		
	}
	catch(error){		
			captureScreenshot(testname);			
			//UIALogger.logFail("Fail");
			UIALogger.logError(testname);	
	}
}
testTablet("TabletTest");