!function(i){skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)",xxsmall:"(max-width: 360px)"}),i(function(){var e=i(window),s=i("body"),o=i("#wrapper"),t=i("#header"),a=i("#footer"),l=i("#main"),n=l.children("article");if(s.addClass("is-loading"),e.on("load",function(){window.setTimeout(function(){s.removeClass("is-loading")},100)}),i("form").placeholder(),skel.vars.IEVersion<12){var r;e.on("resize.flexbox-fix",function(){clearTimeout(r),r=setTimeout(function(){o.prop("scrollHeight")>e.height()?o.css("height","auto"):o.css("height","100vh")},250)}).triggerHandler("resize.flexbox-fix")}var h=t.children("nav"),c=h.find("li");c.length%2==0&&(h.addClass("use-middle"),c.eq(c.length/2).addClass("is-middle"));var d=325,f=!1;if(l._show=function(i,o){var r=n.filter("#"+i);if(0!=r.length){if(f||"undefined"!=typeof o&&o===!0)return s.addClass("is-switching"),s.addClass("is-article-visible"),n.removeClass("active"),t.hide(),a.hide(),l.show(),r.show(),r.addClass("active"),f=!1,void setTimeout(function(){s.removeClass("is-switching")},o?1e3:0);if(f=!0,s.hasClass("is-article-visible")){var h=n.filter(".active");h.removeClass("active"),setTimeout(function(){h.hide(),r.show(),setTimeout(function(){r.addClass("active"),e.scrollTop(0).triggerHandler("resize.flexbox-fix"),setTimeout(function(){f=!1},d)},25)},d)}else s.addClass("is-article-visible"),setTimeout(function(){t.hide(),a.hide(),l.show(),r.show(),setTimeout(function(){r.addClass("active"),e.scrollTop(0).triggerHandler("resize.flexbox-fix"),setTimeout(function(){f=!1},d)},25)},d)}},l._hide=function(i){var o=n.filter(".active");if(s.hasClass("is-article-visible")){if("undefined"!=typeof i&&i===!0&&history.pushState(null,null,"#"),f)return s.addClass("is-switching"),o.removeClass("active"),o.hide(),l.hide(),a.show(),t.show(),s.removeClass("is-article-visible"),f=!1,s.removeClass("is-switching"),void e.scrollTop(0).triggerHandler("resize.flexbox-fix");f=!0,o.removeClass("active"),setTimeout(function(){o.hide(),l.hide(),a.show(),t.show(),setTimeout(function(){s.removeClass("is-article-visible"),e.scrollTop(0).triggerHandler("resize.flexbox-fix"),setTimeout(function(){f=!1},d)},25)},d)}},n.each(function(){var e=i(this);i('<div class="close">Close</div>').appendTo(e).on("click",function(){location.hash=""}),e.on("click",function(i){i.stopPropagation()})}),s.on("click",function(i){s.hasClass("is-article-visible")&&l._hide(!0)}),e.on("keyup",function(i){switch(i.keyCode){case 27:s.hasClass("is-article-visible")&&l._hide(!0)}}),e.on("hashchange",function(i){""==location.hash||"#"==location.hash?(i.preventDefault(),i.stopPropagation(),l._hide()):n.filter(location.hash).length>0&&(i.preventDefault(),i.stopPropagation(),l._show(location.hash.substr(1)))}),"scrollRestoration"in history)history.scrollRestoration="manual";else{var u=0,v=0,m=i("html,body");e.on("scroll",function(){u=v,v=m.scrollTop()}).on("hashchange",function(){e.scrollTop(u)})}l.hide(),n.hide(),""!=location.hash&&"#"!=location.hash&&e.on("load",function(){l._show(location.hash.substr(1),!0)})})}(jQuery);
