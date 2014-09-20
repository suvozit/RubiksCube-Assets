// Javascript written by Jaap Scherphuis. (jaapsch a t yahoo d o t com)

// browser check
var netscape = (document.layers) ? 1:0;
var goodIE = (document.all) ? 1:0;
var mozilla = (goodIE==0 && document.getElementById) ? 1: 0;

////////////////////////////////////////////////////
// routines for positioning the slideshow/preview //
////////////////////////////////////////////////////

var imagedir="javascript/images/preview/";
var posit;      // 0=top-right, 1=bottom-right
var lastX;      //last coordinates of preview pane
var lastY;
var previewWidth;
var previewHeight;
var scrollbarWidth;
var shortpause;
var longpause;
var pausetime;
var tim;          //timer
var countdown;    // count till next slideshow picture is to be shown. 0 if off.
var pics;
var hist;         //history, i.e. pieces shown most recently.
var visib;

function showlayer(lay){
        if(netscape){
                eval("document."+lay+".visibility='visible';");
        }else if(goodIE){
                document.all[lay].style.visibility='visible';
        }else{
                document.getElementById(lay).style.visibility="visible";
        }
}
function hidelayer(lay){
        if(netscape){
                eval("document."+lay+".visibility='hidden';");
        }else if(goodIE){
                document.all[lay].style.visibility='hidden';
        }else{
                document.getElementById(lay).style.visibility="hidden";
        }
}

function placelayer(lay,x,y){
        if(netscape){
                eval("document."+lay+".moveTo("+x+","+y+");");
        }else if(goodIE){
                document.all[lay].style.pixelLeft=x;
                document.all[lay].style.pixelTop=y;
        }else{
                var obj=document.getElementById(lay);
                obj.style.left=x;
                obj.style.top=y;
        }
}


