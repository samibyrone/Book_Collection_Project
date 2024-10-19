const wrapper = document.getElementById("wrapper");
console.log(wrapper);

const bookTitles = document.getElementsByClassName("name");
console.log(bookTitles);

console.log(Array.isArray(bookTitles));

console.log(Array.isArray(Array.from(bookTitles)));
const arrayResult = Array.from(bookTitles);
// console.log(arrayResult);

arrayResult.forEach((element) => {
    console.log(element.textContent);
})


const Liss = document.getElementsByTagName("li");
console.log(Liss);

console.log(Array.isArray(Liss));

console.log(Array.isArray(Array.from(Liss)));
const li = Array.from(Liss);

li.forEach((element) => {
    console.log(element.textContent);
})



const pageBanner = document.querySelector("#page-banner");
console.log(pageBanner);
const pageBanners = document.querySelector("#page-banner");
console.log(pageBanners.childElementCount);


const bookToRead = document.querySelector(".title");
console.log(bookToRead);



const title = document.querySelectorAll(".title");
console.log(title);


const bookTitleName = document.querySelectorAll(".name");

bookTitleName.forEach((element) => {
    console.log(element.textContent);
    element.textContent += "(testFile)";
})





const bookList = document.querySelector("#book-list ul");
console.log(bookList);

bookList.addEventListener("click", (event) => {
    const deletedBtn = event.target.className;
    if(deletedBtn == "delete") {
        const liTag = event.target.parentNode;
        bookList.removeChild(liTag);
        // console.log(event);
    }
})

