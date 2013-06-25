/*
 * Based on jquery.popup_help.js
 * http://www.18th-technote.com/jquery-popup-help
 * Copyright © 2011 - 2013 18th Tech Note by Yusuke Murayama
 *
 * Extracts microdata and abstract from PubMed ID
 * Original from jquery.popup_help.js, modified by Maori Ito.
 *
 */

(function($) {
  $.fn.popupHelp=function(config) {
    /**
      * marginTop:the difference of the height of the window and display targeting 
      * If you set 0, the top is frush. 
      * marginLeft: the difference of width of the window and display targeting
      * If you set 0, the left end is frush.
      * className: the name of window
      * speed: Number of seconds [ms] 
      */
    var defaults = {
      marginTop: 20,
      marginLeft: 20,
      className: "popup_help_window",
      speed:10 
    }

    var options = $.extend(defaults, config);

    // Preparing the object of the help window
    var popupObj = $("<div>").addClass(defaults.className).appendTo($("body"));
    var html='';
    var title = '';
    var abstract = '';
    var	contenttext = '';
    var popuptext = '';
    return this.each(function() {

      $(this).mouseover(function(event) {
        //hover the mouse cursor over the target
        //adjust the position of the pop-up window
       if (!event) var event = window.event;
	if (!event.pageX) px = event.clientX + document.body.scrollLeft; else px = event.pageX;
//	alert(px + "px  " + $(window).width() + "px");
	defaults.marginLeft = 20;
	var subtract = $(window).width() - px;
	if (subtract < 500) defaults.marginLeft = subtract - 500;	
	contenttext = '';
        //setting messages into window
        contenttext = $(this).attr('content');
        //cutting out only after ":"
        contenttext = contenttext.split(":")[1];
 	var offsetTop = $(this).offset().top + defaults.marginTop;
        var offsetLeft = $(this).offset().left + defaults.marginLeft;
        
$.ajax({
    url:'http://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&retmode=xml&id='+ contenttext,
    //specify a url to load
    dataType:'xml',
    //type of data
    async:true,
    //asynchronous communication
    success:function(xml){
        html='';
            title = $(xml).find("ArticleTitle").text();//title
            abstract = $(xml).find("AbstractText").text();//abstract
            popuptext = title + "\n\n" + abstract ;//text for popup 
   },
    error: function(html){
        alert('Fell the data loading, Please access later');
    }
});
$(document).ajaxComplete(function(){
      popupObj.text(popuptext);
        //calculate the offset of the window
        //fix the position of the window and show
        popupObj.css({
          "top": offsetTop,
          "left": offsetLeft
        }).show(defaults.speed);
      });
      });
$(this).mouseout(function() {
	//hide the window and empty the text
        popupObj.hide("slow").text("");
      });
$(document).click(function() { 
	//hide the window and empty the text
        popupObj.hide("slow").text("");
   
});
    });
  };
})(jQuery);
      $(function() {
        // specify the selector
  if ($("[itemprop=entryID]").length){ $("[itemprop=entryID]").popupHelp({});
  }
  if ($("[itemprop=reference]").length){ $("[itemprop=reference]").popupHelp({});
  }
      });
 