function initialise()
{
        if( netscape || goodIE || mozilla) {
                previewWidth = 72;
                previewHeight = 72;
                scrollbarWidth = 16;
                posit=0;
                lastX=-1;
                lastY=-1;
                shortpause=20;
                longpause=60;
                pausetime=50;
                tim=0;
                countdown=1;

                // shift it into position and show it
                moveit();
                var s = getCookie("preview");
                visib= s? parseInt(s) : 1;
                
                if(visib){
                        showlayer("preview");
                }else{
                        hidelayer("preview");
                }
        
                if(netscape){
                        document.preview.onmouseover=jump;
                }
        
                // start the preview/slideshow  
                hist=new Array(-1,-1,-1,-1,-1,-1)
                pics=new preload(
                "Alexander's Star", "alexstar.gif",                             //0
                "Bandaged Pyraminx", "bandpyra.gif",
                "Beachball", "beachbll.gif",
                "Bicube", "bicube.gif",
                "The Brain", "brain.gif",
                "Brainball", "brainbll.gif",                                    //5
                "The Chinese Rings", "chinring.gif",
                "Rubik's Cube", "cube3.gif",
                "Professor's Cube", "cube5.gif",
                "Diamond", "diamond.gif",
                "Tricky Disky", "disky.gif",                                    //10
                "Dogic", "dogic.gif",
                "Hungarian Globe", "hungglob.gif",
                "Meier-Halpern Pyramid", "halpern.gif",
                "Impossiball", "impossib.gif",
                "The It Puzzle", "it.gif",                                      //15
                "Babylon Tower (Ivory Tower)", "ivory.gif",
                "Lights Out 2000", "lo2000.gif",
                "Massage Ball", "massage.gif",
                "Masterball", "master.gif",
                "Megaminx", "megaminx.gif",                                     //20
                "Missing Link", "misslink.gif",
                "Mozaika", "mozaika.gif",
                "Billiards Nineball Puzzle", "nineball.gif",
                "Nintendo Ten Billion Barrel", "nintendo.gif",
                "Octagon", "octagon.gif",                                       //25
                "Octahedron", "octahedr.gif",
                "The Orb / Orb-It", "orb.gif",
                "Orbix", "orbix.gif",
                "Hockey Puck", "puck.gif",
                "Port to Port", "port.gif",                                     //30
                "Pyraminx", "pyraminx.gif",
                "Pyramorphix", "pyramorf.gif",
                "Rubik's Revenge", "cube4.gif",
                "Roundy", "roundy.gif",
                "Rubik's Clock", "rubclock.gif",                                //35
                "Rubik's Dice", "rubdice.gif",
                "Rubik's Domino", "domino.gif",
                "Rubik's Magic", "magic.gif",
                "Rubik's Rings", "rubring.gif",
                "Rubik's Fifteen", "rubfift.gif",                               //40
                "Siamese Rubik's Cubes", "siamese.gif",
                "Skewb", "skewb.gif",
                "Spinout", "spinout.gif",
                "Square-1", "square1.gif",
                "Topspin / No. Crunch", "topspin.gif",                          //45
                "6 by 6", "tower.gif",
                "Rubik's Triamid", "triamid.gif",
                "Triple Cross", "triple.gif",
                "Turn'Push", "turnpush.gif",
                "Turnstile", "turnstil.gif",                                    //50
                "Ultimate Skewb", "ultimate.gif",
                "Whippit", "whippit.gif",
                "Tantrix", "tantrix.gif",
                "Towers of Hanoi", "hanoi.gif",
                "Rubik's Maze", "rubmaze.gif",                                  //55
                "Tetraminx", "tetramin.gif",
                "Create the Cube", "magiccrea.gif",
                "Fifteen Puzzle", "fifteen.gif",
                "Rubik's Pocket Cube", "cube2.gif",
                "Rubik's Magic Master Edition", "magicmast.gif",                  //60
                "BackSpin / Loophole", "backspin.gif",
                "Equator", "equator.gif",
                "Instant Insanity", "insanity.gif",
                "Bolygok","bolygok.gif",
                "Rubik's Cheese","cheese.gif",                                  //65
                "Saturn", "saturn.gif",
                "Ufo", "ufo.gif",
                "Gripple (russian version)", "gripple2.gif",
                "Massage ball", "massage2.gif",
                "Triple disky", "disky3.gif",                                   //70
                "Rubik's Rabbits", "rubrab.gif",
                "Atomic Chaos", "chaos.gif",
                "Hungarian Rings","hungring.gif",
                "Rubik's Shells","rubshll.gif",
                "Magic Balls","magicball.gif",                                   //75
                "Dino Cube","dinocube.gif",
                "Rainbow Cube","rainbow.gif",
                "Rashkey","rashkey.gif",
                "Rubik's Zig Zaw Puzzle","zigzaw.gif",
                "Mystic Iq Ball / Chromo Ball","iqball.gif",                    //80
                "Thomasball","thomas.gif",
                "Rubik's Tangle","tangle.gif",
                "Trillion","trillion.gif",
                "Rubik's Ufo","rubufo.gif",
                "Wisdom Ball / Mind Twister","wisdom.gif",                      //85
                "Gerdig Ufo","gerdig.gif",
                "Smart Alex","alex.gif",
                "Luminations","luminat.gif",
                "Gripple","gripple.gif",
                "Saturn (LD games)","saturnld.gif",                             //90
                "Row by Row","rowbyrow.gif",
                "Logi-Vip ball","logivip.gif",
                "Turn 12","turn12.gif",
                "Enigma","enigma.gif",
                "Educational logic game","topspin2.gif",                        //95
                "Ufo (Varia-Disk)","ufovaria.gif",
                "Mad Triad Challenge","madtriad.gif",
                "Mad Triad Handy","madtrih.gif",
                "Padlock","padlock.gif",
                "Rubik's Royal Brainteaser","royal.gif",                        //100
                "Lights Out","lightout.gif",
                "Puzzler","puzzchal.gif",
                "Tsukuda's Square","tsukuda.gif",
                "Diamond Style Puzzler","diamstyl.gif",
                "Rolling Cubes Puzzle","eightcub.gif",                          //105
                "Fool's Spool","foolspool.gif",
                "Lights Out Cube", "locube.gif",
                "Merlin", "merlin.gif",
                "Stern", "stern.gif",
                "Tantrix Rock", "tantrixr.gif",                                 //110
                "Varikon", "varikon.gif",
                "Rack'em up", "rackemup.gif",
                "Circle Puzzle", "circle.gif",
                "Ball-shaped 3x3x3 Puzzle", "cubeball.gif",
                "Diamond Puzzle", "cubediam.gif",                               //115
                "Rotos", "rotos.gif",
                "Buvos Golyok (instant insanity)", "insanity2.gif",
                "Lights Out Deluxe", "lodeluxe.gif",
                "Rubik's World", "world.gif",
                "Dreamball","dreamball.gif",                                    //120
                "Darth Maul puzzle head","darthmaul.gif",
                "K8-ball","k8ball.gif",
                "Octo","octo.gif",
                "MB Genius","genius.gif",
                "Virus","virus.gif",                                            //125
                "Zauberkreuz","kreuz.gif",
                "Great Gears","gears.gif",
                "Astrolabacus","astrolab.gif",
                "Homer Simpson Puzzle Head","homer.gif",
                "Nissan Micra Puzzle","nissan.gif",                             //130
                "Morph Puzzle","morph.gif",
                "Pyrix puzzle","pyrix.gif",
                "Mickey Mouse Puzzle Head","mickey.gif",
                "Drive Ya Crazy","crazy.gif",
                "Trio","trio.gif",                                              //135
                "Combo Puzzle","combo.gif",
                "Mini Lights Out","lomini.gif",
                "Lights Out, new design","loclass.gif",
                "Dizzy Rainbow","dizzy.gif",
                "Spectra","spectra.gif",                                        //140
                "Diamond 8-ball puzzle","eightbll.gif",
                "Butterfly Puzzle","butterfly.gif",
                "Rotascope","rotascope.gif",
                "Circus Puzzler","circus.gif",
                "Whirligig","whirligig.gif",                                    //145
                "Trixxy","trixxy.gif",
                "Transposer Tiffany","transposer.gif",
                "Transposer 6","transposer6.gif",
                "Stained","stained.gif",
                "Kaboozle","kaboozle.gif",                                      //150
                "Kinato","kinato.gif",
                "CMetrick","cmetrick.gif",
                "Pyrus puzzle","pyrus.gif",
                "Thinkominos","thinkomino.gif",
                "Izzi","izzi.gif",                                              //155
                "Crossteaser","crosstsr.gif",
                "Octacube","octacube.gif",
                "Pakovalec","pakovalec.gif",
                "Wisdom Ball II","wisdom2.gif",
                "Brain Twist","braintwist.gif",                                 //160
                "Jackpot","jackpot.gif",
                "Spot Colour Puzzle","spot.gif",
                "Roundy 4","roundy4.gif",
                "Cohan Circle","cohan.gif",
                "Transposer Bonbons","transbon.gif",                            //165
                "Raging Rapids","rapids.gif",
                "Combinescion","combinescion.gif",
                "Cmetrick Too","cmetrick2.gif",
                "Dodeca Nona","dodeca.gif",
                "SpongeBob puzzle", "spongebob.gif",                            //170
                "Swissmad","swissmad.gif",
                "Magic Rings","magicring.gif",
                "Think-a-Dot","thinkadot.gif",
                "Kep Korong","kepkorong.gif",
                "On The Level", "level.gif",                                    //175
                "Varikon 3x3x3", "varikon3.gif",
                "Peter's Black Hole","blackhole.gif",
                "Magic Jack","magicjack.gif",
                "IQube","iqube.gif",
                "Four Cube puzzle","fourcube.gif",                              //180
                "Planets","planets.gif",
                "Rainbow Puzzle","rainbowp.gif",
                "Snake Cube","snakecube.gif",
                "Hexadecimal Puzzle","hexadec.gif",
                "The Orbik","orbik.gif",                                        //185
                "Vulcan XL 25","vulcan.gif",
                "Uriblock / Mix Box","uriblock.gif",
                "King Ring / Sando Ring","kingring.gif",
                "Pyram","pyram.gif",
                "Kibble Cube","kibble.gif",                                     //190
                "Flip-Side","flipside.gif",
                "Columbus Egg / The X", "columbus.gif",
                "Octo Puzzle","disco.gif",
                "Panex","panex.gif",
                "Cmetrick Mini","cmetrick_mini.gif",                            //195
                "Farmland gears, Big Crop","farmgear_bigcrop.gif",
                "Farmland gears, Feed Lots","farmgear_feedlots.gif",
                "Farmland gears, Hay Ride","farmgear_hayride.gif",
                "Farmland gears, Plow Deep","farmgear_plowdeep.gif",
                "Battle gears, Mask","battlegear_mask.gif",                     //200
                "Battle gears, Spy","battlegear_spy.gif",
                "Pionir Cube","pionir.gif",
                "Varikon Box 2x2x2","varikon2.gif",
                "Inversion","inversion.gif",
                "Transposer Genesis","transgen.gif",                            //205
                "Clark's Cube","clark.gif",
                "Rubik's Mini Magic", "magicmini.gif",
                "Slide Rule Duel", "sliderule.gif",
                "(Mona Lisa) Code Breaker", "codebreak.gif",
                "Palette 21", "palette.gif",					//210
                "Cmetrick Too Hard", "cmetrick2h.gif",
                "The Great Pyramid", "pyramid.gif",
                "Im-puzzle-ball","impuzzle.gif",
                "Brain-chek","brainchek3.gif",
                "Frustr8tor","frustr8tor.gif",					//215
                "Magellán","magellan.gif",
                "Palette 7","palette7.gif",
                "Palette Mix 4","palettemix4.gif",
                "Slide Rule Duel Pentaplenty", "sliderulep.gif",
                "Slide Rule Duel Heptalive", "slideruleh.gif",			//220
                "Trio","triowood.gif",
                "Azig", "azig.gif",
                "Dodek Duo", "dodek.gif",
                "Floppy Cube", "floppy.gif",
                "Magnatease", "magnatease.gif",					//225
                "Marusenko Sphere", "marusenko.gif",
                "Mindlock", "mindlock.gif",
                "M&ouml;bius Line Puzzle", "moebius.gif",
                "New Seven Puzzle", "newseven.gif",
                "Tri-Trick", "tritrick.gif",					//230
                "Wanderrings", "wanderrings.gif",
                "Writer's Block", "writersblock.gif",
                "Dino Star", "dinostar.gif",
                "Nintendo Billion Star Barrel", "nintendostar.gif",
                "Oxo", "oxo.gif",						//235
                "Twisting Rings Puzzle", "codebreak2.gif",
                "Crossover", "crossover.gif",
                "Tower Cube 2x2x3","cube223.gif",
                "3x3x4","cube334.gif",
                "Cubedron","cubedron.gif",					//240
                "Cybedron","cybedron.gif",
                "6x6x6 V-Cube","cube6.gif",
                "7x7x7 V-Cube","cube7.gif",
                "Dual Circle","dualcircle.gif",
                "Robinson Roulette","robinson.gif",				//245
                "Gamze Lights Out","logamze.gif",
                "Arusloky","arusloky.gif",
                "Jing Pyraminx","jingpyra.gif",
                "Flowerminx","flowerminx.gif",
                "36 Cube","36cube.gif",						//250
                "Ball-B","ballbf.gif",
                "Crazy 4x4x4 Cube I","crazy444a.gif",
                "Crazy 4x4x4 Cube II","crazy444b.gif",
                "Crazy 4x4x4 Cube III","crazy444c.gif",
                "Super Floppy Cube","floppy2.gif",					//255
                "Imitation Super Floppy","floppy2b.gif",
                "Gear Cube","gearcube.gif",
                "Gear Cube Extreme","gearcube2.gif",
                "Holey Megaminx","megaminxh.gif",
                "Face-turning Octahedron","octaface.gif",			//260
                "Pyraminx Crystal","pyracrys.gif",
                "Rubik's Slide","rubslide.gif",
                "SphereXyz","spherexyz.gif",
                "Starlet/Swesdotchka","starlet.gif"
                );
                
                tim=setTimeout("checktime();", pausetime);
        }
}

