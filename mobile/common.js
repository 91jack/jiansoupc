var HTTP = function(){};
HTTP.prototype.request = function (url,params) {
    var responseData;

    $.ajax({
        type: "POST",
        url: url,
        data: params,
        dataType: "json",
        async: false,
        cache: false,
        success: function (data) {
            responseData = data;
        },
        error: function(xhr, error) {
            if(error){
                responseData = null;
            }
        }
    });

    if(responseData && responseData.errno==1001){
        location.href = responseData.obj;
    }

    return responseData;
};

HTTP.prototype.requestAsync = function (url,params,success) {
    var responseData;

    $.ajax({
        type: "POST",
        url: url,
        data: params,
        dataType: "json",
        async: true,
        cache: false,
        success: function (data) {
            if(typeof(success) == "function"){
                success(data);
            }
        },
        error: function(xhr, error) {
            if(error){
                responseData = null;
            }
        }
    });

    if(responseData && responseData.errno==1001){
        location.href = responseData.obj;
    }

    return responseData;
};
