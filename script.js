function navAnimation(){
    var nav = document.querySelector("nav")
    
    nav.addEventListener("mouseenter", function(){
        let tl = gsap.timeline()
    
        tl.to("#nav-bottom",{
            height:"25vh"
        })
        tl.to("nav h5",{
            display:"block"
        })
        tl.to(".nav-part2 h5 span",{
            y:0,
            // duration:0.3,
            stagger:{
                amount:0.6
            }
        })
    })
    
    
    nav.addEventListener("mouseleave", function(){
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span",{
            y:25,
            // duration:0.3,
            stagger:{
                amount:0.2
            }
        })
        tl.to(".nav-part2 h5",{
            display:"none",
            duration:0.1
        })
        tl.to("#nav-bottom",{
            height:0,
            duration:0.2
        })
    })
}

function page2animation(){
    var rightElems = document.querySelectorAll(".right-elem")
    
    rightElems.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            // console.log(elem.childNodes[1])
            // elem.childNodes[3].style.opacity = 1
            // console.log(elem.getBoundingClientRect())
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1
            })
        })
        elem.addEventListener("mouseleave",function(){
            // elem.childNodes[3].style.opacity = 0
            gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0
            })
        })
        elem.addEventListener("mousemove", function(dets){
            // console.log(elem.getBoundingClientRect().x)
            gsap.to(elem.childNodes[3],{
                x:dets.x-elem.getBoundingClientRect().x-45,
                y:dets.y-elem.getBoundingClientRect().y-140
            })
        })
    })
}

function page3videoanimation(){
    var page3center = document.querySelector(".page3-center")
    var video=document.querySelector("#page3 video")
    
    page3center.addEventListener("click", function(){
        video.play()
        gsap.to(video,{
            transform:"scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:0
        })
    })
    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
            transform:"scaleX(0.7) scaleY(0)",
            opacity:0,
            borderRadius:"30px"
        })
    })
}

function page4Animation(){
    var sections = document.querySelectorAll(".sec-right")
    
    sections.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave",function(){
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
}


// navAnimation()
page2animation()
page3videoanimation()
page4Animation()