function moveit()
{
        var x,y,y0,y1;
        if( netscape ){
                x = self.innerWidth + self.pageXOffset - previewWidth - scrollbarWidth;
                y0 = self.pageYOffset;
                y1 = self.innerHeight + y0 - previewHeight;
        }else{
                x = document.body.clientWidth + document.body.scrollLeft - previewWidth;
                y0 = document.body.scrollTop;
                y1 = document.body.clientHeight + y0 - previewHeight;
        }
        y = posit?y1:y0;
        if(y!=lastY || x!=lastX){
                placelayer("preview", x, y );
                lastX=x;
                lastY=y;
        }
}

function insertpreviewstyle()
{
        if( netscape || goodIE || mozilla){
                document.writeln('<STYLE TYPE="text/css">\n'+
                        "#preview{position:absolute; left:0; top:0; width:1; visibility:visible;}\n"+
                        "</STYLE>" );
        }
}

function insertpreviewlayer()
{
        if( netscape || goodIE || mozilla){
                document.writeln("<div id=preview><img src='"+imagedir+"loading.gif' width=64 height=64 border=4 name='previmg' onmouseover='jump();'></div>");
        }
}

function jump()
{
        posit=1-posit;
        moveit();
}



////////////////////////////////////////////////////
//   routines for running the slideshow/preview   //
////////////////////////////////////////////////////

