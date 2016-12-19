var validUrl = require('valid-url');

module.exports = function(app,db){
    app.get('/new',function(req,res){
        var url = req.query.url;
        console.log(url);
        //check if URL requested is valid
        if(validUrl.isUri(url)){
            var num = generateLink();
            var newUrl = {"original-url": url, "short-url": process.env.APP_URL + num};
            res.send(newUrl);
            saveUrl(newUrl,db);
            
        } else {
            
            //URL not found
            res.send({"error": "Unable to find site requested. Please make sure you have a valid URL"});
            
        }
    });
    
    app.get('/:shortUrl', function(req,res){
            var url = req.params.shortUrl;
            redirectUrl(url,db,res);
        });
};

function generateLink(){
    //generate random number for link
    console.log('generating link');
    var num = Math.floor(Math.random()*100000);
    return num.toString();
}

function saveUrl(url,db){
    var collection = db.collection('url');
    collection.insert(url, function(err,data){
        if(err) throw err;
    });
}

function redirectUrl(url,db,res){
    var collection = db.collection('url');
    collection.findOne({"short-url":process.env.APP_URL + url},function(err,data){
        if (err) throw err;
        if(data){
            console.log('Redirecting to: ' + data['original-url']);
            res.redirect(data['original-url']);
        } else {
            res.send({"error":'URL could not be found. Please try again.'});
        }
    });
}