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