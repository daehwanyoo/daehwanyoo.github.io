"use strict"; /*!
    Title: Vertical-Timeline
    Version: 2.0.0
    Last Change: 04/30/17
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/vertical-timeline
    Issues: https://github.com/RyanFitzgerald/vertical-timeline/issues
	LICENSE: MIT
*/ 
!function(t) {
    var i = function(i) {
        var e = {
            top: t(window).scrollTop(),
            left: t(window).scrollLeft(),
            right: t(window).scrollLeft() + t(window).width(),
            bottom: t(window).scrollTop() + t(window).height()
        }, n = i.offset();
        return n.right = n.left + i.outerWidth(), n.bottom = n.top + i.outerHeight(), !(e.right < n.left || e.left > n.right || e.bottom < n.top || e.top > n.bottom);
    };
    t.fn.verticalTimeline = function(e) {
        var n = t.extend({
            startLeft: !0,
            alternate: !0,
            animate: !1,
            arrows: !0
        }, e);
        return this.each(function() {
            var e = t(this).children("div");
            t(this).addClass("vtimeline"), e.each(function() {
                t(this).addClass("vtimeline-content").wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
            }), t(this).find(".vtimeline-point").each(function() {
                if (t(this).prepend('<div class="vtimeline-icon"></div>'), t(this).find("[data-vticon=true]").length) {
                    var i = t(this).find("[data-vticon=true]").html();
                    t(this).find(".vtimeline-icon").append(i), t(this).find("[data-vticon=true]").remove();
                }
            }), n.alternate ? n.startLeft ? t(this).find(".vtimeline-point:odd").each(function() {
                t(this).find(".vtimeline-block").addClass("vtimeline-right");
            }) : t(this).find(".vtimeline-point:even").each(function() {
                t(this).find(".vtimeline-block").addClass("vtimeline-right");
            }) : t(this).find(".vtimeline-block").addClass("vtimeline-" + n.startSide), n.animate && t(this).find(".vtimeline-block").each(function() {
                var e = this;
                t(this).addClass("vt-animate-" + n.animate), i(t(this)) && t(this).removeClass("vt-animate-" + n.animate), t(window).on("scroll", function() {
                    i(t(e)) && t(e).removeClass("vt-animate-" + n.animate);
                });
            }), t(this).find(".vtimeline-content").each(function() {
                var i = t(this).data("vtdate"), e = t(this).data("vtside");
                i && t(this).parent().prepend('<span class="vtimeline-date">' + i + "</span>"), e && (t(this).parent().removeClass("vtimeline-right"), t(this).parent().addClass("vtimeline-" + e));
            }), n.arrows || t(this).find(".vtimeline-block").addClass("vt-noarrows");
        });
    };
}(jQuery);

//# sourceMappingURL=index.9d01d549.js.map
