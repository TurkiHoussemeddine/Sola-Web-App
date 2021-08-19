var c = 1;
var re = document.getElementById("re");
window.addEventListener('load', intro());
var pos;
/*
function intro(){   
    var bb = document.getElementById("bbb");
    var sg = document.getElementById("sig");
    pos = 0 ;

    setTimeout(()=>{
        
        bb.animate([
            {opacity:'100%'},
            {opacity:'0%'}
        ],{
            duration : 12000,
            iterations :1 ,
            easing  :'ease-in-out'
        });
        setTimeout(() =>{
            bb.style.display = "none";
            setTimeout(()=>{
                sg.style.display='initial';
                sg.animate([
                    {opacity:'0%' , transform :'translateY(-50px)'},
                    {opacity:'100%' ,transform :'translateY(0px)'}
                ],{
                    duration:3000,
                    iterations :1 ,
                    easing:'ease-in'
                });
                
                setTimeout(()=>{
                    sg.style.opacity="100%";
                    document.getElementById("toggle").animate([
                        {opacity:'0%'},
                        {opacity:'100%'}
                    ],{
                        duration:800,
                        iterations :1 ,
                        easing:'ease-in' ,
                        fill : "forwards"
                    });
                },3000);
            },1000);
            
        },12000); 
        
    },6000);
    re.style.display="none";
    
}
*/

function signin() {
    c++;
    var su = document.getElementById("signup");
    document.getElementById("errmessage").animate([{
            opacity: '100%'
        },
        {
            opacity: '0%'
        }
    ], {
        duration: 100,
        iterations: 1,
        easing: 'ease-out',
        fill:"forwards"
    });

    su.animate([{
            opacity: '100%'
        },
        {
            opacity: '0%'
        }
    ], {
        duration: 100,
        iterations: 1,
        easing: 'ease-out'
    });
    setTimeout(() => {
        su.style.display = "none";
    }, 100);
    var up = document.getElementById("up");
    up.innerHTML = "Up";
    var back = document.getElementById("back");
    back.style.cursor = "pointer";
    back.style.display = "initial";
    back.animate([{
            opacity: '0%',
            transform: 'translate(0,20px)'
        },
        {
            opacity: '100%',
            transform: 'translate(0,0)'
        }
    ], {
        duration: 1000,
        iterations: 1,
        easing: 'ease-in'
    });
    back.style.opacity = "100%";

    var EP = document.getElementById("pass");
    EP.animate([{
            transform: 'translate(0,0)'
        },
        {
            transform: 'translate(0,40px)'
        }
    ], {
        duration: 700,
        iterations: 1,
        easing: 'ease-in'
    });
    EP.style.transform = 'translate(0,40px)';
    var EP = document.getElementById("eml");
    EP.animate([{
            transform: 'translate(0,0)'
        },
        {
            transform: 'translate(0,40px)'
        }
    ], {
        duration: 700,
        iterations: 1,
        easing: 'ease-in'
    });
    EP.style.transform = 'translate(0,40px)';
    setTimeout(() => {
        var fn = document.getElementById("name");
        fn.style.display = "initial";
        fn.animate([{
                transform: 'translate(0,0px)',
                opacity: '0%'
            },
            {
                transform: 'translate(0,40px)',
                opacity: '100%'
            }
        ], {
            duration: 400,
            iterations: 1,
            easing: 'ease-in-out'
        });
        fn.style.transform = 'translate(0,40px)';
    }, 700);

    document.getElementById("pass").placeholder = "New Password";


    var eyes = document.getElementById("seye");
    eyes.animate([{
            transform: 'translate(-32px,10px)'
        },
        {
            transform: 'translate(-32px,50px)'
        }
    ], {
        duration: 700,
        iterations: 1,
        easing: 'ease-in'
    });
    eyes.style.transform = 'translate(-32px,50px)';

    eyes = document.getElementById("neye");
    eyes.animate([{
            transform: 'translate(-32px,10px)'
        },
        {
            transform: 'translate(-32px,50px)'
        }
    ], {
        duration: 700,
        iterations: 1,
        easing: 'ease-in'
    });
    eyes.style.transform = 'translate(-32px,50px)';

    re.style.display = "none";
}

