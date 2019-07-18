function openCategory() {
    const value = document.getElementById("selectCategory").value;
    if (value == 0) {
        showAllCategory();
    }
    else {
        for (let i = 0; i < 10; i++) {
            const title = document.getElementById("tittle" + i);
            title.className = 'section';
            if (value == i) {
                title.style.display = "block";
            }
            else {
                title.style.display = "none";
            }
        }
    }
}

function showAllCategory(){
    for (let i = 0; i < 10; i++) {
        const tittle = document.getElementById("tittle" + i);
            tittle.style.display = "block";
            tittle.className = 'section';
            //if second section add class line for line break
        if (i != 0) {
            tittle.className = 'section line';
        }
    }
}

function openPopUp(value) {
    const text = "This is an additional text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque odio tortor, vulputate at suscipit ac, hendrerit vitae lectus.";
    document.getElementById("popupTextContent").innerHTML = document.getElementById("newsContent" + value).innerHTML + "<br/><br/>" + text;
    document.getElementById("popupTitle").innerHTML = document.getElementById("newsName" + value).innerHTML;
    document.getElementById("popupCategory").innerHTML = document.getElementById("postedCategory" + value).innerHTML;
    const popup = document.getElementById("popupSection");
    popup.style.display = "block";
}

function closePopUp() {
    const popup = document.getElementById("popupSection");
    popup.style.display = "none";
}