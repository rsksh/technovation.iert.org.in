                                                                                                                                                                                                                                                                                                                                /*( function(  ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        },'smoothScrolling':'true'
    });
} )( );*/
function initBB(id)
{
	$( (id+' .bb-bookblock') ).bookblock();
    $((id+' .nav-links span:eq(2)')).click(function(){
    	$( (id+' .bb-bookblock') ).bookblock('next');
    	//bb.jump(3);
    });
    $( (id+' .nav-links span:eq(1)')).click(function(){
    	$( (id+' .bb-bookblock') ).bookblock( 'prev' );
    });
    $((id+' .evtlist')).find('.ev').each(function(idx){
    	$(this).click(function(){$( (id+' .bb-bookblock') ).bookblock('jump',idx+1);});

    });
}
function initializeProg()
{
    var $wid = $(document).width();
    $wid = 1350;
            var d = "M0 25 L"+ $wid +" 25 Z"
            //$('#progress').attr('d',d);
            
            //$('#progress').css({'stroke-dasharray':$(document).width()*2});
            //$('#progress').css({'stroke-offset':$(document).width()*2});
            var line = "@d:M0 25 L"+$wid+" 25";
            //alert($(window).width());
            $('#progress').attr('data-bottom-bottom',line);
            $('#p-2011').attr('cx',.23*$wid);
            $('#p-2012').attr('cx',.48*$wid);
            $('#p-2013').attr('cx',.73*$wid);
            $('#p-2014').attr('cx',.97*$wid);
}
function moveSlider()
{
    var offset = $('#slide-2').offset();
                var posY = offset.top - $(window).scrollTop()-$('.abt-year').height();
                var offsetval = -posY;
                var height = $('#slide-2').height();
                
                var perc = (offsetval/height)*100;
                var progwid = $(document).width();
                //alert(progwid);
                if(perc>=0&&perc<100){
                var line_offset = (perc/100)*(progwid);
                $('#progress').css({
                    "stroke-dashoffset" : progwid*2 - line_offset
                    });}
}

function checkLoad()
{
    
    var loaded = false;
    for(i=0; i<document.images.length; i++) {
        
            /*if(document.images[i].complete == true) {
                loaded = true;
                
            }*/
            if(document.images[i].error==true)
            {
            	continue;
            }
            
            else if(document.images[i].complete == true)
            {
            	loaded = true;
            }
            else{
                loaded = false;
                //console.log("hi");
                break;

            }
        
        
    }
    return loaded;
}
function comingSoon()
{
$('.comingsoon').fadeIn(200).delay(1000).fadeOut(200);
return false;
}  

function back(){
	$("#backHome").click(function() {
		$("#archives").fadeOut();
	});
}                          
                            
                            
                            
                            
                            
                            
                            
                            