function back() {
    c++;
    document.getElementById("errmessage").animate([{
        opacity: '0%'
    },
    {
        opacity: '100%'
    }
], {
    duration: 1000,
    iterations: 1,
    easing: 'ease-out',
    fill :"forwards"
});
    var back = document.getElementById("back");

    back.animate([{
            opacity: '100%',
            transform: 'translate(0,0)',
            offset: '0'
        },
        {
            opacity: '0%',
            transform: 'translate(0,20px)',
            offset: '0.5'
        }
    ], {
        duration: 1000,
        iterations: 1,
        easing: 'ease-out'
    });
    back.style.opacity = "0%";

    setTimeout(() => {
        var su = document.getElementById("signup");
        su.style.display = "initial";
        su.animate([{
                opacity: '0%'
            },
            {
                opacity: '100%'
            }
        ], {
            duration: 1000,
            iterations: 1,
            easing: 'ease-in-out'
        });
        su.style.opacity = "100%";
        back.style.display = "none";
    }, 1000);


    var fn = document.getElementById("name");
    fn.animate([{
            opacity: '100%'
        },
        {
            opacity: '0%'
        }
    ], {
        duration: 500,
        iterations: 1,
        easing: 'ease-out'
    });
    setTimeout(() => {

        fn.style.display = "none";
    }, 500);


    var EP = document.getElementById("pass");
    EP.animate([{
            transform: 'translate(0,40px)'
        },
        {
            transform: 'translate(0,0)'
        }
    ], {
        duration: 1000,
        iterations: 1,
        easing: 'ease-out'
    });
    EP.style.transform = 'translate(0,0)';
    var EP = document.getElementById("eml");
    EP.animate([{
            transform: 'translate(0,40px)'
        },
        {
            transform: 'translate(0,0)'
        }
    ], {
        duration: 1000,
        iterations: 1,
        easing: 'ease-out'
    });
    EP.style.transform = 'translate(0,0)';

    document.getElementById("pass").placeholder = "Password";

    document.getElementById("up").innerHTML = "In";
    document.getElementById("back").style.cursor = "auto";



    var eyes = document.getElementById("seye");
    eyes.animate([{
            transform: 'translate(-32px,50px)'
        },
        {
            transform: 'translate(-32px,10px)'
        }
    ], {
        duration: 700,
        iterations: 1

    });
    eyes.style.transform = 'translate(-32px,10px)';

    eyes = document.getElementById("neye");
    eyes.animate([{
            transform: 'translate(-32px,50px)'
        },
        {
            transform: 'translate(-32px,10px)'
        }
    ], {
        duration: 700,
        iterations: 1

    });
    eyes.style.transform = 'translate(-32px,10px)';
    re.style.display = "none";
}




var counter = 0;

function toggleye() {
    counter++;
    eye = document.getElementById("neye");
    var p = document.getElementById("pass");
    if ((counter % 2) == 0) {
        eye.style.opacity = "100%";
        p.type = "password";
    } else {
        eye.style.opacity = "0%";
        p.type = "text";
    };
}

function hello() {
    var isvalid = validate(document.getElementById("eml"));
    var eml = document.getElementById("eml");
    var pass = document.getElementById("pass");
    var name = document.getElementById("name");
    var passlength = pass.value.length;
    var namelength = name.value.length;
    if (!isvalid) invalid(eml);
    if (passlength == 0) invalid(pass);
    if (namelength == 0) invalid(name);
    if (((c % 2) != 0) && (isvalid) && (passlength != 0)) {
        var sb = document.getElementById("signin");
        sb.animate([{
                border: '2px solid rgba(255,255,255,0.1)',
                boxShadow: 'inset 0 0 0px 0px #fff'
            },
            {
                border: '2px solid rgba(255,255,255,1)',
                boxShadow: 'inset 0 0 5px 1px #fff'
            }
        ], {
            duration: 100,
            iterations: 6,
            direction: 'alternate',
            easing: 'linear'
        })
        setTimeout(() => {
            window.location.href = "./overview.html";
        }, 600);

    } else if (((c % 2) == 0) && (isvalid) && (passlength != 0) && (namelength != 0)) {
        back();
        var h = document.getElementById("appear");
        document.getElementById("eml").value = "";
        document.getElementById("pass").value = "";
        setTimeout(() => {
            h.animate([{
                letterSpacing: '5px'
            }, {
                letterSpacing: '5.5px'
            }, {
                letterSpacing: '5px'
            }], {
                duration: 3000,
                iterations: 1,
                easing: 'ease-in-out'
            });
            setTimeout(() => {
                h.animate([{
                    textShadow: '0 0 0px #fff'
                }, {
                    textShadow: '0 0 8px #fff'
                }], {
                    duration: 2000,
                    iterations: Infinity,
                    direction: 'alternate',
                    easing: 'ease-in-out'
                });

            }, 3000);
            re.style.display = "block";
        }, 1000);

    };




}

function validate(inp) {
    var text = inp.value;
    var regx = /^([a-zA-Z0-9\.$&_~-]+)(@[a-zA-Z0-9-]+)\.([a-zA-Z0-9-]{2,20})(\.[a-zA-Z0-9-]{2,8})?$/;
    return (regx.test(text));
}

function invalid(box) {
    box.animate([{
        borderBottom: '2px solid rgba(255,255,255,0.2)'
    }, {
        borderBottom: '2px solid rgba(255,255,255,0.6)'
    }], {
        duration: 500,
        iterations: 6,
        direction: 'alternate',
        easing: 'ease-in-out'
    });
}




function lift_up_down() {

    var ball = document.getElementById("ball");
    var sig = document.getElementById("sig");

    console.log("pos= ", pos);
    if (pos == 0) {

        ball.animate([{
            transform: 'translateX(0vw)',
        }, {
            transform: 'translateX(2.7vw)',
        }], {
            duration: 800,
            iterations: 1,
            easing: 'ease-in-out',
            fill: "forwards"
        });
        sig.animate([{
            transform: 'translateY(0)'
        }, {
            transform: 'translateY(-100vh)'
        }], {
            duration: 1000,
            iterations: 1,
            easing: 'ease-in-out',
            fill: "forwards"
        });
        setTimeout(() => {
            pos = 1;
        }, 800);

    } else {
        ball.animate([{
            transform: 'translateX(2.7vw)',
        }, {
            transform: 'translateX(0vw)',
        }], {
            duration: 800,
            iterations: 1,
            easing: 'ease-in-out',
            fill: "forwards"
        });
        sig.animate([{
            transform: 'translateY(-100vh)'
        }, {
            transform: 'translateY(0)'
        }], {
            duration: 1000,
            iterations: 1,
            easing: 'ease-in-out',
            fill: "forwards"
        });
        setTimeout(() => {
            pos = 0;
        }, 800);
    }

}