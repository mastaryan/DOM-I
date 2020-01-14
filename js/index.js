const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation
const navlinks = document.querySelectorAll("nav a");
const aTag = document.querySelectorAll("nav a");
const newNav = document.querySelectorAll("nav a");
const blog = document.createElement("a");
const moreIdeas = document.createElement("a");

navlinks[0].text = siteContent.nav["nav-items-1"]
navlinks[1].text = siteContent.nav["nav-items-2"]
navlinks[2].text = siteContent.nav["nav-items-3"]
navlinks[3].text = siteContent.nav["nav-items-4"]
navlinks[4].text = siteContent.nav["nav-items-5"]
navlinks[5].text = siteContent.nav["nav-items-6"]

blog.textContent = "Blog";
moreIdeas.textContent = "More Ideas";
blog.setAttribute("href", "#");
moreIdeas.setAttribute("href", "#");
blog.style.color = "green";
moreIdeas.style.color = "green";

newNav.prepend(blog);
newNav.append(moreIdeas);

navLink1.textContent = siteContent["nav"]["nav-item-1"];
navLink2.textContent = siteContent["nav"]["nav-item-2"];
navLink3.textContent = siteContent["nav"]["nav-item-3"];
navLink4.textContent = siteContent["nav"]["nav-item-4"];
navLink5.textContent = siteContent["nav"]["nav-item-5"];
navLink6.textContent = siteContent["nav"]["nav-item-6"];

aTag.forEach(a => (a.style.color = "green"));
