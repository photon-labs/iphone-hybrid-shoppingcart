//
//  LogicTest.m
//  LogicTest
//
//  Created by Rojaramani on 16/10/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import "LogicTest.h"

@implementation LogicTest

- (void)setUp
{
    [super setUp];
    appDelegate = [[UIApplication sharedApplication] delegate];
    // Set-up code here.
}

- (void)tearDown
{
    // Tear-down code here.
    
    [super tearDown];
}

-(void)testURL{
    
    STAssertNil(appDelegate,@"Should not be nil");
    
}

@end
