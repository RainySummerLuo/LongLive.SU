function setInnerText(element, content) {
    if (typeof element.innerText === 'string') {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}


function getInterval(start, end) {
    let interval = end - start;
    let day;

    interval /= 1000;

    day = Math.round(interval / 60 / 60 / 24);

    return {
        day: day
    }
}