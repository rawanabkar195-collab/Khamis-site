let button = document.getElementById("startBtn");

button.onclick = function() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("mainSite").style.display = "block";
    document.getElementById("startBtn").addEventListener("click", function() {
    document.getElementById("mainSite").style.display = "block";
});
};

function showMore() {

let moreNews = document.getElementById("moreNews");
let button = document.getElementById("moreBtn");

if (moreNews.innerHTML === "") {

moreNews.innerHTML = `
<table class="news-table">

<tr>
<th class="news-title">مهرجانات وفعاليات في خميس مشيط</th>
</tr>

<tr>
<td>

<img class="news-image" src="https://albiladdaily.com/wp-content/uploads/2022/07/%D9%85%D9%87%D8%B1%D8%AC%D8%A7%D9%86-1170x713.jpg" alt="خميس مشيط">

<p class="news-text">
تُعد محافظة خميس مشيط من أبرز مدن منطقة عسير التي تشهد فعاليات
ومهرجانات متنوعة على مدار العام.
</p>

<p class="news-text">
تسهم هذه الفعاليات في إبراز الهوية الثقافية للمدينة وتعزيز
السياحة المحلية ودعم الأنشطة الاقتصادية في المنطقة.
</p>

</td>
</tr>

</table>
`;

moreNews.appendChild(button);   // ينزل الزر تحت الخبر
button.innerText = "إظهار أقل";

} else {

moreNews.innerHTML = "";
button.innerText = "المزيد";

document.querySelector(".news").appendChild(button); 
// يرجع الزر مكانه الطبيعي

}

}

document.getElementById("year").textContent = new Date().getFullYear();

// زر البدء وتفعيل الموقع
let startBtn = document.getElementById("startBtn");

startBtn.onclick = function() {
    // إضافة تأثير اختفاء ناعم لصفحة الترحيب
    let welcome = document.getElementById("welcome");
    welcome.style.transition = "opacity 0.5s ease";
    welcome.style.opacity = "0";
    
    setTimeout(() => {
        welcome.style.display = "none";
        document.getElementById("mainSite").style.display = "block";
        // تفعيل الأنيميشن للأقسام بعد ظهور الموقع
        window.scrollTo(0, 0);
    }, 500);
};

// وظيفة عرض المزيد من الأخبار
function showMore() {
    let moreNews = document.getElementById("moreNews");
    let button = document.getElementById("moreBtn");

    if (moreNews.innerHTML === "") {
        moreNews.style.opacity = "0";
        moreNews.innerHTML = `
        <table class="news-table" style="animation: fadeInUp 0.6s ease forwards;">
            <tr><th class="news-title">مهرجانات وفعاليات في خميس مشيط</th></tr>
            <tr>
                <td>
                    <img class="news-image" src="https://albiladdaily.com/wp-content/uploads/2022/07/%D9%85%D9%87%D8%B1%D8%AC%D8%A7%D9%86-1170x713.jpg" alt="مهرجان">
                    <p class="news-text">تُعد محافظة خميس مشيط من أبرز مدن منطقة عسير التي تشهد فعاليات ومهرجانات متنوعة على مدار العام.</p>
                    <p class="news-text">تسهم هذه الفعاليات في إبراز الهوية الثقافية للمدينة وتعزيز السياحة المحلية ودعم الأنشطة الاقتصادية في المنطقة.</p>
                </td>
            </tr>
        </table>`;
        
        moreNews.style.opacity = "1";
        moreNews.appendChild(button);
        button.innerText = "إظهار أقل";
    } else {
        moreNews.innerHTML = "";
        button.innerText = "المزيد";
        document.querySelector(".news").appendChild(button);
    }
}

// تحديث السنة تلقائياً
document.getElementById("year").textContent = new Date().getFullYear();

// رسالة المبرمجة السرية في الكونسول
console.log("%c تم تطوير الموقع بواسطة المبرمجة روان 👩‍💻✨", "color: #944416; font-size: 20px; font-weight: bold;");