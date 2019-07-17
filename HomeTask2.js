window.onload = function () {


    //Constant news channel variable
    const constNewsChannel = ["Aaj Tak", "Star News", "BBC News", "CNN News", "Zee News", "Bloomberg", "Aljazeera", "Sony News", "CNBC", "TOI"];

    //Main Div formation
    var mainDiv = document.createElement('div');
    mainDiv.id = 'container';
    mainDiv.className = 'mainDiv';
    document.body.appendChild(mainDiv);

    //Left Div formation
    var leftDiv = document.createElement('div');
    leftDiv.id = 'left';
    leftDiv.className = 'leftDiv';
    mainDiv.appendChild(leftDiv);

    //Header tag and element formation
    var header = document.createElement('header');
    document.body.appendChild(header);

    //Header para formation
    var headerPara = document.createElement('p');
    headerPara.className = 'header p';
    header.appendChild(headerPara);

    var h2 = document.createElement('h2');
    h2.textContent = 'NEWSFEED';
    h2.className = 'header h2';
    headerPara.appendChild(h2);

    var h6 = document.createElement('h6');
    h6.textContent = 'Yet Another NewsFeed';
    h6.className = 'header h6';
    headerPara.appendChild(h6);

    //Popup Div
    var popup = document.createElement('div');
    popup.id = 'popupSection';
    popup.className = 'popup';
    leftDiv.appendChild(popup);

    //Popup Content Div
    var popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    popup.appendChild(popupContent);

    //Popup close
    var popupClose = document.createElement('span');
    popupClose.className = 'close';
    popupClose.id = 'close';
    popupClose.onclick = function () { ClosePopUp()() };
    popupClose.innerHTML = "&times;"
    popupContent.appendChild(popupClose);

    var popupSection = document.createElement('section');
    popupSection.id = 'popupSection';
    popupContent.appendChild(popupSection);

    var popupTitle = document.createElement('p');
    popupTitle.id = 'popupTitle';
    popupSection.appendChild(popupTitle);

    var popupCategory = document.createElement('p');
    popupCategory.id = 'popupCategory';
    popupCategory.className = 'category';
    popupSection.appendChild(popupCategory);

    var popupDivContent = document.createElement('p');
    popupDivContent.id = 'popupDivContent';
    popupDivContent.className = 'content';
    popupSection.appendChild(popupDivContent);

    for (let i = 1; i < 11; i++) {
        var section = document.createElement('section');
        section.id = 'tittle' + i;
        if (i === 1) {
            section.className = 'section';
        }
        else {
            section.className = 'section line';
        }
        leftDiv.appendChild(section);

        var image = document.createElement('p');
        image.className = 'imageSection';
        section.appendChild(image);

        var contentdiv = document.createElement('div');
        contentdiv.className = 'contentDiv';
        section.appendChild(contentdiv);

        var title = document.createElement('p');
        title.textContent = constNewsChannel[i];
        title.className = 'channelName';
        title.id = 'newsName' + i;
        contentdiv.appendChild(title);

        var category = document.createElement('p');
        category.className = 'category';
        category.id = 'postedCategory' + i;
        category.textContent = 'Posted on 29 June, 2019 // Category: Category - ' + i;
        contentdiv.appendChild(category);

        var content = document.createElement('p');
        content.className = 'content';
        content.id = 'newsContent' + i;
        content.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque odio tortor, vulputate at suscipit ac, hendrerit vitae lectus. Duis convallis risus et nunc tincidunt, non ornare sem sagittis. Ut ut mollis lorem. Vestibulum ultrices eros id mattis bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing eros id mattis bibendum ut mollis lorem.';
        contentdiv.appendChild(content);

        var continuereading = document.createElement('button');
        continuereading.className = 'contentReading';
        continuereading.textContent = 'Continue Reading';
        continuereading.value = i;
        continuereading.onclick = function () { OpenPopUp(this.value)() };
        contentdiv.appendChild(continuereading);
    }

    var rightDiv = document.createElement('div');
    rightDiv.id = 'right';
    rightDiv.className = 'rightDiv';
    mainDiv.appendChild(rightDiv);

    var ddCategory = document.createElement('div');
    ddCategory.id = 'ddCategory';
    ddCategory.className = 'ddCategory';
    rightDiv.appendChild(ddCategory);

    var selectCategory = document.createElement('div');
    selectCategory.className = 'textHeader';
    selectCategory.textContent = 'SELECT CATEGORY';
    rightDiv.appendChild(selectCategory);

    var all = document.createElement('div');
    rightDiv.appendChild(all);

    var select = document.createElement('select');
    select.setAttribute("id", "selectCategory");
    select.className = 'ddWidth';
    select.onchange = function () { SelectCategory() };
    all.appendChild(select);

    for (let i = 0; i < 11; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", i);
        if (i === 0) {
            var text = document.createTextNode("All Channels");
        }
        else {
            var text = document.createTextNode(constNewsChannel[i]);
        }
        option.appendChild(text);
        document.getElementById("selectCategory").appendChild(option);
    }

    var subscribe = document.createElement('div');
    subscribe.className = 'padding';
    subscribe.textContent = 'SUBSCRIBE';
    rightDiv.appendChild(subscribe);

    var emaildiv = document.createElement('div');
    emaildiv.className = 'email';
    rightDiv.appendChild(emaildiv);

    var emailaddress = document.createElement('input');
    emailaddress.type = 'text';
    emailaddress.id = 'email';
    emailaddress.textContent = 'search';
    emailaddress.placeholder = 'Email Address';
    emailaddress.className = 'emailaddress';
    emaildiv.appendChild(emailaddress);

    var subscribe = document.createElement('button');
    subscribe.className = 'subscribe';
    subscribe.type = 'submit';
    subscribe.textContent = 'Subscribe';
    subscribe.onclick = function () { ValidateEmail() };
    emaildiv.appendChild(subscribe);

    var footer = document.createElement('footer');
    document.body.appendChild(footer);

    var footerp = document.createElement('p');
    footerp.className = 'footer';
    footer.appendChild(footerp);

    var footerh6 = document.createElement('h6');
    footerh6.innerHTML = '&copy;NewsFeed 2019';
    footerp.appendChild(footerh6);
}

