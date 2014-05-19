// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
                

                var comment = request.object.get("key");
                
                
  response.success(comment);
});

AV.Cloud.define("hello2", function(request, response) {
                

                
                response.success("Hello worlddddddd222222!");
});