#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function testMovieAndMusic(testname){
	try{
		
		//clickOnScroll(Browse_id);
		waitForFewSeconds(3)
		mainwindow.scrollViews()[0].webViews()[0].links()[MovieAndMusic_id].tap();
		waitForFewSeconds(3)
		clickOnScreen(110,127);
		waitForFewSeconds(3);
		clickOnScreen(184,231);
		waitForFewSeconds(3);
		clickOnScreen(259,223);
		waitForFewSeconds(3);
		clickOnScroll(UpdateCart_id);
		waitForFewSeconds(2);		
		clickOnScroll(Checkout_id);
		clickOnScreen(259,223);
		waitForFewSeconds(1);
		clickOnScroll(MyCart_id);
		clickOnScreen(259,223);
		waitForFewSeconds(1);
		clickOnScroll(Remove_id);
		clickOnScroll(Back_id);		
		UIALogger.logPass(testname);
		
		
	}
	catch(error){		
			captureScreenshot(testname);			
			UIALogger.logFail("Fail");
			UIALogger.logError(testname);	
	}
}
testMovieAndMusic("MovieandMusicTest");






