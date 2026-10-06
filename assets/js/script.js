const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 30){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".fade-up")
.forEach(el=>observer.observe(el));

// Cookie consent controls are shared by every page.
document.addEventListener("DOMContentLoaded", function () {

    const banner = document.getElementById("cookie-banner");
    const accept = document.getElementById("accept-cookies");
    const reject = document.getElementById("reject-cookies");

    if (!banner || !accept || !reject) return;

    const updateAnalyticsConsent = function (value) {
        if (typeof window.gtag === "function") {
            window.gtag("consent", "update", { analytics_storage: value });
        }
    };

    let consent = null;
    try {
        consent = window.localStorage.getItem("cookieConsent");
    } catch (error) {
        // Storage can be unavailable in private or restricted browsing modes.
    }

    if (consent === "accepted" || consent === "rejected") {
        banner.style.display = "none";
        updateAnalyticsConsent(consent === "accepted" ? "granted" : "denied");
    }

    const chooseConsent = function (value) {
        try {
            window.localStorage.setItem("cookieConsent", value);
        } catch (error) {
            // Still apply the choice for this page when persistent storage is blocked.
        }
        updateAnalyticsConsent(value === "accepted" ? "granted" : "denied");
        banner.style.display = "none";
    };

    accept.addEventListener("click", function () { chooseConsent("accepted"); });
    reject.addEventListener("click", function () { chooseConsent("rejected"); });
});
