var cookieName = "shownModal";

var onSuccess = function(location) {
  console.log(
    "Lookup successful:\n\n" + JSON.stringify(location, undefined, 4)
  );

  if (
    location.country.iso_code === "NZ" ||
    location.country.iso_code === "AU"
  ) {
    checkModal();
  }
};

var onError = function(error) {
  console.log("Error:\n\n" + JSON.stringify(error, undefined, 4));
};

function addCookie() {
  docCookies.setItem(cookieName, true, Infinity, "/");
}

function checkModal() {
  window.setTimeout(displayModal, 200);
}

function displayModal() {
  $("#geoModal").modal({ show: true });
}

if (geoip2) {
  if (window.location.href.indexOf("www.qjumpers.com") > -1) {
    var hasCookie = docCookies.getItem(cookieName);

    if (!hasCookie) {
      geoip2.country(onSuccess, onError);
      addCookie();
    }
  }
}