function ValidateEmail() {
    var inputText = document.getElementById("email").value;
    var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(regEx)) {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("EmailAddress", inputText);
            alert('Email Address is locally stored - ' + localStorage.getItem("EmailAddress"));
        } else {
            document.getElementById("result").innerHTML = "Local Storage functionality is not supported";
        }
    }
    else {
        alert("Invalid Email address.");
    }
}

function SelectCategory() {
    var value = document.getElementById("selectCategory").value;
    if (value == 0) {
        for (let i = 1; i < 11; i++) {
            if (i === 1) {
                let tittle = document.getElementById("tittle" + i);
                tittle.style.display = "block";
                tittle.className = 'section';
            }
            else {
                let tittle = document.getElementById("tittle" + i);
                tittle.style.display = "block";
                tittle.className = 'section line';
            }
        }
    }
    else {
        for (let i = 1; i < 11; i++) {
            if (value == i) {
                let tittle = document.getElementById("tittle" + i);
                tittle.style.display = "block";
                tittle.className = 'section';
            }
            else {
                let tittle = document.getElementById("tittle" + i);
                tittle.style.display = "none";
            }
        }
    }
}

function OpenPopUp(value) {
    let text = "This is an additional text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque odio tortor, vulputate at suscipit ac, hendrerit vitae lectus.";
    document.getElementById("popupDivContent").innerHTML = document.getElementById("newsContent" + value).innerHTML + "<br/><br/>" + text;
    document.getElementById("popupTitle").innerHTML = document.getElementById("newsName" + value).innerHTML;
    document.getElementById("popupCategory").innerHTML = document.getElementById("postedCategory" + value).innerHTML;
    var popup = document.getElementById("popupSection");
    popup.style.display = "block";
}

function ClosePopUp() {
    var popup = document.getElementById("popupSection");
    popup.style.display = "none";
}