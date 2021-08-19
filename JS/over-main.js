document.getElementById("bar").addEventListener("mouseup", () => {
    document.getElementById("bar").animate([{
        opacity: '100%',
        width: '200px'
    }, {
        opacity: '0.8',
        width: '100px'
    }], {
        duration: 500,
        iterations: 1,
        easing: 'ease-out'
    })
});

/*document.addEventListener("mousedown",(event)=>{
    
    
    var more_inf = document.getElementById("more_info");
    console.log("y="+event.clientY);
    console.log(event.clientY/window.innerHeight);
    more_inf.style.top = (event.clientY/window.innerHeight)*100 + "%" ;
    
});*/


$(document).ready(function () {
    $(document).mousedown(function () {
        $(this).data('mousedown', true);
    });
    $('#more_info').mousedown(function () {
        $('#more_info').data('mousedown', true);
    });
    $(document).mouseup(function () {
        $(this).data('mousedown', false);
    });
    $('#more_info').mouseup(function () {
        $('#more_info').data('mousedown', false);
    });

    $(document).mousemove(function (e) {
        if ($(this).data('mousedown') && $('#more_info').data('mousedown')) {
            /*console.log('X: ' + e.pageX + ', Y: ' + e.pageY);*/
            document.getElementById("more_info").style.top = (e.pageY / window.innerHeight) * 100 + "%";
            document.getElementById("actual_data").style.opacity = (-1 * (e.pageY / window.innerHeight) * 100 + 100) + "%";
            pull_gone();
        }
    });
});


function pull_gone() {
    if (document.getElementById("more_info").offsetTop < 100) document.getElementById("pullup-sun").style.display = "none";
}



document.getElementById("more_info").addEventListener("mouseup", (event) => {
    var more_inf = document.getElementById("more_info");
    /*.log((event.clientY/window.innerHeight)>0.5);*/
    if ((event.clientY / window.innerHeight) > 0.5) {
        more_inf.animate([{
            top: '94%'
        }], {
            duration: 500,
            iterations: 1,
            easing: 'ease-in-out'
        });
        setTimeout(() => {
            document.getElementById("more_info").style.top = "94%";
        }, 500);
    } else {
        more_inf.animate([{
            top: '2%'
        }], {
            duration: 500,
            iterations: 1,
            easing: 'ease-in-out'
        });
        setTimeout(() => {
            document.getElementById("more_info").style.top = "2%";
        }, 500);
    };

});


var rocket_ratio = 0;
var quiz_rat = 0
var ratio = [];
/*$(document).ready(()=>{
var planets = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune","pluto"];
for (var index in planets){
    ratio[index] = document.getElementsByClassName("enlarge--planet")[index].offsetWidth/document.getElementsByClassName("enlarge--cont")[index].offsetWidth ;
}
});
*/
function calc_ratio() {
    var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
    for (var index in planets) {
        ratio[index] = document.getElementsByClassName("enlarge--planet")[index].offsetWidth / document.getElementsByClassName("enlarge--cont")[index].offsetWidth;

    }
    rocket_ratio = (window.innerWidth * 3) / 100;
    quiz_rat = (window.innerWidth * 13) / 100;
    /* console.log("original_rat = ", rocket_ratio);*/
}

