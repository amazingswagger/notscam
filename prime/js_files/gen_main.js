function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

var possible = ["jjccz", "socks","cigna4","crows875","alpha3026","CherryMarl1","minsoga", "kopd016","rhodanthe1","balaGup","sw4ngasd","9kmmrbo","pt0lenm", "Proppe","fotschdot","iresista","mr_termit","BronezhiR","ZhiroBor", "Dobrozhir28","ZhiroSlav","MarkoSbr","Convanjo","PeenDadd","Histo", "BadGu2","TieDyiMids","HLCgam","SethDrum1","Chanle","HalfieGu", "Pizzarony3","dick13","DwarfMaste","Dadrew13","Zhuchka","Kadirov05", "GuLaG17","StolHit13","XerotheHe","mamkadau","JualinDastick","DanNyzLase", "Joshnu808","BogatirD0brinya","aRiizee","Alkazrt9","Goseq12"];

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function makeid() {
    var stars = "***"
    var text = "";
    var random = getRandomInRange(0,possible.length);
    text = possible[random];
    possible.splice(random,1);

        
    return text + stars;
    
  }
  
  function makeid2() {
    var text = "";
    var possible = "******************************";
  
    for (var i = 0; i <= 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  

var prog1proc = 0;
function fillProgg1() {
    prog1proc += 25;

    if(prog1proc < 100) {
        setTimeout(fillProgg1, 1000);
    } else {
        prog1proc = 100;
        jQuery(".xgb-s-1").slideUp(2000, function() {
            jQuery(".xgb-s-2").slideDown(2000, function() {
                jQuery(".xxxg-prog-val").css("width", "0%");
                jQuery(".pckv").css('width', jQuery(".pc-k-4").css("width"));
                jQuery(".pc-k-4").text("XXXXX");
                setTimeout(searchFK, 100);
            });
        });
    }
    jQuery(".xxxg-prog-val").css("width", prog1proc + "%")
    
}

function searchFK() {
    if(fkCount > fkCurr) {
        if (fkCurr != (fkCount-1))
            jQuery(".pc-k-1").text(makeid());
        else jQuery(".pc-k-1").text(makeid());
        jQuery(".pc-k-2").text(makeid2());

        fkCurr++;
        setTimeout(searchFK, 200);
    } else {
        jQuery(".xgb-s-2 .spinner").hide(1000, function() {
            jQuery(".ppxs2-text").slideUp(1000);
            jQuery(".xgb-s-2 .xgs2-cons").slideDown(1500, function() {
                jQuery(".xgs2c-p1").slideDown(500, function() {
                    jQuery(".xxxg-prog-val").css("width", "85%");
                    jQuery(".xgs2c-b1").slideDown(700, function() {
                        jQuery(".xgs2c-p2").slideDown(200, function() {
                        });
                    });
                });
            });
        })
    }
}

function step1() {
    fillProgg1();
    jQuery("html, body").animate({ scrollTop: jQuery(document).height() }, "fast");
}

jQuery(document).ready(function() {
    fkCount = Math.floor(Math.random() * 1) + 20;
    fkCurr = 0;
    s1block = false;

    jQuery(".pw-selector").on('click', function() {
        if(jQuery(this).attr('data-selected') === 'false' && !s1block) {
            
            jQuery(".pw-selector.selected").toggleClass('selected', false);
            
            jQuery(this).attr('data-selected', 'true');
            jQuery(this).toggleClass('selected', true);
        }
    });
    
    jQuery(".xgb-s-1 .xbbt-btn").on('click', function() {
        if(jQuery(".pw-selector.selected").length) { // TODO: check email
            if(isEmail(jQuery(".bs-username-input").val())) {
                if(!s1block) {
                    s1block = true;
                    jQuery(".bs-username-input").attr("readonly", "readonly");
                    jQuery(".bs-username-input").css("cursor", "not-allowed");
                    jQuery(".xgb-s-1 .xbbt-btn").css("cursor", "not-allowed");
                    jQuery(".pw-selector").css("cursor", "not-allowed");
                    
                    step1();
                }
            } else {
               
            }
        } else {
           
        }
    });
});