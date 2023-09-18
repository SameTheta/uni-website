function check_number()
{
    let zipcode = document.getElementById("zipcode").value;
    let img;

    if (isNaN(zipcode) || zipcode <= 10000 || zipcode >= 99999) {
        img = "images/zip-code-not-given.png";
    } else {
        img = "images/zip-code-given.png";
    }

    document.getElementById("zipcode-response").src = img;
}