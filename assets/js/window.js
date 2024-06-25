document.getElementById("postBtn").addEventListener("click", this.openWindow);
document.getElementById("postBtn2").addEventListener("click", this.openWindow3);

document
  .getElementById("deliveryBtn")
  .addEventListener("click", this.openWindow1);
document
  .getElementById("couponBtn")
  .addEventListener("click", this.openWindow2);
function openWindow(e) {
  console.log("open a popup window");
  let win = window.open(
    "postal_code_popup.html",
    null,
    "popup,width=520,height=500,left=200,top=47,noopener"
  );
  // win = window.open("", null, "popup,width=400,height=400");
  // win.document.write(
  //   "<html><head><title>Sample</title></head><body>Sample</body></html>"
  // );
  win.onload = (e) => {
    let timmy = setInterval(() => {
      let w = Math.random() * parseInt(window.screen.availWidth);
      let h = Math.random() * parseInt(window.screen.availHeight);
      win.resizeTo(w, h);
    }, 1000);

    setTimeout(() => {
      clearInterval(timmy);
      win.close();
    }, 6000);
  };
}

// deliver-window
function openWindow1(e) {
  console.log("open a popup window");
  let win = window.open(
    "delivery_window.html",
    null,
    "popup,width=701,height=500,left=200,top=47,noopener"
  );
  // win = window.open("", null, "popup,width=668,height=400");
  // win.document.write(
  //   "<html><head><title>Sample</title></head><body>Sample</body></html>"
  // );
  win.onload = (e) => {
    let timmy = setInterval(() => {
      let w = Math.random() * parseInt(window.screen.availWidth);
      let h = Math.random() * parseInt(window.screen.availHeight);
      win.resizeTo(w, h);
    }, 1000);

    setTimeout(() => {
      clearInterval(timmy);
      win.close();
    }, 6000);
  };
}

// coupon-window
function openWindow2(e) {
  console.log("open a popup window");
  let win = window.open(
    "coupon_window.html",
    null,
    "popup,width=701,height=500,left=200,top=47,noopener"
  );
  // win = window.open("", null, "popup,width=668,height=400");
  // win.document.write(
  //   "<html><head><title>Sample</title></head><body>Sample</body></html>"
  // );
  win.onload = (e) => {
    let timmy = setInterval(() => {
      let w = Math.random() * parseInt(window.screen.availWidth);
      let h = Math.random() * parseInt(window.screen.availHeight);
      win.resizeTo(w, h);
    }, 1000);

    setTimeout(() => {
      clearInterval(timmy);
      win.close();
    }, 6000);
  };
}

//
function openWindow3(e) {
  console.log("open a popup window");
  let win = window.open(
    "postal_code_popup.html",
    null,
    "popup,width=520,height=500,left=200,top=47,noopener"
  );
  // win = window.open("", null, "popup,width=400,height=400");
  // win.document.write(
  //   "<html><head><title>Sample</title></head><body>Sample</body></html>"
  // );
  win.onload = (e) => {
    let timmy = setInterval(() => {
      let w = Math.random() * parseInt(window.screen.availWidth);
      let h = Math.random() * parseInt(window.screen.availHeight);
      win.resizeTo(w, h);
    }, 1000);

    setTimeout(() => {
      clearInterval(timmy);
      win.close();
    }, 6000);
  };
}