function remap() {
    /*ratio[i] = (document.getElementsByClassName("enlarge--planet")[i].offsetWidth/document.getElementsByClassName("enlarge--cont")[i].offsetWidth);*/
    calc_ratio();
    setTimeout(() => {
        /*console.log("wait : " + document.getElementById("solasys").offsetWidth);*/

        var solasys_width = document.getElementById("solasys").offsetWidth;
        var solasys_height = document.getElementById("solasys").offsetHeight;

        document.getElementById("planet_labels").style.width = solasys_width + "px";
        document.getElementById("planet_labels").style.height = solasys_height + "px";
        /*console.log("planetlwidth=" + document.getElementById("planet_labels").offsetWidth);
        console.log("planetlheight=" + document.getElementById("planet_labels").offsetHeight);*/
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("nav").style.opacity = "0%";
    document.getElementById("nav").style.display = "none";
    document.getElementById("pullup-sun").style.opacity = "0%";
    var sun_text = document.getElementById("sun_text");
    sun_text.style.color = "transparent";

    setTimeout(() => {
        sun_text.style.background = "white";
        sun_text.animate([{
            transform: 'translateX(7vh)',
            width: '0',

        }, {
            transform: 'translateX(0px)',
            width: '7.5%'

        }], {
            duration: 800,
            fill: 'forwards',
            easing: 'ease-in-out',
            iterations: 1
        });
        setTimeout(() => {
            sun_text.style.color = "white";
            sun_text.animate([{
                width: '7.5%'
            }, {
                width: '0'
            }], {
                duration: 1000,
                fill: 'forwards',
                easing: 'ease-in-out',
                iterations: 1
            });
        }, 1000);
    }, 6800);
});


document.addEventListener('DOMContentLoaded', () => {
    inf_hide();
    calc_ratio();
    aabi(document.getElementById("mercury_text"), 2200, 9.5);
    aabi(document.getElementById("venus_text"), 1700, 7);
    aabi(document.getElementById("earth_text"), 1200, 20);
    aabi(document.getElementById("mars_text"), 1700, 6);
    aabi(document.getElementById("jupiter_text"), 1700, 8.5);
    aabi(document.getElementById("saturn_text"), 1700, 8);
    aabi(document.getElementById("uranus_text"), 2700, 8.5);
    aabi(document.getElementById("neptune_text"), 3200, 10.5);
    aabi(document.getElementById("pluto_text"), 3700, 9.5);
});

function aabi(planet_name, offset, w) {
    if (planet_name == document.getElementById("earth_text")) document.getElementById("earth_text_plus").style.color = "transparent";
    if (planet_name == document.getElementById("pluto_text")) document.getElementById("pluto_text_plus").style.color = "transparent";
    planet_name.style.color = "transparent";
    setTimeout(() => {
        planet_name.style.background = "white";
        planet_name.animate([{

            width: '0',

        }, {

            width: w + '%'

        }], {
            duration: 800,
            fill: 'forwards',
            easing: 'ease-in-out',
            iterations: 1
        });
        setTimeout(() => {
            if (planet_name == document.getElementById("earth_text")) document.getElementById("earth_text_plus").style.color = "white";
            if (planet_name == document.getElementById("pluto_text")) document.getElementById("pluto_text_plus").style.color = "white";
            planet_name.style.color = "white";
            planet_name.animate([{
                width: w + '%'
            }, {
                width: '0'
            }], {
                duration: 1000,
                fill: 'forwards',
                easing: 'ease-in-out',
                iterations: 1
            });
        }, offset);
    }, 6800);
}


document.addEventListener('DOMContentLoaded', () => {
    reveal_up(document.getElementById("sun_line"), '15%', 15);
    reveal_up(document.getElementById("venus_line"), '15%', 15);
    reveal_up(document.getElementById("mars_line"), '23%', 23);
    reveal_up(document.getElementById("saturn_line"), '16%', 16);
    reveal_up(document.getElementById("neptune_line"), '16%', 16);
    reveal_down(document.getElementById("mercury_line"), '18%');
    reveal_down(document.getElementById("earth_line"), '25%');
    reveal_down(document.getElementById("jupiter_line"), '16%');
    reveal_down(document.getElementById("uranus_line"), '16%');
    reveal_down(document.getElementById("pluto_line"), '30%');
    reveal_sys(document.getElementById("vid-cont"));
    reveal_main();
});

function reveal_up(line_name, h, tr) {
    setTimeout(() => {
        line_name.animate([{
            transform: 'translateY(' + tr + 'vh)',
            height: '0'
        }, {
            transform: 'translateY(0px)',
            height: h
        }], {
            duration: 1500,
            fill: 'forwards',
            easing: 'ease-in-out',
            iterations: 1
        });
    }, 5000);
};

function reveal_down(line_name, h) {
    setTimeout(() => {
        line_name.animate([{

            height: '0'
        }, {

            height: h
        }], {
            duration: 1500,
            fill: 'forwards',
            easing: 'ease-in-out',
            iterations: 1
        });
    }, 5000);
};


function reveal_sys(sol) {
    sol.animate([{
        /*opacity : '0' ,*/
        transform: 'translateX(50vw)'
    }, {
        /* opacity : '100%',*/
        transform: 'translateX(0)'
    }], {
        duration: 5000,
        fill: 'forwards',
        easing: 'ease-in-out',
        iterations: 1
    });
};


function reveal_main() {
    var sol = document.getElementById("sola");
    var sol_desc = document.getElementById("solaint");
    sol.animate([{
        opacity: '0%',
        transform: 'translateY(-6vh)'
    }, {
        opacity: '100%',
        transform: 'translateY(0)'
    }], {
        duration: 5000,
        fill: 'forwards',
        easing: 'ease-in',
        iterations: 1
    });
    sol_desc.animate([{
        opacity: '0%',
        transform: 'translateY(6vh)'
    }, {
        opacity: '100%',
        transform: 'translateY(0)'
    }], {
        duration: 5000,
        fill: 'forwards',
        easing: 'ease-in',
        iterations: 1
    });
};





function aabi_hov(txt, w) {
    txt.animate([{
        width: '0%'
    }, {
        width: w + '%',
        color: 'black'
    }], {
        duration: 700,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"

    });
};

function fara_hov(txt, w) {
    txt.animate([{
        width: w + '%',
        color: 'black'
    }, {
        width: '0%',
        color: 'white'
    }], {
        duration: 700,
        easing: 'ease-out',
        iterations: 1,
        fill: "forwards"

    });
};
/**/
var i = 0;

function enlarge_planet(p, wo, w, t, x) {

    switch (p) {
        case 'mercury':
            i = 0;
            break;
        case 'venus':
            i = 1;
            break;
        case 'earth':
            i = 2;
            break;
        case 'mars':
            i = 3;
            break;
        case 'jupiter':
            i = 4;
            break;
        case 'saturn':
            i = 5;
            break;
        case 'uranus':
            i = 6;
            break;
        case 'neptune':
            i = 7;
            break;
        case 'pluto':
            i = 8;
            break;
        default:
            i = 0;
            break;
    }
    var planet_desc = document.getElementById(p + "--desc");
    var planet_anim = document.getElementById(p + "--vid");
    var enlarge_logo = document.getElementsByClassName("enlarge--cont")[i];
    var beam = document.getElementsByClassName("beamo")[i];
    if (document.getElementsByClassName("enlarge--planet")[i].offsetWidth / document.getElementsByClassName("enlarge--cont")[i].offsetWidth == ratio[i]) {
        beam.animate([{
            opacity: '0%'
        }, {
            opacity: '50%'
        }], {
            duration: 1000,
            easing: 'ease-in',
            iterations: 1,
            fill: "forwards"
        });
        planet_desc.animate([{
                opacity: '100%'
            },
            {
                transform: 'translateX(-30vw)',
                opacity: '0'
            }
        ], {
            duration: 1300,
            easing: 'ease-out',
            iterations: 1,
            fill: "forwards"
        });
        planet_anim.animate([{

            transform: 'translateX(-' + x + 'vw)',
            width: w + 'vw',
            marginTop: t + 'vh'

        }], {
            duration: 1500,
            easing: 'ease-in-out',
            iterations: 1,
            fill: "forwards"
        });

        enlarge_logo.animate([{
            width: '20%'
        }, {
            width: '25%'
        }], {
            duration: 500,
            easing: 'ease-in-out',
            iterations: 1,
            fill: "forwards"
        });

    } else {
        beam.animate([{
            opacity: '50%'
        }, {
            opacity: '0%'
        }], {
            duration: 1000,
            easing: 'ease-out',
            iterations: 1,
            fill: "forwards"
        });
        planet_desc.animate([{
            transform: 'translateX(-30vw)',
            opacity: '0'

        }, {
            transform: 'translateX(0)',
            opacity: '100'
        }], {
            duration: 1300,
            easing: 'ease-in',
            iterations: 1,
            fill: "forwards"
        });
        planet_anim.animate([{
            transform: 'translateX(0vw)',
            width: wo + 'vw',
            marginTop: '0'

        }], {
            duration: 1500,
            easing: 'ease-in-out',
            iterations: 1,
            fill: "forwards"
        });
        enlarge_logo.animate([{
            width: '25%'
        }, {
            width: '20%'
        }], {
            duration: 500,
            easing: 'ease-in-out',
            iterations: 1,
            fill: "forwards"

        });
    }

};

function show_planet(p, l, m) {
    var cov = document.getElementById("nav-" + p + "-alt");
    var c_planet = document.getElementById("nav-" + p);
    var p_planet = document.getElementById("nav-p-" + p);
    cov.animate([{
        opacity: '100%',
        width: l + 'vw',
        height: l + 'vw'
    }, {
        opacity: '0%',
        width: '0',
        height: '0'
    }], {
        duration: 500,
        easing: 'ease-out',
        iterations: 1,
        fill: "forwards"
    });
    c_planet.animate([{
        opacity: '50%',
        width: l + 'vw',
        height: l + 'vw'
    }, {
        opacity: '100%',
        width: m + 'vw',
        height: m + 'vw'
    }], {
        duration: 500,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"
    });
    setTimeout(() => {
        c_planet.animate([{
            transform: 'rotate(0deg)'
        }, {
            transform: 'rotate(-10deg)'
        }, {
            transform: 'rotate(10deg)'
        }, {
            transform: 'rotate(0deg)'
        }], {
            duration: 800,
            easing: 'ease-in-out',
            iterations: 1,
            fill: "forwards"
        });
    }, 700);
    p_planet.animate([{
        fontSize: '1vw',
        opacity: '100%',
        transform: 'translateY(6vh)'
    }], {
        delay: 200,
        duration: 300,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"
    });

}


function hide_planet(p, l) {
    var cov = document.getElementById("nav-" + p + "-alt");
    var c_planet = document.getElementById("nav-" + p);
    var p_planet = document.getElementById("nav-p-" + p);

    cov.animate([{
        opacity: '0%',
        width: '0',
        height: '0'
    }, {
        opacity: '100%',
        width: l + 'vw',
        height: l + 'vw'
    }], {
        duration: 500,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"
    });
    c_planet.animate([{
        opacity: '100%',

    }, {
        opacity: '50%',
        width: l + 'vw',
        height: l + 'vw'
    }], {
        duration: 500,
        easing: 'ease-out',
        iterations: 1,
        fill: "forwards"
    });

    p_planet.animate([{
        opacity: '0%',
        fontSize: '0',
        transform: 'translateY(0)'
    }], {
        duration: 300,
        easing: 'linear',
        iterations: 1,
        fill: "forwards"
    });
}

function rotate_galaxy() {
    document.getElementById("nav-galaxy").animate([{
        transform: 'rotate(360deg)'
    }], {
        duration: 500,
        easing: 'ease-in-out',
        iterations: 1

    });
    document.getElementById("nav-p-over").animate([{
        fontSize: '1vw',
        opacity: '100%',
        transform: 'translateY(6vh)'
    }], {
        duration: 500,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"
    });

}

function galaxy_p_hide() {
    document.getElementById("nav-galaxy").animate([{
        transform: 'rotate(-360deg)'
    }], {
        duration: 800,
        easing: 'ease-in-out',
        iterations: 1

    });
    document.getElementById("nav-p-over").animate([{
        fontSize: '0',
        opacity: '0%',
        transform: 'translateY(0)'
    }], {
        duration: 300,
        easing: 'ease-out',
        iterations: 1,
        fill: "forwards"
    });

}
/*
function obf(){
    var text = baffle("#earth--desc") ; 
    text.set({
        characters : '_/-.+▒' ,
        speed : 100
    });
    text.start();
    text.reveal(1000);
}
*/

function hand_pull() {
    document.getElementById("pullup-sun").animate([{
        transform: 'translateY(0)',
        opacity: '50%',
        offset: 0.1
    }, {
        transform: 'translateY(-2vh)',
        opacity: '100%',
        offset: 0.3

    }, {
        transform: 'translateY(0)',
        opacity: '50%',
        offset: 0.5
    }], {
        duration: 5000,
        easing: 'ease-in-out',
        iterations: Infinity,
        direction: 'alternate',
        fill: "forwards"
    });
}



$(document).ready(() => {
    document.getElementById("mars--vid").playbackRate = 3;
    document.getElementById("pluto--vid").playbackRate = 3;
    document.getElementById("uranus--vid").playbackRate = 3;
    document.getElementById("sun--vid").playbackRate = 2;
    document.getElementById("neptune--vid").playbackRate = 2;
    document.getElementById("earth--vid").playbackRate = 1.5;
    document.getElementById("venus--vid").playbackRate = 1.8;
    document.getElementById("saturn--vid").playbackRate = 1.5;
    /*counter_fix = 1 ;*/
});



var over_clicked = false;

function nav_var_hide() {
    over_clicked = true;
    inf_hide();
    quiz_popdown();
};

var scroll_pos = 0;


var scrollTimer = -1;

function bodyScroll() {
    document.body.style.backgroundColor = "white";

    if (scrollTimer != -1)
        clearTimeout(scrollTimer);

    scrollTimer = window.setTimeout("scrollFinished()", 500);
}

function scrollFinished() {
    document.body.style.backgroundColor = "red";
}


function track_left() {

    setTimeout(() => {
        fly_from_right();
        setTimeout(() => {
            setTimeout(() => {
                quiz_popup();
                /*  console.log("here?");*/
            }, 1000);

            wobble();
        }, 4800);
    }, 200);
}

function track_right() {

    setTimeout(() => {
        fly_from_left();
        setTimeout(() => {
            setTimeout(() => {
                quiz_popup();
            }, 1000);
            wobble();

        }, 4000);
    }, 200);
}

function rocket_track() {
    document.getElementById("rocket").style.opacity = "100%";

    if ((document.body.getBoundingClientRect()).right > scroll_pos) {
        /* console.log("scrolling_left");*/
        /*
        rocket_bye_right();
        setTimeout(() => {
            fly_from_right();
            setTimeout(() => {
                setTimeout(()=>{quiz_popup();},1000);
                wobble();
            }, 4800);
        }, 200);
        */

        rocket_bye_right();
        if (scrollTimer != -1)
            clearTimeout(scrollTimer);

        scrollTimer = window.setTimeout("track_left()", 2000);

    } else {
        /*console.log("scrolling_right");*/
        /*
        rocket_bye_left();
        setTimeout(() => {
            fly_from_left();
            setTimeout(() => {
                setTimeout(()=>{quiz_popup();},1000);
                wobble();
            }, 4000);
        }, 200);*/
        rocket_bye_left();
        if (scrollTimer != -1)
            clearTimeout(scrollTimer);

        scrollTimer = window.setTimeout("track_right()", 2000);
    }
    scroll_pos = (document.body.getBoundingClientRect()).right;
}

function rocket_bye_left() {
    document.getElementById("rocket").animate([{
        marginLeft: '-15vw'
    }], {
        duration: 500,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"
    });
}

function rocket_bye_right() {
    document.getElementById("rocket").animate([{
        marginLeft: '110vw'
    }], {
        duration: 800,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"
    });
}

function scroll_act() {
    /* rocket_track();*/
    window.addEventListener("scroll", () => {
        /*rocket_track();*/
        if (over_clicked == false) {

            /*setTimeout(() => {
                document.getElementById("rocket").style.visibility = "visible";
            }, 300);*/

            setTimeout(() => {
                document.getElementById("nav").animate([{
                    opacity: "100%"
                }], {
                    delay: 100,
                    duration: 500,
                    fill: "forwards",
                    easing: 'ease-in-out',
                    iterations: 1
                });
                document.getElementById("pullup-sun").animate([{
                    opacity: "100%"
                }], {
                    delay: 3000,
                    duration: 3000,
                    fill: "forwards",
                    easing: 'ease-in-out',
                    iterations: 1
                });

            }, 500);
            document.getElementById("nav").animate([{
                opacity: "0%"
            }], {
                duration: 500,
                fill: "forwards",
                easing: 'ease-in-out',
                iterations: 1
            });
            document.getElementById("pullup-sun").animate([{
                opacity: "0%"
            }], {
                duration: 1000,
                fill: "forwards",
                easing: 'ease-in-out',
                iterations: 1
            });
        } else {

            /*setTimeout(()=>{
            document.getElementById("rocket").style.visibility = "hidden"; },100);*/
            document.getElementById("nav").animate([{
                opacity: "0%"
            }], {
                duration: 500,
                fill: "forwards",
                easing: 'ease-in-out',
                iterations: 1
            });
            document.getElementById("pullup-sun").animate([{
                opacity: "0%"
            }], {
                duration: 1000,
                fill: "forwards",
                easing: 'ease-in-out',
                iterations: 1
            });
            over_clicked = true;
            setTimeout(() => {
                document.getElementById("nav").style.display = "none";
                /*document.getElementById("rocket").style.dispvisibilitylay = "none";*/
            }, 600);
        }

    });
};

document.addEventListener("scroll", () => {
    if (over_clicked == false) {
        setTimeout(() => {
            document.getElementById("rocket").style.visibility = "visible";
        }, 300);
        rocket_track();

    } else {

        setTimeout(() => {
            document.getElementById("rocket").style.visibility = "hidden";
        }, 100);
    }
});

function nav_rev() {

    inf_show();
    hand_pull();
    document.getElementById("nav").style.display = "flex";
    over_clicked = false;
    document.getElementById("nav").animate([{
        opacity: "0%"
    }, {
        opacity: "100%"
    }], {
        delay: 1000,
        duration: 1000,
        fill: "forwards",
        easing: 'ease-in-out',
        iterations: 1
    });
    document.getElementById("pullup-sun").animate([{
        opacity: "0%"
    }, {
        opacity: "50%"
    }], {
        delay: 1500,
        duration: 1000,
        easing: 'ease-in-out',
        iterations: 1
    });
    setTimeout(() => {
        scroll_act();
    }, 2200);

}


document.addEventListener("mousemove", (event) => {
    /* console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);*/
    if ((event.clientY < 145) && (event.clientX > 440 && event.clientX < 1080) && (document.getElementById("more_info").offsetTop > 130) && (!scaled)) {
        document.getElementById("nav").animate([{
            transform: 'translateY(0vh)'
        }], {
            duration: 1000,
            fill: "forwards",
            easing: 'ease-in-out',
            iterations: 1
        });
    } else {
        document.getElementById("nav").animate([{
            transform: 'translateY(-20vh)'
        }], {
            duration: 1000,
            fill: "forwards",
            easing: 'ease-in-out',
            iterations: 1
        });
    }
});

function inf_hide() {
    document.getElementById("more_info").animate([{
        transform: 'translateY(20vh)'
    }], {
        duration: 600,
        fill: "forwards",
        easing: 'ease-in-out',
        iterations: 1
    })
}

function inf_show() {
    document.getElementById("more_info").animate([{
        transform: 'translateY(20vh)'
    }, {
        transform: 'translateY(0vh)'
    }], {
        delay: 1000,
        duration: 1000,
        fill: "forwards",
        easing: 'ease-in-out',
        iterations: 1
    })
}


function laod_data(x) {
    var planet_type = '';
    var planet_type_desc = '';
    var avg_orbit_dist = '';
    var mean_orbit_vel = '';
    var orbit_ecc = '';
    var eq_incl = '';
    var eq_radius = '';
    var eq_circomf = '';
    var volume = '';
    var mass = '';
    var surface_area = '';
    var surface_gravity = '';
    var atm_const = '';
    var n_moons = '';
    var img_src = '';
    var img_pub = '';
    var img_desc = '';
    if (x == 'sun') {
        planet_type = "NOT A PLANET, IT'S A STAR";
        planet_type_desc = "";
        avg_orbit_dist = "No local orbit";
        mean_orbit_vel = "No local orbit";
        orbit_ecc = "No local orbit";
        eq_incl = "7.25 (with respect to the ecliptic)";
        eq_radius = "695,508 km";
        eq_circomf = "4,370,005.6 km";
        volume = "1,409,272,569,059,860,000 km³";
        mass = "1,989,100,000,000,000,000,000,000,000,000 kg";
        surface_area = "6,078,747,774,547 km²";
        surface_gravity = "274.0 m/s²";
        atm_const = "Hydrogen, Helium";
        n_moons = "0";
        img_src = "img/venustransit.jpg";
        img_pub = "Source: NASA | Published : 5/6/12";
        img_desc = "On June 5 2012, SDO collected images of the rarest predictable solar event—the transit of Venus across the face of the sun.";
    }
    if (x == 'mercury') {
        planet_type = "TERRESTRIAL";
        planet_type_desc = "(Composed primarily of carbonaceous or silicate rocks or metals.)";
        avg_orbit_dist = "57,909,227 km";
        mean_orbit_vel = "170,503 km/h";
        orbit_ecc = "0.20563593";
        eq_incl = "0 degrees";
        eq_radius = "2,439.7 km";
        eq_circomf = "15,329.1 km";
        volume = "60,827,208,742 km³";
        mass = "330,104,000,000,000,000,000,000 kg";
        surface_area = "74,797,000 km²";
        surface_gravity = "3.7 m/s²";
        atm_const = "Oxygen, Sodium, Hydrogen, Helium and Potassium.";
        n_moons = "0";
        img_src = "img/PIA13508.jpg";
        img_pub = "Source: NASA | Published : 4/4/18";
        img_desc = "This mosaic of NAC images shows the impact crater Hokusai, located on Mercury at a latitude of 58°N.";
    }
    if (x == 'venus') {
        planet_type = "TERRESTRIAL";
        planet_type_desc = "(Composed primarily of carbonaceous or silicate rocks or metals.)";
        avg_orbit_dist = "108,209,475 km";
        mean_orbit_vel = "126,074 km/h";
        orbit_ecc = "0.00677672";
        eq_incl = "177.3 degrees (retrograde rotation)";
        eq_radius = "6,051.8 km";
        eq_circomf = "38,024.6 km";
        volume = "928,415,345,893 km³";
        mass = "4,867,320,000,000,000,000,000,000 kg";
        surface_area = "460,234,317km²";
        surface_gravity = "8.87 m/s²";
        atm_const = "Carbon Dioxide, Nitrogen.";
        n_moons = "0";
        img_src = "img/2524_PIA23791.jpg";
        img_pub = "Source: JPL-Caltech | Published : 8/6/20";
        img_desc = "As it sped away from Venus, NASA's Mariner 10 spacecraft captured this seemingly peaceful view of a planet the size of Earth, wrapped in a dense, global cloud layer.";
    }
    if (x == 'earth') {
        planet_type = "TERRESTRIAL";
        planet_type_desc = "(Composed primarily of carbonaceous or silicate rocks or metals.)";
        avg_orbit_dist = "149,598,262 km";
        mean_orbit_vel = "107,218 km/h";
        orbit_ecc = "0.01671123";
        eq_incl = "23.4393 degrees";
        eq_radius = "6,371.00 km";
        eq_circomf = "40,030.2 km";
        volume = "1,083,206,916,846 km³";
        mass = "5,972,190,000,000,000,000,000,000 kg";
        surface_area = "510,064,472 km²";
        surface_gravity = "9.80665 m/s²";
        atm_const = "Nitrogen, Oxygen.";
        n_moons = "1";
        img_src = "img/169736008_298534151639801_5687362020776350739_n.jpg";
        img_pub = "Source: TELNET | Published : 7/4/21";
        img_desc = "The first pictures of the Earth with Tunisian eyes, taken by the Tunisian satellite, Challenge One.<br>Challenge One , in its orbit , makes one complete rotation around the earth every 90 minutes.";
    }
    if (x == 'mars') {
        planet_type = "TERRESTRIAL";
        planet_type_desc = "(Has a central core, a rocky mantle, and a solid crust.)";
        avg_orbit_dist = "227,943,824 km";
        mean_orbit_vel = "86,677 km/h";
        orbit_ecc = "0.0933941";
        eq_incl = "25.2 degrees";
        eq_radius = "3,389.5 km";
        eq_circomf = "21,296.9 km";
        volume = "163,115,609,799 km³";
        mass = "641,693,000,000,000,000,000,000 kg";
        surface_area = "144,371,391 km²";
        surface_gravity = "3.71 m/s²";
        atm_const = "Carbon Dioxide, Nitrogen, Argon.";
        n_moons = "2";
        img_src = "img/mars_july18.png";
        img_pub = "Source: NASA | Published : 30/7/18";
        img_desc = "NASA’s Hubble Space Telescope photographed Mars on July 18, 2018 near its closest approach to Earth since 2003. observed near opposition, when the Sun, Earth and Mars are lined up.";
    }

    if (x == 'jupiter') {
        planet_type = "GAS GIANT";
        planet_type_desc = "(Composed primarily of hydrogen and helium.)";
        avg_orbit_dist = "778,340,821 km";
        mean_orbit_vel = "47,002 km/h";
        orbit_ecc = "0.0.04838624";
        eq_incl = "3.1 degrees";
        eq_radius = "69,911 km";
        eq_circomf = "439,263.8 km";
        volume = "1,431,281,810,739,360 km³";
        mass = "1,898,130,000,000,000,000,000,000,000 kg";
        surface_area = "61,418,738,571 km²";
        surface_gravity = "24.79 m/s²";
        atm_const = "Hydrogen, Helium.";
        n_moons = "53";
        img_src = "img/jup.jpg";
        img_pub = "Source: ESA | Published : 12/8/19";
        img_desc = "This new Hubble Space Telescope view of Jupiter reveals the giant planet's trademark Great Red Spot.";
    }
    if (x == 'saturn') {
        planet_type = "GAS GIANT";
        planet_type_desc = "(Composed primarily of hydrogen and helium.)";
        avg_orbit_dist = "1,426,666,422 km";
        mean_orbit_vel = "34,701 km/h";
        orbit_ecc = "0.05386179";
        eq_incl = "26.7 degrees";
        eq_radius = "58,232 km";
        eq_circomf = "365,882.4 km";
        volume = "827,129,915,150,897 km³";
        mass = "568,319,000,000,000,000,000,000,000 kg";
        surface_area = "42,612,133,285 km²";
        surface_gravity = "10.4 m/s²";
        atm_const = "Hydrogen, Helium.";
        n_moons = "53";
        img_src = "img/PIA01364.jpg";
        img_pub = "Source: JPL | Published : 5/12/98";
        img_desc = "";
    }
    if (x == 'uranus') {
        planet_type = "ICE GIANT";
        planet_type_desc = "(Composed primarily of 'ices',such as water, methane, and ammonia.)";
        avg_orbit_dist = "2,870,658,186 km";
        mean_orbit_vel = "24,477 km/h";
        orbit_ecc = "0.04725744";
        eq_incl = "97.8 degrees (retrograde rotation)";
        eq_radius = "25,362 km";
        eq_circomf = "159,354.1 km";
        volume = "68,334,355,695,584 km³";
        mass = "86,810,300,000,000,000,000,000,000 kg";
        surface_area = "8,083,079,690 km²";
        surface_gravity = "8.87 m/s²";
        atm_const = "Hydrogen, Helium, Methane.";
        n_moons = "27";
        img_src = "img/PIA17306.jpg";
        img_pub = "Source: University of Wisconsin | Published : 11/7/04";
        img_desc = "An infrared composite image of the two hemispheres of Uranus obtained with Keck Telescope adaptive optics.";
    }
    if (x == 'neptune') {
        planet_type = "ICE GIANT";
        planet_type_desc = "(Composed primarily of 'ices',such as water, methane, and ammonia.)";
        avg_orbit_dist = "4,498,396,441 km";
        mean_orbit_vel = "19,566 km/h";
        orbit_ecc = "0.00859048";
        eq_incl = "28.3 degrees";
        eq_radius = "24,622 km";
        eq_circomf = "154,704.6 km";
        volume = "62,525,703,987,421 km³";
        mass = "102,410,000,000,000,000,000,000,000 kg";
        surface_area = "7,618,272,763 km²";
        surface_gravity = "11.15 m/s²";
        atm_const = "Hydrogen, Helium, Methane.";
        n_moons = "14";
        img_src = "img/PIA01492.jpg";
        img_pub = "Source: JPL | Published : 30/10/98";
        img_desc = "This picture of Neptune was produced from the last whole planet images taken through the green and orange filters on the Voyager 2 narrow angle camera.";
    }
    if (x == 'pluto') {
        planet_type = "DWARF";
        planet_type_desc = "";
        avg_orbit_dist = "5,906,440,628 km";
        mean_orbit_vel = "16,809 km/h";
        orbit_ecc = "0.2488273";
        eq_incl = "122.5 degrees (retrograde rotation)";
        eq_radius = "1,151 km";
        eq_circomf = "7,231.9 km";
        volume = "6,387,259,783 km³";
        mass = "13,090,000,000,000,000,000,000 kg";
        surface_area = "16,647,940 km²";
        surface_gravity = "0.66 m/s²";
        atm_const = "Nitrogen.";
        n_moons = "5";
        img_src = "img/pluto.jpg";
        img_pub = "Source: NASA | Published : 20/7/15";
        img_desc = "The highest resolution image of Pluto to date.";
    }

    document.getElementById("first_col").getElementsByClassName("data_bloc")[0].getElementsByTagName('H3')[0].innerHTML = planet_type;
    document.getElementById("first_col").getElementsByClassName("data_bloc")[0].getElementsByTagName('P')[0].innerHTML = planet_type_desc;
    document.getElementById("first_col").getElementsByClassName("data_bloc")[1].getElementsByTagName('H3')[0].innerHTML = avg_orbit_dist;
    document.getElementById("first_col").getElementsByClassName("data_bloc")[2].getElementsByTagName('H3')[0].innerHTML = mean_orbit_vel;
    document.getElementById("first_col").getElementsByClassName("data_bloc")[3].getElementsByTagName('H3')[0].innerHTML = orbit_ecc;
    document.getElementById("first_col").getElementsByClassName("data_bloc")[4].getElementsByTagName('H3')[0].innerHTML = eq_incl;
    document.getElementById("first_col").getElementsByClassName("data_bloc")[5].getElementsByTagName('H3')[0].innerHTML = eq_radius;
    document.getElementById("second_col").getElementsByClassName("data_bloc")[0].getElementsByTagName('H3')[0].innerHTML = eq_circomf;
    document.getElementById("second_col").getElementsByClassName("data_bloc")[1].getElementsByTagName('H3')[0].innerHTML = volume;
    document.getElementById("second_col").getElementsByClassName("data_bloc")[2].getElementsByTagName('H3')[0].innerHTML = mass;
    document.getElementById("second_col").getElementsByClassName("data_bloc")[3].getElementsByTagName('H3')[0].innerHTML = surface_area;
    document.getElementById("second_col").getElementsByClassName("data_bloc")[4].getElementsByTagName('H3')[0].innerHTML = surface_gravity;
    document.getElementById("second_col").getElementsByClassName("data_bloc")[5].getElementsByTagName('H3')[0].innerHTML = atm_const;
    document.getElementById("second_col").getElementsByClassName("data_bloc")[6].getElementsByTagName('H3')[0].innerHTML = n_moons;
    document.getElementById("third_col").getElementsByClassName("data_bloc")[0].getElementsByTagName('img')[0].src = img_src;
    document.getElementById("third_col").getElementsByClassName("data_bloc")[0].getElementsByTagName('H3')[0].innerHTML = img_pub;
    document.getElementById("third_col").getElementsByClassName("data_bloc")[0].getElementsByTagName('P')[0].innerHTML = img_desc;

}

/*
$(document).ready(() => {
    fly_from_right();
    /*fly_from_left();
     
    setTimeout(() => {
        wobble();
    }, 4800);
});
*/
function wobble() {
    var rocket = document.getElementById("rocket");



    rocket.animate([{

        transform: 'translateY(0vh)'
    }, {

        transform: 'translateY(-1vh)'
    }], {
        duration: 1000,
        direction: 'alternate',
        iterations: Infinity,
        easing: "ease-in-out"
    });



}

/*var counter_fix = 0 ;*/


function fly_from_left() {
    /*if (counter_fix == 1){
        counter_fix = 0 ;*/
    lock = true;
    lock_no_opt = true;
    var rocket = document.getElementById("rocket");
    rocket.animate([{
        marginLeft: '-15vw',
        marginTop: '100vh',
        offset: 0.9
    }, {
        marginLeft: '3vw',
        marginTop: '78vh'
    }], {
        duration: 3000,
        easing: "ease-in-out",
        fill: "forwards",
        iterations: 1
    });

    rocket.animate([{
        transform: 'rotate(90deg)',
        offset: 0.9
    }, {
        transform: 'rotate(0deg)',

    }], {
        duration: 3000,
        easing: "ease-in-out",
        fill: "forwards",
        iterations: 1
    });
    setTimeout(() => {
        rocket.animate([{
            marginTop: '78vh',
        }, {
            marginTop: '83vh',

        }], {
            duration: 800,
            easing: "ease-in-out",
            fill: "forwards",
            iterations: 1
        });
        setTimeout(() => {
            lock = false;
            lock_no_opt = false;

        }, 3500);

    }, 3000);

    /*}*/
}



function fly_from_right() {
    /*if(counter_fix == 1){
        counter_fix = 0 ;*/
    document.getElementById("rocket").style.marginLeft = "110vw";
    document.getElementById("rocket").style.transform = "rotate(-90deg)";
    var rocket = document.getElementById("rocket");
    lock = true;
    lock_no_opt = true;
    rocket.animate([{
        marginLeft: '110vw',
        marginTop: '83vh',
        offset: 0.6
    }, {
        marginLeft: '3vw',
        marginTop: '78vh'
    }], {
        duration: 4000,
        easing: "ease-in-out",
        fill: "forwards",
        iterations: 1
    });

    rocket.animate([{
        transform: 'rotate(-90deg)',
        offset: 0.7
    }, {
        transform: 'rotate(0deg)',

    }], {
        duration: 4000,
        easing: "ease-in-out",
        fill: "forwards",
        iterations: 1
    });
    setTimeout(() => {
        rocket.animate([{
            marginTop: '78vh',
        }, {
            marginTop: '83vh',

        }], {
            duration: 800,
            easing: "ease-in-out",
            fill: "forwards",
            iterations: 1
        });
        setTimeout(() => {
            lock = false;
            lock_no_opt = false;
        }, 4500);

    }, 4000);
    /*}*/
}

var scaled = false;

function open_quiz() {

    document.getElementById("quiz_main-cont").style.display = "flex";
    document.getElementById("quiz_main").animate([{
        transform: 'scale(0)'
    }, {
        transform: 'scale(100)'
    }], {
        duration: 1000,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"
    });
    scaled = true;
    setTimeout(() => {
        rocket_bye_left();
        document.getElementById("pullup-sun").style.visibility = "hidden";
        quiz_intro_el_reveal(document.getElementById("quiz_intro_title"), 0);
        quiz_intro_el_reveal(document.getElementById("quiz_intro_notice_title"), 1000);
        quiz_intro_el_reveal(document.getElementById("quiz_intro_notice_desc"), 1500);
        quiz_intro_el_reveal(document.getElementById("quiz_intro_rules_title"), 2000);
        quiz_intro_el_reveal(document.getElementById("quiz_intro_rules_desc"), 2500);
        setTimeout(() => {
            document.getElementById("goin").animate([{
                opacity: '0%'
            }, {
                opacity: '100%'
            }], {
                duration: 1000,
                easing: 'ease-in-out',
                iterations: 1,
                fill: "forwards"
            });
        }, 3000);
        setTimeout(() => {
            quiz_intro_box_reveal(document.getElementById("quit_box"), -20);
            quiz_intro_box_reveal(document.getElementById("begin_box"), 20);
        }, 3600);
    }, 1100);
    inf_hide();

}
var ql = 10;
var quit_midgame = 0;

function intro_to_questions() {
    quit_midgame = 1;
    var question = document.getElementById("question");
    var question_n = document.getElementById("question_n");
    var hidden_resp = document.getElementById("hidden_resp");
    _set0_opacity(document.getElementById("quiz_intro_title"));
    _set0_opacity(document.getElementById("quiz_intro_notice_title"));
    _set0_opacity(document.getElementById("quiz_intro_notice_desc"));
    _set0_opacity(document.getElementById("quiz_intro_rules_title"));
    _set0_opacity(document.getElementById("quiz_intro_rules_desc"));
    question.style.color = "transparent";
    question_n.style.color = "transparent";
    question.innerHTML = q_ret();

    var r0 = resp_arr();
    for (var i = 0; i < 3; i++) document.getElementById("resp" + (i + 1)).getElementsByTagName("span")[0].innerHTML = r0[i];
    document.getElementById("hidden_question").style.display = "flex";
    reset_pos(document.getElementById("hidden_resp"));
    setTimeout(() => {
        document.getElementById("goin").animate([{
            transform: 'translateY(0)'
        }, {
            transform: 'translateY(-25vh)'
        }], {
            duration: 1000,
            easing: 'ease-in-out',
            iterations: 1,
            fill: "forwards"
        });
        document.getElementById("quit_box").animate([{
            transform: 'translateX(0)'
        }, {
            transform: 'translateX(-36vw)'
        }], {
            duration: 1000,
            easing: 'ease-in-out',
            iterations: 1,
            fill: "forwards"
        });
        document.getElementById("begin_box").animate([{
            transform: 'translateX(0)'
        }, {
            transform: 'translateX(36vw)'
        }], {
            duration: 1000,
            easing: 'ease-in-out',
            iterations: 1,
            fill: "forwards"
        });
        reset_pos(question_n);
        /* reset_width(question);*/
        reset_pos(question);
        setTimeout(() => {
            txt_bg_fill(question);
            txt_bg_fill(question_n);
            timer_i(document.getElementById("begin_box").getElementsByTagName("span")[0]);
            setTimeout(() => {
                question.style.color = "white";
                question_n.style.color = "white";
                txt_bg_unfill(question_n);
                setTimeout(() => {
                    /* console.log("entering from intro ,tiemr_3");*/
                    colle = 1;
                    timer_f(document.getElementById("begin_box").getElementsByTagName("span")[0], 3);
                    setTimeout(() => {
                        txt_bg_unfill(question);
                        hidden_resp.style.opacity = "0";
                        hidden_resp.style.color = "white";
                        hidden_resp.style.visibility = "visible";
                        hidden_resp.animate([{
                            opacity: '0%'
                        }, {
                            opacity: '100%'
                        }], {
                            duration: 2000,
                            fill: "forwards",
                            iterations: 1,
                            easing: 'ease-in-out'
                        });
                        q2q();
                        /*console.log("entering from intro ,tiemr_10");*/
                        colle = 2;
                        timer_f(document.getElementById("begin_box").getElementsByTagName("span")[0], 10);
                        document.getElementById("begin_box").onclick = function () {
                            return false
                        };
                    }, 5200);
                }, 500);


            }, 2000);
        }, 1000);

    }, 1500);

}

var questions = [
    "Which is the second smallest planet within our solar system ?", "Which is the brightest planet in the night’s sky ?", "Phobos and Deimos are the Moons of which planet ?", "Which planet is closest in size to Earth ?", "Which planet has the most moons ?", "Which planet has supersonic winds ?", "Which planet has the fastest rotation ?", "Which is the oldest planet in our solar system ?", "Which is the densest planet in our solar system ?", "Which planet has the most volcanoes ?"
];
var right_resp = ["Mars", "Venus", "Mars", "Venus", "Saturn", "Neptune", "Jupiter", "Jupiter", "Earth", "Venus"];
var responses = ["Mercury", "Venus", "Earth", "Mars", "Saturn", "Jupiter", "Uranus", "Neptune", "Pluto"];
var ind = 0;
var qind = 0;

function q_ret() {
    var ran = Math.floor(Math.random() * ql);
    ql = ql - 1;
    ind = ran;
    var q = questions[ran];
    questions.splice(ran, 1);

    return q;

}

function resp_arr() {
    var ranr = Math.floor(Math.random() * 9);
    var responses = ["Mercury", "Venus", "Earth", "Mars", "Saturn", "Jupiter", "Uranus", "Neptune", "Pluto"];
    var out = [];
    console.log("ind :", ind);
    var rr = right_resp[ind];
    console.log("right_resp :", rr);
    for (var i = 0; i < 9; i++) {
        ranr = Math.floor(Math.random() * (9 - i));
        out.push(responses[ranr]);
        responses.splice(ranr, 1);
    }
    /* console.log("out :",out);*/

    /*console.log("indexof :",out.indexOf(rr));*/
    if (out.indexOf(rr) == 0) {
        qind = 1;
        out.splice(3, out.length - 1);
    } else if (out.indexOf(rr) == (out.length - 1)) {
        out.splice(0, out.length - 3);
        qind = 3;
    } else {
        out.splice(0, out.indexOf(rr) - 1);
        out.splice(out.indexOf(rr) + 2, out.length - 1);
        qind = 2;
    }
    console.log("qind :", qind);
    right_resp.splice(ind, 1);
    return out;
}

var score = 0;
var q2q_tout;

function q2q() {
    quit_midgame = 1;
    q2q_tout = setTimeout(() => {
        q2q_extend(0)
    }, 13000);
    /* console.log("questions = ", questions);
     console.log("responses= ", responses);*/

}


document.getElementById("resp1").addEventListener("click", () => {
    clearTimeout(q2q_tout);
    q2q_extend(1)
});
document.getElementById("resp2").addEventListener("click", () => {
    clearTimeout(q2q_tout);
    q2q_extend(2)
});
document.getElementById("resp3").addEventListener("click", () => {
    clearTimeout(q2q_tout);
    q2q_extend(3)
});


function notif() {
    document.getElementById("resp1").onclick = function () {
        return false
    };
    document.getElementById("resp2").onclick = function () {
        return false
    };
    document.getElementById("resp3").onclick = function () {
        return false
    };
    console.log("we made it");
    clearInterval(stoppa);
    document.getElementById("quit_box").animate([{
        transform: 'translateX(-36vw)',
        opacity: '100%'
    }, {
        transform: 'translateX(-50vw)',
        opacity: '0%'
    }], {
        duration: 1000,
        easing: 'ease-in-out',
        iterations: 1,
        fill: "forwards"
    });
    document.getElementById("begin_box").animate([{
        transform: 'translateX(36vw)'
    }, {
        transform: 'translateX(-4vw)'
    }], {
        duration: 1500,
        easing: 'ease-in-out',
        iterations: 1,
        fill: "forwards"
    });

    _set0_opacity(document.getElementById("begin_box"), 500);
    var question = document.getElementById("question");
    var question_n = document.getElementById("question_n");
    var hidden_resp = document.getElementById("hidden_resp");
    _set0_opacity(question, 500);
    _set0_opacity(question_n, 500);
    _set0_opacity(hidden_resp, 500);
    setTimeout(() => {
        document.getElementById("begin_box").getElementsByTagName("span")[0].innerHTML = "‎‏‏‎OK‎‎";

        question.style.color = "transparent";
        question_n.style.color = "transparent";
        _set100_opacity(question, 1);
        _set100_opacity(question_n, 1);
        if (score == 100) {
            question.innerHTML = "Expect an Email from us soon .";
            question_n.innerHTML = "You Won !";
        } else {
            question.innerHTML = "Your score = " + score;
            question_n.innerHTML = "You Lost .";
        }
    }, 500);
    setTimeout(() => {
        reset_pos(question_n);
        reset_pos(question);
        setTimeout(() => {
            txt_bg_fill(question);
            txt_bg_fill(question_n);
            document.getElementById("begin_box").getElementsByTagName("span")[0].animate([{
                opacity: '0%'
            }, {
                opacity: '100%'
            }], {
                duration: 1000,
                easing: 'ease-in-out',
                iterations: 1,
                fill: "forwards"
            });
            setTimeout(() => {
                question.style.color = "white";
                question_n.style.color = "white";
                txt_bg_unfill(question_n);
                _set100_opacity(document.getElementById("begin_box"), 1000);
                setTimeout(() => {
                    setTimeout(() => {
                        txt_bg_unfill(question);
                        hidden_resp.style.visibility = "hidden";
                        document.getElementById("begin_box").onclick = function () {
                            quit_midgame = 2;
                            quit_quiz();
                        };
                    }, 4000);
                }, 500);


            }, 2000);
        }, 1000);

    }, 1500);

}

var qn = 2;
var colle = 0;

function q2q_extend(sc_pass) {
    quit_midgame = 1;
    /* console.log("questions _ length = ", questions.length);*/
    if (sc_pass == qind) score = score + 10;
    console.log("scpass :", sc_pass);
    console.log("qind_q2qext :", qind);

    console.log("score :", score);
    if (questions.length == 0) {
        notif();
        clearTimeout(q2q_tout);
    } else {
        clearInterval(stoppa);
        document.getElementById("begin_box").getElementsByTagName("span")[0].innerHTML = "‎‏‏‎ ‎‎";
        for (var k = 1; k <= 3; k++) {
            /* console.log("resp" + k + " locked");*/
            document.getElementById("resp" + k).style.pointerEvents = "none";
        }

        var question = document.getElementById("question");
        var question_n = document.getElementById("question_n");
        var hidden_resp = document.getElementById("hidden_resp");
        _set0_opacity(question, 500);
        _set0_opacity(question_n, 500);
        _set0_opacity(hidden_resp, 500);
        setTimeout(() => {

            question.style.color = "transparent";
            question_n.style.color = "transparent";
            _set100_opacity(question, 1);
            _set100_opacity(question_n, 1);
            question.innerHTML = q_ret();
            question_n.innerHTML = "Question " + qn;
            qn = qn + 1;
            var r0 = resp_arr();
            /*console.log("r0_q2qext",r0);*/
            for (var i = 0; i < 3; i++) document.getElementById("resp" + (i + 1)).getElementsByTagName("span")[0].innerHTML = r0[i];
            reset_pos(document.getElementById("hidden_resp"));
        }, 500);
        setTimeout(() => {
            reset_pos(question_n);
            reset_pos(question);
            setTimeout(() => {
                txt_bg_fill(question);
                txt_bg_fill(question_n);
                timer_i(document.getElementById("begin_box").getElementsByTagName("span")[0]);
                setTimeout(() => {
                    question.style.color = "white";
                    question_n.style.color = "white";
                    txt_bg_unfill(question_n);
                    setTimeout(() => {
                        colle = 1;
                        /*console.log("entering from q2qextend ,tiemr_3");*/
                        timer_f(document.getElementById("begin_box").getElementsByTagName("span")[0], 3);
                        setTimeout(() => {
                            txt_bg_unfill(question);
                            hidden_resp.style.opacity = "0";
                            hidden_resp.style.color = "white";
                            hidden_resp.style.visibility = "visible";
                            hidden_resp.animate([{
                                opacity: '0%'
                            }, {
                                opacity: '100%'
                            }], {
                                duration: 2000,
                                fill: "forwards",
                                iterations: 1,
                                easing: 'ease-in-out'
                            });

                            for (var k = 1; k <= 3; k++) {
                                /* console.log("resp" + k + " unlocked");*/
                                document.getElementById("resp" + k).style.pointerEvents = "initial";
                            }

                            q2q();
                            colle = 2;
                            /*console.log("entering from q2qextend ,tiemr_10");*/
                            timer_f(document.getElementById("begin_box").getElementsByTagName("span")[0], 10);
                            document.getElementById("begin_box").onclick = function () {
                                return false
                            };
                        }, 5200);
                    }, 500);


                }, 2000);
            }, 1000);

        }, 1500);
    }
}


function timer_i(el) {
    el.animate([{
        opacity: '100%'
    }, {
        opacity: '0%'
    }], {
        duration: 1000,
        easing: 'ease-in-out',
        iterations: 1,
        fill: "forwards"
    });
    setTimeout(() => {
        el.innerHTML = "Ready?";
        el.animate([{
            opacity: '0%'
        }, {
            opacity: '100%'
        }], {
            duration: 1000,
            easing: 'ease-in-out',
            iterations: 1,
            fill: "forwards"
        });
    }, 1000);
}

var stoppa;


function timer_f(el, i) {
    /*  console.log("entering i :", i);*/
    el.animate([{
        opacity: '100%'
    }, {
        opacity: '0%'
    }], {
        duration: 1000,
        easing: 'ease-in-out',
        iterations: 1,
        fill: "forwards"
    });
    setTimeout(() => {


        stoppa = setInterval(() => {
            /*  console.log("i at interval start :", i);*/
            if (i < 0) {
                /*   console.log("if intev :",colle);
                   console.log("if in interval entered");*/
                if (colle == 1) i = 3;
                else if (colle == 2) i = 10;
                clearInterval(stoppa);
                return;
            }
            /*  console.log("i after if :", i);*/
            el.innerHTML = i.toString();
            el.animate([{
                opacity: '0%'
            }, {
                opacity: '100%'
            }], {
                duration: 400,
                easing: 'ease-in-out',
                iterations: 1,
                fill: "forwards"
            });
            setTimeout(() => {
                el.animate([{
                    opacity: '100%'
                }, {
                    opacity: '0%'
                }], {
                    duration: 400,
                    easing: 'ease-in-out',
                    iterations: 1,
                    fill: "forwards"
                });
                i = i - 1;
            }, 500);

        }, 1000);
    }, 1000);
}



function reset_pos(el) {
    reset_width(el);
    setTimeout(() => {
        el.style.marginLeft = ((window.innerWidth - el.offsetWidth) / 2) + 'px';
    }, 200);
}

function reset_width(el) {
    el.animate([{
        width: 'fit-content'
    }], {
        duration: 100,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"
    });

}

/*function txt_bg_fill(txt, wi, wf) {
    txt.style.backgroundColor = "white";
    txt.animate([{
        width: wi + 'vw'
    }, {
        width: wf + 'vw'
    }], {
        duration: 2000,
        easing: 'ease-in-out',
        iterations: 1,
        fill: "forwards"
    })
}
*/
function txt_bg_fill(txt) {
    txt.style.backgroundColor = "white";
    txt.animate([{
        width: '0%'
    }, {
        width: txt.offsetWidth + 'px'
    }], {
        duration: 2000,
        easing: 'ease-in-out',
        iterations: 1,
        fill: "forwards"
    })
}

function txt_bg_unfill(txt) {
    txt.style.backgroundColor = "white";
    txt.animate([{
        width: txt.offsetWidth + 'px'
    }, {
        width: '0%'
    }], {
        duration: 2000,
        easing: 'ease-in-out',
        iterations: 1,
        fill: "forwards"
    });
    setTimeout(() => {
        txt.style.backgroundColor = "transparent";
    }, 2000);
}


function quiz_intro_el_reveal(el, t) {
    setTimeout(() => {
        el.animate([{
            transform: 'translateY(2vh)',
            opacity: '0'
        }, {
            transform: 'translateY(0vh)',
            opacity: '100%'
        }], {
            duration: 1000,
            easing: 'ease-out',
            iterations: 1,
            fill: "forwards"
        });
    }, t)
}

function quiz_intro_box_reveal(box, offs) {
    box.animate([{
        transform: 'translateX(' + offs + 'vw)',
        opacity: '0%'
    }, {
        transform: 'translateX(0)',
        opacity: '100%'
    }], {
        duration: 1500,
        easing: 'ease-in-out',
        iterations: 1,
        fill: "forwards"
    });
}

function _set0_opacity(el, df = 1000) {
    el.animate([{
            opacity: '100%'
        },
        {
            opacity: '0'
        }
    ], {
        duration: df,
        easing: 'linear',
        iterations: 1,
        fill: "forwards"
    });
}


function _set100_opacity(el, df = 1000) {
    el.animate([{
        opacity: '0'
    }, {
        opacity: '100%'
    }], {
        duration: df,
        easing: 'linear',
        iterations: 1,
        fill: "forwards"
    });
}

function quit_reset(el) {
    el.style.marginLeft = 'initial';
}

function quit_mid_ext() {

}

function quit_quiz() {
    /*for elements opacity*/
    if (quit_midgame == 0) {
        _set0_opacity(document.getElementById("quiz_intro_title"), 500);
        _set0_opacity(document.getElementById("quiz_intro_notice_title"), 500);
        _set0_opacity(document.getElementById("quiz_intro_notice_desc"), 500);
        _set0_opacity(document.getElementById("quiz_intro_rules_title"), 500);
        _set0_opacity(document.getElementById("quiz_intro_rules_desc"), 500);
        _set0_opacity(document.getElementById("quit_box"), 500);
        _set0_opacity(document.getElementById("begin_box"), 500);
        _set0_opacity(document.getElementById("goin"), 500);
        setTimeout(() => {
            document.getElementById("hidden_question").style.display = "none";
        }, 1000);
        /*boxes*/
        /* document.getElementById("goin").animate([{
             transform: 'translateY(-25vh)' ,
             opacity : '100%'
         }, {
             opacity : '0%' ,
             transform: 'translateY(0vh)'
         }], {
             duration: 500,
             easing: 'linear',
             iterations: 1,
             fill: "forwards"
         });
         /*else*/
        document.getElementById("pullup-sun").style.visibility = "visible";
        document.getElementById("quiz_main-cont").animate([{
            marginTop: '-100vw'
        }], {
            duration: 1000,
            easing: 'ease-in-out',
            iterations: 1,
            fill: "forwards"
        });
        setTimeout(() => {

            document.getElementById("quiz_main-cont").style.display = "none";
            document.getElementById("quiz_main-cont").animate([{
                marginTop: '-100vw'
            }, {
                marginTop: '98vh'
            }], {
                duration: 100,
                easing: 'ease-in-out',
                iterations: 1,
                fill: "forwards"
            });
            fly_from_left();
            setTimeout(() => {
                wobble();
            }, 4000);
            setTimeout(() => {
                document.getElementById("rocket-cont").style.visibility = "visible";
                quiz_popup();
            }, 4500);
            inf_show();
            scaled = false;
            lock = false;
            lock_no_opt = false;
        }, 1000);
    } else {
        lock = 1 ;
        lock_no_opt = 1 ;
        clearTimeout(q2q_tout);
        setTimeout(() => {
            document.getElementById("hidden_question").style.display = "none";
        }, 1000);
        document.getElementById("pullup-sun").style.visibility = "visible";
        document.getElementById("quiz_main-cont").animate([{
            marginTop: '-100vw'
        }], {
            duration: 1000,
            easing: 'ease-in-out',
            iterations: 1,
            fill: "forwards"
        });
        setTimeout(() => {

            document.getElementById("quiz_main-cont").style.display = "none";
            document.getElementById("quiz_main-cont").animate([{
                marginTop: '-100vw'
            }, {
                marginTop: '98vh'
            }], {
                duration: 100,
                easing: 'ease-in-out',
                iterations: 1,
                fill: "forwards"
            });
            fly_from_left();
            setTimeout(() => {
                wobble();
            }, 4000);
            setTimeout(() => {
                document.getElementById("rocket-cont").style.visibility = "visible";
                lock_no_opt = true;
                lock = true;
                var quiz_q = document.getElementById("quiz_pop");
                var resp = document.getElementById("quiz_resp");
                quiz_q.style.color = "transparent";
                quiz_q.animate([{
                    width: '0%'
                }], {
                    duration: 500,
                    easing: 'ease-in',
                    iterations: 1,
                    fill: "forwards"

                });
                resp.animate([{
                    opacity: '0%'
                }], {
                    duration: 500,
                    easing: 'ease-in',
                    iterations: 1,
                    fill: "forwards"

                });

                resp.style.visibility = "hidden";
                setTimeout(() => {
                    /*********** *****************************/
                    if (quit_midgame == 1) quiz_q.innerHTML = "Winners don't quit.";
                    else if (quit_midgame == 2) {
                        if (score == 100) quiz_q.innerHTML = "Congrats";
                        else quiz_q.innerHTML = "Nice try ! Goodbye";
                    }
                    /*quiz_q.offsetWidth + 'px'*/
                    quiz_q.style.backgroundColor = "transparent";
                    reset_width(quiz_q);

                    setTimeout(() => {
                        quiz_q.style.backgroundColor = "white";
                        console.log("we here1");
                        quiz_q.animate([{
                                width: '0%'
                            },
                            {
                                width: quiz_q.offsetWidth + 'px'
                            }
                        ], {
                            duration: 800,
                            easing: 'linear',
                            iterations: 1,
                            fill: "forwards"

                        });
                        setTimeout(() => {
                            console.log("we here2");
                            quiz_q.style.color = "white";

                            quiz_q.animate([{
                                    width: quiz_q.offsetWidth + 'px'
                                },
                                {
                                    width: '0%'
                                }
                            ], {
                                duration: 800,
                                easing: 'ease-in-out',
                                iterations: 1,
                                fill: "forwards"
                            });
                            setTimeout(() => {
                                quiz_q.style.backgroundColor = "transparent";
                                reset_width(quiz_q);
                                setTimeout(() => {
                                    quiz_q.style.backgroundColor = "white";
                                    console.log("we here3");
                                    quiz_q.animate([{
                                        width: '0%'
                                    }, {
                                        width: quiz_q.offsetWidth + 'px'
                                    }], {
                                        duration: 800,
                                        easing: 'ease-in',
                                        iterations: 1,
                                        fill: "forwards"
                                    });
                                    setTimeout(() => {
                                        console.log("we here4");
                                        quiz_q.style.color = "transparent";
                                        /*quiz_q.innerHTML = "Go for a Quiz?";*/
                                        quiz_q.animate([{
                                            width: quiz_q.offsetWidth + 'px'
                                        }, {
                                            width: '0%'
                                        }], {
                                            duration: 800,
                                            easing: 'ease-in',
                                            iterations: 1,
                                            fill: "forwards"
                                        });
                                        setTimeout(() => {
                                            console.log("we here5");
                                            document.getElementById("rocket").animate([{
                                                transform: 'translateY(-100vw)'
                                            }], {
                                                duration: 1500,
                                                easing: 'ease-in',
                                                iterations: 1,
                                                fill: "forwards"
                                            })
                                            setTimeout(() => {
                                                console.log("we here6");
                                                document.getElementById("quiz").style.display = "none";
                                            }, 1000)
                                        }, 1000);
                                    }, 1000);
                                }, 110);
                            }, 3000);
                        }, 1000);
                    }, 110);
                }, 800);
            }, 4500);
            inf_show();
        }, 1000);
    }
}


function quiz_popup() {
    /*  console.log("current_rock_rat = ", document.getElementById("rocket").offsetLeft);
      console.log("popc_test = ", pop_c);*/
    if (document.getElementById("rocket").offsetLeft == Math.round(rocket_ratio) && !(pop_c)) {
        var quiz_q = document.getElementById("quiz_pop");
        quiz_q.style.opacity = "100%";
        quiz_q.style.color = "transparent";
        quiz_q.style.background = "white";
        quiz_q.animate([{
            opacity: '0%',
            width: '0',
            offset: 0.1
        }, {
            opacity: '100%',
            width: '7vw'

        }], {
            duration: 800,
            fill: 'forwards',
            easing: 'ease-in-out',
            iterations: 1
        });
        setTimeout(() => {
            quiz_q.style.color = "white";
            quiz_q.animate([{
                width: '7vw'
            }, {
                width: '0'
            }], {
                duration: 1000,
                fill: 'forwards',
                easing: 'ease-in-out',
                iterations: 1
            });

        }, 2000);
    }
}

function quiz_popdown(delay = 50) {
    if (document.getElementById("rocket").offsetLeft == Math.round(rocket_ratio) && !(pop_c)) {
        var quiz_q = document.getElementById("quiz_pop");
        quiz_q.style.color = "white";
        quiz_q.style.background = "white";
        quiz_q.animate([{

            width: '0',

        }, {

            width: '7vw',

        }], {
            duration: delay,
            fill: 'forwards',
            easing: 'ease-in-out',
            iterations: 1
        });
        setTimeout(() => {

            quiz_q.animate([{
                opacity: '100%'
            }, {
                opacity: '0%'
            }], {
                duration: delay,
                fill: 'forwards',
                easing: 'ease-in-out',
                iterations: 1
            });
        }, delay);
    }

}


function show_options() {
    /*console.log("pop width = ", document.getElementById("quiz_pop").offsetWidth);
    console.log("popc = ", pop_c);
    console.log("lock = ", lock);*/

    if (!(lock) && !(pop_c) && (document.getElementById("quiz_pop").offsetWidth == 0)) {
        lock = true;
        var quiz_q = document.getElementById("quiz_pop");
        var resp = document.getElementById("quiz_resp");
        quiz_q.animate([{
            width: '0'
        }, {
            width: '13vw',
        }], {
            duration: 700,
            easing: 'ease-in',
            iterations: 1,
            fill: "forwards"

        });

        setTimeout(() => {
            resp.style.visibility = "visible";
            resp.animate([{
                opacity: '0%'
            }, {
                opacity: '100%'
            }], {
                duration: 700,
                easing: 'ease-in',
                iterations: 1,
                fill: "forwards"

            });
            setTimeout(() => {
                lock = false;
            }, 700);
        }, 800);

    }

}

function hide_options() {
    if (!(lock_no_opt) && !(pop_c) && (document.getElementById("quiz_pop").offsetWidth == Math.round(quiz_rat))) {
        setTimeout(() => {
            var quiz_q = document.getElementById("quiz_pop");
            var resp = document.getElementById("quiz_resp");
            quiz_q.style.color = "transparent";
            quiz_q.animate([{
                width: '0%'
            }], {
                duration: 700,
                easing: 'ease-in',
                iterations: 1,
                fill: "forwards"

            });
            resp.animate([{
                opacity: '0%'
            }], {
                duration: 700,
                easing: 'ease-in',
                iterations: 1,
                fill: "forwards"

            });
            resp.style.visibility = "hidden";
            setTimeout(() => {
                lock = false;
            }, 700);
            setTimeout(() => {
                quiz_popup();
            }, 800);
        }, 800);

    }
}

var lock = false;

function option_yes() {
    var quiz_q = document.getElementById("quiz_pop");
    var resp = document.getElementById("quiz_resp");
    lock = true;
    lock_no_opt = true;
    quiz_q.style.color = "transparent";
    quiz_q.animate([{
        width: '0%'
    }], {
        duration: 200,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"

    });
    resp.animate([{
        opacity: '0%'
    }], {
        duration: 200,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"

    });
    resp.style.visibility = "hidden";
    document.getElementById("rocket-cont").style.visibility = "hidden";
    open_quiz();

}
var lock_no_opt = false;
var pop_c = false;

function option_no() {
    lock_no_opt = true;
    lock = true;
    var quiz_q = document.getElementById("quiz_pop");
    var resp = document.getElementById("quiz_resp");
    quiz_q.style.color = "transparent";
    quiz_q.animate([{
        width: '0%'
    }], {
        duration: 500,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"

    });
    resp.animate([{
        opacity: '0%'
    }], {
        duration: 500,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"

    });

    resp.style.visibility = "hidden";
    setTimeout(() => {
        quiz_q.innerHTML = "If you changed your mind , click me :)";
        quiz_q.animate([{
            width: '18vw'
        }], {
            duration: 800,
            easing: 'linear',
            iterations: 1,
            fill: "forwards"

        });
        setTimeout(() => {
            quiz_q.style.color = "white";

            quiz_q.animate([{
                width: '0'
            }], {
                duration: 800,
                easing: 'ease-in-out',
                iterations: 1,
                fill: "forwards"
            });
            setTimeout(() => {

                quiz_q.animate([{
                    width: '18vw'
                }], {
                    duration: 800,
                    easing: 'ease-in',
                    iterations: 1,
                    fill: "forwards"
                });
                setTimeout(() => {
                    quiz_q.style.color = "transparent";
                    quiz_q.innerHTML = "Go for a Quiz?";
                    quiz_q.animate([{
                        width: '0'
                    }], {
                        duration: 800,
                        easing: 'ease-in',
                        iterations: 1,
                        fill: "forwards"
                    });
                    setTimeout(() => {
                        document.getElementById("rocket").style.cursor = "pointer";
                        pop_c = true;
                        document.getElementById("rocket").addEventListener("click", () => {
                            lock_on_leave();
                            pop_c = false;

                            /*  document.getElementById("quiz_pop").style.visibility = "hidden";*/
                            setTimeout(() => {
                                document.getElementById("rocket").style.cursor = "none";
                                $('#rocket').click(false);

                            }, 3000);
                        });
                    }, 1000);
                }, 1000);
            }, 3000);
        }, 1000);
    }, 800);
}

function lock_on_leave() {
    document.getElementById("rocket").addEventListener("mouseleave", () => {
        /* document.getElementById("quiz_pop").style.visibility = "visible";*/
        lock_no_opt = false;
        lock = false;
        quiz_popup();
        $('#rocket').mouseleave(false);
    });
}


function option_goaway() {
    lock_no_opt = true;
    lock = true;
    var quiz_q = document.getElementById("quiz_pop");
    var resp = document.getElementById("quiz_resp");
    quiz_q.style.color = "transparent";
    quiz_q.animate([{
        width: '0%'
    }], {
        duration: 500,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"

    });
    resp.animate([{
        opacity: '0%'
    }], {
        duration: 500,
        easing: 'ease-in',
        iterations: 1,
        fill: "forwards"

    });

    resp.style.visibility = "hidden";
    setTimeout(() => {
        quiz_q.innerHTML = "See you next time.";
        quiz_q.animate([{
            width: '10vw'
        }], {
            duration: 800,
            easing: 'linear',
            iterations: 1,
            fill: "forwards"

        });
        setTimeout(() => {
            quiz_q.style.color = "white";

            quiz_q.animate([{
                width: '0'
            }], {
                duration: 800,
                easing: 'ease-in-out',
                iterations: 1,
                fill: "forwards"
            });
            setTimeout(() => {

                quiz_q.animate([{
                    width: '10vw'
                }], {
                    duration: 800,
                    easing: 'ease-in',
                    iterations: 1,
                    fill: "forwards"
                });
                setTimeout(() => {
                    quiz_q.style.color = "transparent";
                    quiz_q.innerHTML = "Go for a Quiz?";
                    quiz_q.animate([{
                        width: '0'
                    }], {
                        duration: 800,
                        easing: 'ease-in',
                        iterations: 1,
                        fill: "forwards"
                    });
                    setTimeout(() => {
                        document.getElementById("rocket").animate([{
                            transform: 'translateY(-100vw)'
                        }], {
                            duration: 1500,
                            easing: 'ease-in',
                            iterations: 1,
                            fill: "forwards"
                        })
                        setTimeout(() => {
                            document.getElementById("quiz").style.display = "none";
                        }, 1000)
                    }, 1000);
                }, 1000);
            }, 3000);
        }, 1000);
    }, 800);
}