var pepperRobo = pepperRobo || {};

pepperRobo.base = (function($){
    var fn, cache, api;
    cache = {
        view: $(".view"),
        views: [$("#view-1"),$("#view-2"),$("#view-3"),$("#view-4"),$("#view-5"),$("#view-6"),$("#view-7")],
        countDown: 5
    }
    fn = {
        _init: function(){
            fn._showView(1);
            fn._bindEvents();
        },
        _bindEvents: function(){
            $(".index-link").on("click", function(){
                fn._showView(1);
            });
            $("#view-2 .yes-btn").on("click", function(){
                fn._showView(4);
                fn._startCounter(cache.countDown, "#view-4 .count-down");
            });
            $("#view-2 .no-btn").on("click", function(){
                fn._showView(3);
            });
            $("#view-3 .yes-btn").on("click", function(){
                fn._showView(5);
                fn._startCounter(cache.countDown, "#view-5 .count-down");
            });
            $("#view-3 .no-btn").on("click", function(){
                fn._showView(6);
            });
        },
        _startCounter: function(startNumber, countDownSelector){
            var countDown = $(countDownSelector);
            countDown.text(startNumber);
            var cId = window.setInterval(function(){
                startNumber -= 1;
                if(startNumber == 0){
                    window.clearInterval(cId);
                }
                countDown.text(startNumber);
            },1000);
        },
        _hideViews: function(){
            cache.view.hide();
        },
        _showView: function(viewNumber){
            if(viewNumber){
                viewNumber -= 1; 
                fn._hideViews();
                cache.views[viewNumber].show();
            }
        },
        _askVideo: function(){
            // show ask video view
            fn._showView(2);
        }

    }
    api = {
        init: function(){ 
            return fn._init.apply(this, arguments); 
        },
        askVideo: function(){
            return fn._askVideo.apply(this,arguments);
        },
        showView: function(){
            return fn._showView.apply(this, arguments);
        }
    }

    return api;
})(jQuery);

pepperRobo.base.init();
pepperRobo.base.showView(2);