function changeimage(lay,im,nw){
        if(netscape){
                document.layers[lay].document.images[im].src=nw;
        }else{
                eval("document.images."+im+".src=nw");
        }
}

function preload(){
    this.length=preload.arguments.length;
    for (var i=0;i<this.length;i++){
        this[i]=preload.arguments[i];
        i++;
        this[i]=new Image();
        this[i].src=imagedir+preload.arguments[i];
    }
}


function show(index){
    changeimage("preview", "previmg", pics[index*2+1].src );
    window.status=pics[index*2];
}


function checktime(){
        if( netscape || goodIE ||mozilla){
                if(visib){
                        //update timer and change picture if necessary
                        clearTimeout(tim);
                        if(countdown == 0){     //no slideshow - just a preview image
                        }else if(countdown > 1){
                                //still waiting till next picture due
                                countdown--;
                        }else{
                                //show next picture
                                //find one that was not recently shown
                                var c,x,f;
                                do{
                                        f=0;
                                        c=Math.floor(Math.random()*(pics.length/2));
                                        for(x=0;x<hist.length;x++){
                                                if(hist[x]==c) {f=1;break;}
                                        }
                                }while(f);
                                //add it to history list
                                for(x=hist.length-1;x>=1;x--) hist[x]=hist[x-1];
                                hist[0]=c;
                                //show it
                                show(c);
                                //next picture to be shown soon
                                countdown=shortpause;
                        }
                        // position preview pane and set timer
                        moveit();
                        tim=setTimeout("checktime()", pausetime);
                }
        }
}

