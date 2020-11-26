function domainName() {
    // TODO: Parse `document.URL` to extract the "domain name" from it
    return document.URL.replace("http://localhost/","localhost");
}

if (typeof module !== "undefined") {
    module.exports = domainName;
} else {
    document.write(domainName());
}
