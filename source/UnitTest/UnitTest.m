//
//  UnitTest.m
//  UnitTest
//
//  Created by SHIVAKUMAR_CH on 4/15/13.
//
//

#import "UnitTest.h"

@implementation UnitTest

- (void)setUp
{
    [super setUp];
    
    // Set-up code here.
}

- (void)tearDown
{
    // Tear-down code here.
    
    [super tearDown];
}

- (void)testExample
{
    NSString *first = @"Hello";
    NSString *second = @"World";
    STAssertFalse(first==second, @"False");
}

@end
