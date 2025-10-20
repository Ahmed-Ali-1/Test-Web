// Hero section animation

gsap.from(".logoDiv img", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".content_Div h1", {
    opacity: 0,
    x: -80,
    duration: 1,
    delay: 0.4,
    ease: "power2.out"
});

gsap.from(".content_Div p", {
    opacity: 0,
    x: -80,
    duration: 1,
    delay: 0.7,
    ease: "power2.out"
});

gsap.from(".content_Div button", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: 1,
    ease: "power2.out"
});

gsap.from(".image_Div img", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 0.8,
    ease: "power2.out"
});

gsap.from(".noti1", {
    opacity: 0,
    x: -50,
    duration: 0.8,
    delay: 1.2,
    ease: "power2.out",
});

gsap.from(".noti2", {
    opacity: 0,
    x: 50,
    duration: 0.8,
    delay: 1.4,
    ease: "power2.out"
});

// Card_Section

gsap.from(".cards_Div .card", {
    opacity: 0,
    y: 100,
    rotateX: 15,
    scale: 0.8,
    duration: 1.4,
    ease: "expo.out",
    scrollTrigger: {
        trigger: ".cards_Div .card",
        scroller: "body",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        scrub: 2,
    },
});

// Click_Section

gsap.from(".mobile_image", {
    scrollTrigger: {
        trigger: ".Click-section",
        start: "top 95%",
        markers: true,
        scrub: 2,
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 80,
    scale: 0.8,
    rotate: -6,
    duration: 1.4,
    ease: "elastic.out(1, 0.6)"
});

gsap.from(".right_coloum h1", {
    scrollTrigger: {
        trigger: ".Click-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 40,
    duration: 1.8,
    ease: "power2.out",
});

gsap.from(".right_coloum > p", {
    scrollTrigger: {
        trigger: ".Click-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 40,
    duration: 1.8,
    ease: "power2.out",
    delay: 0.1,
});

gsap.utils.toArray(".right_card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 0.8,
        delay: i * 0.15,
        ease: "back.out(1.7)"
    });
});

// App_Sction

gsap.from(".app_Div h1, .app_Div > p", {
    scrollTrigger: {
        trigger: ".app-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from(".number_Div p, .number_Div span", {
    scrollTrigger: {
        trigger: ".number_Div",
        start: "top 85%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    scale: 0.5,
    duration: 0.8,
    ease: "back.out(1.7)"
});

gsap.utils.toArray(".app_cards").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 80,
        duration: 0.9,
        ease: "power3.out",
        delay: i * 0.2
    });
});

// Reason_Section

gsap.from(".reason_text > *", {
    scrollTrigger: {
        trigger: ".reason-section",
        toggleActions: "play none none reverse",
        start: "top 80%",
        end: "buttom 10%",
        scrub: 2,
    },
    opacity: 0,
    y: 40,
    duration: 1.4,
    ease: "power2.out",
    stagger: 0.4
});

gsap.from(".reason-section .phone_mockup.small", {
    scrollTrigger: {
        trigger: ".reason-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 80,
    scale: 0.8,
    rotate: -8,
    duration: 1.4,
    ease: "back.out(1.7)"
});

gsap.from(".reason-section .phone_mockup.large", {
    scrollTrigger: {
        trigger: ".reason-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 80,
    scale: 0.8,
    rotate: 8,
    duration: 1.4,
    ease: "back.out(1.7)",
    delay: 0.2
});

// user_card_section

gsap.from(".users_card", {
    opacity: 0,
    y: 100,
    rotateX: 15,
    scale: 0.8,
    duration: 1.4,
    ease: "expo.out",
    scrollTrigger: {
        trigger: ".users_card",
        scroller: "body",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        scrub: 2,
    },
});

/* Download_Section */

gsap.from(".download_Div", {
    scrollTrigger: {
        trigger: ".download-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".reason_image .phone_mockup.small", {
    scrollTrigger: {
        trigger: ".download-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 80,
    scale: 0.8,
    rotate: -8,
    duration: 1.4,
    ease: "back.out(1.7)"
});

gsap.from(".reason_image .phone_mockup.large", {
    scrollTrigger: {
        trigger: ".download-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 80,
    scale: 0.8,
    rotate: 8,
    duration: 1.4,
    ease: "back.out(1.7)",
    delay: 0.2
});

gsap.from(".store_Div > div", {
    scrollTrigger: {
        trigger: ".download-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    scale: 0.7,
    y: 20,
    duration: 1,
    ease: "back.out(1.7)",
    stagger: 0.2
});