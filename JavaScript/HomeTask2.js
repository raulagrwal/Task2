window.onload = function () {

    //Constant news channel variable
    const newsChannel = ["Aaj Tak", "Star News", "BBC News", "CNN News", "Zee News", "Bloomberg", "Aljazeera", "Sony News", "CNBC", "TOI"];
    const innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque odio tortor, vulputate at suscipit ac, hendrerit vitae lectus. Duis convallis risus et nunc tincidunt, non ornare sem sagittis. Ut ut mollis lorem. Vestibulum ultrices eros id mattis bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing eros id mattis.';
    //Main Div formation
    const mainWrapper = document.createElement('div');
    mainWrapper.className = 'main-wrapper';
    document.body.appendChild(mainWrapper);

    //Header tag and element formation
    const header = document.createElement('div');
    header.className = 'header';
    document.body.appendChild(header);

    //Header para formation
    const headerPara = document.createElement('p');
    header.appendChild(headerPara);

    const headerTitle = document.createElement('h2');
    headerTitle.textContent = 'NEWSFEED ';
    headerPara.appendChild(headerTitle);

    const headerSubTitle = document.createElement('h6');
    headerSubTitle.textContent = ' Yet another newsfeed';
    headerPara.appendChild(headerSubTitle);
    mainWrapper.appendChild(header);

    //Content section formation
    const contentSection = document.createElement('div');
    contentSection.className = 'content-section';
    mainWrapper.appendChild(contentSection);

    //Popup Div
    const popup = document.createElement('div');
    popup.id = 'popupSection';
    popup.className = 'popup';
    contentSection.appendChild(popup);

    //Popup Content Div
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    popup.appendChild(popupContent);

    //Popup close
    const popupClose = document.createElement('span');
    popupClose.className = 'close';
    popupClose.id = 'close';
    popupClose.onclick = function () { closePopUp() };
    popupClose.innerHTML = "&times;"
    popupContent.appendChild(popupClose);

    const popupSection = document.createElement('div');
    popupContent.appendChild(popupSection);

    const popupTitle = document.createElement('p');
    popupTitle.id = 'popupTitle';
    popupTitle.className = "popup-title";
    popupSection.appendChild(popupTitle);

    const popupCategory = document.createElement('p');
    popupCategory.id = 'popupCategory';
    popupCategory.className = 'category';
    popupSection.appendChild(popupCategory);

    const popupTextContent = document.createElement('p');
    popupTextContent.id = 'popupTextContent';
    popupTextContent.className = 'content';
    popupSection.appendChild(popupTextContent);

    for (let i = 0; i < newsChannel.length; i++) {
        const section = document.createElement('div');
        section.id = 'tittle' + i;
        section.className = 'section';
        if (i != 0) {
            section.className = 'section line';
        }
        contentSection.appendChild(section);

        const image = document.createElement('p');
        image.className = 'news-logo';
        section.appendChild(image);

        const contentdiv = document.createElement('div');
        contentdiv.className = 'content-text';
        section.appendChild(contentdiv);

        const title = document.createElement('p');
        title.textContent = newsChannel[i];
        title.className = 'channel-name';
        title.id = 'newsName' + i;
        contentdiv.appendChild(title);

        const category = document.createElement('p');
        category.className = 'category';
        category.id = 'postedCategory' + i;
        category.textContent = 'Posted on 29 June, 2019 // Category: Category - ' + newsChannel[i];
        contentdiv.appendChild(category);

        const content = document.createElement('p');
        content.className = 'content';
        content.id = 'newsContent' + i;
        content.textContent = innerText;
        contentdiv.appendChild(content);

        const continuereading = document.createElement('button');
        continuereading.className = 'continue-reading';
        continuereading.textContent = 'Continue Reading';
        continuereading.value = i;
        continuereading.onclick = function () { openPopUp(this.value) };
        contentdiv.appendChild(continuereading);
    }

    const categorySubscribe = document.createElement('div');
    categorySubscribe.className = 'category-subscribe';
    mainWrapper.appendChild(categorySubscribe);

    const ddCategory = document.createElement('div');
    ddCategory.className = 'dd-category';
    categorySubscribe.appendChild(ddCategory);

    const selectCategory = document.createElement('div');
    selectCategory.className = 'text-header';
    selectCategory.textContent = 'SELECT CATEGORY';
    categorySubscribe.appendChild(selectCategory);

    const all = document.createElement('div');
    categorySubscribe.appendChild(all);

    const select = document.createElement('select');
    select.setAttribute("id", "selectCategory");
    select.className = 'dd-width';
    select.onchange = function () { openCategory() };
    all.appendChild(select);

    for (let i = 0; i < newsChannel.length; i++) {
        let text = document.createTextNode("All Channels");
        const option = document.createElement("option");
        option.setAttribute("value", i);
        if (i != 0) {
            text = document.createTextNode(newsChannel[i]);
        }
        option.appendChild(text);
        document.getElementById("selectCategory").appendChild(option);
    }

    const subscribeSection = document.createElement('div');
    subscribeSection.className = 'subscribe-text';
    subscribeSection.textContent = 'SUBSCRIBE';
    categorySubscribe.appendChild(subscribeSection);

    const emailSection = document.createElement('div');
    emailSection.className = 'email';
    categorySubscribe.appendChild(emailSection);

    const emailAddress = document.createElement('input');
    emailAddress.type = 'text';
    emailAddress.id = 'email';
    emailAddress.textContent = 'search';
    emailAddress.placeholder = 'Email Address';
    emailAddress.className = 'email-address';
    emailSection.appendChild(emailAddress);

    const subscribe = document.createElement('button');
    subscribe.className = 'subscribe';
    subscribe.type = 'submit';
    subscribe.textContent = 'Subscribe';
    subscribe.onclick = function () { validateEmail() };
    emailSection.appendChild(subscribe);

    const footer = document.createElement('div');
    document.body.appendChild(footer);

    const footerPara = document.createElement('p');
    footerPara.className = 'footer';
    footer.appendChild(footerPara);

    const footerText = document.createElement('h6');
    footerText.innerHTML = '&copy; NewsFeed 2019';
    footerPara.appendChild(footerText);
    mainWrapper.appendChild(footer);
}