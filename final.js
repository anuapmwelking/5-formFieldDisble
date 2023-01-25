// -------------------
document.getElementById("mx_Custom_Lead_Source").onchange = function () {
  document.getElementById("two").setAttribute("disabled", "disabled");
  if (this.value == "others") {
    document.getElementById("two").removeAttribute("disabled");
    document.getElementById("mx_Grade").setAttribute("disabled", "disabled");
  }
  if (
    this.value == "GoogleSearch" ||
    this.value == "SocialMedia" ||
    this.value == "SmsWhatsappEmailer" ||
    this.value == "ApeejayStudent" ||
    this.value == "Newspaper" ||
    this.value == "Magazine" ||
    this.value == "FriendsRelative" ||
    this.value == "fairsAndExhibition" ||
    this.value == "Hoardings"
  ) {
    document.getElementById("two").value = "";
  }
};

//   if (this.value == "SocialMedia") {
//     document.getElementById("two").value = "";
//   }
//   if (this.value == "SmsWhatsappEmailer") {
//     document.getElementById("two").value = "";
//   }
//   if (this.value == "ApeejayStudent") {
//     document.getElementById("two").value = "";
//   }
//   if (this.value == "Newspaper") {
//     document.getElementById("two").value = "";
//   }
//   if (this.value == "Magazine") {
//     document.getElementById("two").value = "";
//   }
//   if (this.value == "FriendsRelative") {
//     document.getElementById("two").value = "";
//   }
//   if (this.value == "fairsAndExhibition") {
//     document.getElementById("two").value = "";
//   }
//   if (this.value == "Hoardings") {
//     document.getElementById("two").value = "";
//   }