// Show chosen puzzle
function prev(index){
        if( visib ){
                if( index>=0 ){
                        // stop slideshow
                        clearTimeout(tim);
                        countdown=0;
                        //show new picture
                        show(index);
                        // position preview pane and set timer
                        moveit();
                        tim=setTimeout("checktime()", pausetime);
                        return(true);
                }else{
                        return(true);
                }
        }else{
                return(false);
        }
}

// show next slide in slideshow, or start slideshow
function slides(){
        if( netscape || goodIE || mozilla){
                if(visib==1){
                        clearTimeout(tim);
                        countdown = longpause;
                        moveit();
                        tim=setTimeout("checktime()", pausetime);
                }
        }
}

function togglepreview(){
    if( netscape || goodIE || mozilla){
        if( visib ){
                hidelayer("preview");
                visib=0;
                window.status="";
        }else{
                showlayer("preview");
                visib=1;
                countdown=1;
                slides();
        }
        setCookie("preview",visib,3 * 365 * 24 * 60 * 60 * 1000)
    }else{
        alert("The preview pane requires a\nbrowser that supports layers,\ne.g. Netscape 4 or IE5.");
    }
}

//////////////////////////////////////////
//   routines for controlling cookies   //
//////////////////////////////////////////
function setCookie(name, value, time) {
        var ex="";
        if( time ){
                var now = new Date();
                fixDate(now);
                now.setTime(now.getTime() + time);
                ex = "; expires=" + now.toGMTString();
        }
        document.cookie = name + "=" + escape(value) + ex;
}
function getCookie(name) {
        var n = name + "=";
        var i1 = document.cookie.indexOf(n);
        if (i1 == -1) return null;
        var i2 = document.cookie.indexOf(";", i1 + n.length);
        if (i2 == -1) i2 = document.cookie.length;
        return unescape(document.cookie.substring(i1 + n.length, i2));
}
function fixDate(date) {
        var base = new Date(0);
        var skew = base.getTime();
        if (skew > 0) date.setTime(date.getTime() - skew)
}
