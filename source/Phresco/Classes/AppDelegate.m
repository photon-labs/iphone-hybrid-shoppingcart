//
//  AppDelegate.m
//  Phresco
//
//  Created by ARUNACHALAM LAKSHMANAN on 1/18/12.
//  Copyright __MyCompanyName__ 2012. All rights reserved.
//

#import "AppDelegate.h"
#import "ConfigurationReader.h"
#ifdef PHONEGAP_FRAMEWORK
	#import <PhoneGap/PhoneGapViewController.h>
#else
	#import "PhoneGapViewController.h"
#endif

@implementation AppDelegate

@synthesize invokeString;

- (id) init
{	
	/** If you need to do any extra app-specific initialization, you can do it here
	 *  -jm
	 **/
    return [super init];
}

/**
 * This is main kick off after the app inits, the views and Settings are setup here. (preferred - iOS4 and up)
 */
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{    
    /*ConfigurationReader *configReader = [[ConfigurationReader alloc]init];
    [configReader parseXMLFileAtURL:@"Config" environment:@"myWebservice"];
    
    NSString *protocol = [[configReader.stories objectAtIndex: 0] objectForKey:@"protocol"];
    protocol = [protocol stringByTrimmingCharactersInSet:
                [NSCharacterSet whitespaceAndNewlineCharacterSet]];
    
    NSString *host = [[configReader.stories objectAtIndex: 0] objectForKey:@"host"];
    host = [host stringByTrimmingCharactersInSet:
            [NSCharacterSet whitespaceAndNewlineCharacterSet]];
    
    NSString *port = [[configReader.stories objectAtIndex: 0] objectForKey:@"port"];
    port = [port stringByTrimmingCharactersInSet:
            [NSCharacterSet whitespaceAndNewlineCharacterSet]];
    
    NSString *context = [[configReader.stories objectAtIndex: 0] objectForKey:@"context"];
    context = [context stringByTrimmingCharactersInSet:
               [NSCharacterSet whitespaceAndNewlineCharacterSet]];
    
    NSString *urlString = [NSString stringWithFormat:@"%@://%@:%@/%@", protocol,host, port, context];
    NSLog(@"Configuration urlString: %@",urlString);
    
    NSURL* url = [launchOptions objectForKey:UIApplicationLaunchOptionsURLKey];
    if (url && [url isKindOfClass:[NSURL class]])
    {
        self.invokeString = [url absoluteString];
		NSLog(@"Phresco launchOptions = %@",url);
    }*/ 
		
	return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

// this happens while we are running ( in the background, or from within our own app )
// only valid if Phresco.plist specifies a protocol to handle
- (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url 
{
    // must call super so all plugins will get the notification, and their handlers will be called 
	// super also calls into javascript global function 'handleOpenURL'
    return [super application:application handleOpenURL:url];
}

-(id) getCommandInstance:(NSString*)className
{
	/** You can catch your own commands here, if you wanted to extend the gap: protocol, or add your
	 *  own app specific protocol to it. -jm
	 **/
	return [super getCommandInstance:className];
}

/**
 Called when the webview finishes loading.  This stops the activity view and closes the imageview
 */
- (void)webViewDidFinishLoad:(UIWebView *)theWebView 
{
	// only valid if Phresco.plist specifies a protocol to handle
	if(self.invokeString)
	{
		// this is passed before the deviceready event is fired, so you can access it in js when you receive deviceready
		NSString* jsString = [NSString stringWithFormat:@"var invokeString = \"%@\";", self.invokeString];
		[theWebView stringByEvaluatingJavaScriptFromString:jsString];
	}
	
	 // Black base color for background matches the native apps
   	theWebView.backgroundColor = [UIColor blackColor];
    
	return [ super webViewDidFinishLoad:theWebView ];
}

- (void)webViewDidStartLoad:(UIWebView *)theWebView 
{
	return [ super webViewDidStartLoad:theWebView ];
}

/**
 * Fail Loading With Error
 * Error - If the webpage failed to load display an error with the reason.
 */
- (void)webView:(UIWebView *)theWebView didFailLoadWithError:(NSError *)error 
{
	return [ super webView:theWebView didFailLoadWithError:error ];
}

/**
 * Start Loading Request
 * This is where most of the magic happens... We take the request(s) and process the response.
 * From here we can redirect links and other protocols to different internal methods.
 */
- (BOOL)webView:(UIWebView *)theWebView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType
{
   // request = [[NSURLRequest alloc]initWithURL:[NSURL URLWithString: @"http://172.16.23.65/mobile/"]];
    NSURL *url = [request URL];
    NSLog(@"URL:%@",url);
    if ([[url scheme] isEqualToString:@"http"] || [[url scheme] isEqualToString:@"https"]) {
        return YES;
    }
    else {
        return [ super webView:theWebView shouldStartLoadWithRequest:request navigationType:navigationType ];
    }
}


- (BOOL) execute:(InvokedUrlCommand*)command
{
	return [ super execute:command];
}

- (void)dealloc
{
	[super dealloc ];
}

@end
