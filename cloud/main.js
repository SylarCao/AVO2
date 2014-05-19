// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
                
                var var1 = AV.Object.extend("CClass1");
                
                
  response.success("Hello worlddddddd!");
});

AV.Cloud.define("hello2", function(request, response) {
                
                var var1 = AV.Object.extend("CClass1");
                
                
                response.success("Hello worlddddddd222222!");
                });