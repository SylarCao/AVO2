// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
                
                var var1 = AV.Object.extend("CClass1");
                
                var1.set("num1", 21);
                
                var1.save(null, {
                               success: function(gameScore) {
                               // Execute any logic that should take place after the object is saved.
//                               alert('New object created with objectId: ' + gameScore.id);
                          response.success("success");
                               },
                               error: function(gameScore, error) {
                               // Execute any logic that should take place if the save fails.
                               // error is a AV.Error with an error code and description.
//                               alert('Failed to create new object, with error code: ' + error.description);
                          response.success("fail");
                               }
                
                
//  response.success("Hello worlddddddd!");
});

AV.Cloud.define("hello2", function(request, response) {
                
                var var1 = AV.Object.extend("CClass1");
                
                
                response.success("Hello worlddddddd222222!");
                });