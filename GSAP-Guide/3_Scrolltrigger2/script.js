gsap.to("#page2 h1",{
    transform:"translateX(-125%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        scrub:2,
        start:"top 0",
        end:"top -100%",
        pin:true
    }
})