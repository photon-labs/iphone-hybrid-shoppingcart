#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function testMovieAndMusic(testname){
	try{
		
		UIALogger.logStart(testname);
		clickOnScroll(Browse_id);		
		mainwindow.scrollViews()[0].webViews()[0].links()[MovieAndMusic_id].tap();
		clickOnScreen(110,127);
		clickOnScreen(184,211);
		clickOnScreen(259,223);
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
		
		
		
		}
	  	
	catch(exception){		
			captureScreenshot(testname);			
			UIALogger.logFail("Fail");
			UIALogger.logError(exception);
			throw exception;					
		}
	}


testMovieAndMusic("MovieandMusicTest");






