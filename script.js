let bengali = false;

document.getElementById("lang-btn").addEventListener("click", function(){

if(!bengali){

// HERO

document.getElementById("hero-title").innerHTML =
"এক নতুন প্রজন্ম<br>এক শক্তিশালী বাংলা";

document.getElementById("hero-text").innerHTML =
"জুবো বাংলা সমিতি একটি যুব-নেতৃত্বাধীন সংগঠন, যা ঐক্য, দায়িত্ব এবং জনসেবার মাধ্যমে একটি উন্নত পশ্চিমবঙ্গ গড়ে তোলার লক্ষ্য নিয়ে কাজ করে।";



// ABOUT

document.getElementById("about-title").innerHTML =
"আমাদের সম্পর্কে";

document.getElementById("about-text").innerHTML =
"জুবো বাংলা সমিতি একটি যুব-নেতৃত্বাধীন সংগঠন, যার লক্ষ্য একটি শক্তিশালী, পরিচ্ছন্ন এবং সমৃদ্ধ পশ্চিমবঙ্গ গড়ে তোলা।";



// VALUES

document.getElementById("values-title").innerHTML =
"আমাদের মূল মূল্যবোধ";



// VISION

document.getElementById("vision-title").innerHTML =
"বাংলার জন্য আমাদের লক্ষ্য";



// FOUNDER

document.getElementById("founder-title").innerHTML =
"প্রতিষ্ঠাতা";



// NEWS

document.getElementById("news-title").innerHTML =
"সংবাদ ও ঘোষণা";



// JOIN

document.getElementById("join-title").innerHTML =
"আন্দোলনে যোগ দিন";



// COMPLAINTS

document.getElementById("complaints-title").innerHTML =
"অভিযোগ ও পরামর্শ";



// DONATE

document.getElementById("donate-title").innerHTML =
"আমাদের সমর্থন করুন";



// CONTACT

document.getElementById("contact-title").innerHTML =
"যোগাযোগ করুন";



// BELIEF

document.getElementById("belief-title").innerHTML =
"আমাদের বিশ্বাস";



// FOOTER

document.getElementById("footer-text").innerHTML =
"© ২০২৬ জুবো বাংলা সমিতি। সর্বস্বত্ব সংরক্ষিত।";



// BUTTON

this.innerHTML =
"বাংলা | English";

bengali = true;

}

else{

// HERO

document.getElementById("hero-title").innerHTML =
"A New Generation.<br>A Stronger Bengal.";

document.getElementById("hero-text").innerHTML =
"Jubo Bangla Samiti is a youth-led movement dedicated to building a cleaner, safer and more prosperous West Bengal through unity, responsibility and community participation.";



// ABOUT

document.getElementById("about-title").innerHTML =
"Who We Are";

document.getElementById("about-text").innerHTML =
"Jubo Bangla Samiti is a youth-led organisation founded with the dream of creating a stronger, cleaner and more prosperous West Bengal.";



// VALUES

document.getElementById("values-title").innerHTML =
"Our Core Values";



// VISION

document.getElementById("vision-title").innerHTML =
"Our Vision for Bengal";



// FOUNDER

document.getElementById("founder-title").innerHTML =
"Founder";



// NEWS

document.getElementById("news-title").innerHTML =
"News & Announcements";



// JOIN

document.getElementById("join-title").innerHTML =
"Join the Movement";



// COMPLAINTS

document.getElementById("complaints-title").innerHTML =
"Complaints & Suggestions";



// DONATE

document.getElementById("donate-title").innerHTML =
"Support Our Mission";



// CONTACT

document.getElementById("contact-title").innerHTML =
"Contact Us";



// BELIEF

document.getElementById("belief-title").innerHTML =
"Our Belief";



// FOOTER

document.getElementById("footer-text").innerHTML =
"© 2026 Jubo Bangla Samiti. All Rights Reserved.";



// BUTTON

this.innerHTML =
"English | বাংলা";

bengali = false;

}

});