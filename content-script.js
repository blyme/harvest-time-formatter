function minTommss(minutes) {
    // https://stackoverflow.com/a/17599562
    var sign = minutes < 0 ? "-" : "";
    var min = Math.floor(Math.abs(minutes));
    var sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return (
        sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec
    );
}

function convert() {
    let hours = Array.from(
        document.querySelectorAll(".pds-table .pds-text-right")
    );

    if (!hours.length) return;

    hours.forEach((entry) => {
        if (!entry.innerText.includes(",")) {
            return;
        }

        const toFloat = parseFloat(entry.innerText.replace(",", "."));

        if (entry.querySelector("a")) {
            entry.querySelector("a").innerHTML += ` / ${minTommss(toFloat)}`;
            return;
        }

        entry.innerHTML += ` / ${minTommss(toFloat)}`;
    });
}

convert();
