var allStores = [];
var totalCookies = [];
var hoursOfOp = ['Store Name','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];

//store object
function Store(storeName,maxCustmrPerHr,minCustmrPerHr,aveCookiePerHr) {
  this.storeName = storeName;
  this.maxCustmrPerHr = maxCustmrPerHr;
  this.minCustmrPerHr = minCustmrPerHr;
  this.aveCookiePerHr = aveCookiePerHr;
  this.hourlyCookies = [];
  allStores.push(this);

}

Store.prototype.randomNum = function () {
  return Math.floor(Math.random() * (this.maxCustmrPerHr - this.minCustmrPerHr + 1)) + this.minCustmrPerHr;

};

//Hourlycookies Array data creating function
Store.prototype.totalCookiesPerHr = function() {
  var hrCookies1 = Math.round(this.aveCookiePerHr * this.randomNum());
  var hrCookies2 = Math.round(this.aveCookiePerHr * this.randomNum());
  var hrCookies3 = Math.round(this.aveCookiePerHr * this.randomNum());
  var hrCookies4 = Math.round(this.aveCookiePerHr * this.randomNum());
  var hrCookies5 = Math.round(this.aveCookiePerHr * this.randomNum());
  var hrCookies6 = Math.round(this.aveCookiePerHr * this.randomNum());
  var hrCookies7 = Math.round(this.aveCookiePerHr * this.randomNum());
  var hrCookies8 = Math.round(this.aveCookiePerHr * this.randomNum());
  return this.hourlyCookies.push(hrCookies1,hrCookies2,hrCookies3,hrCookies4,hrCookies5,hrCookies6,hrCookies7,hrCookies8);
  console.log(totalCookiesPerHr());
};

// Store.prototype.hourlyCookiesArray = function() {
//     this.hourlyCookies.push(this.totalCookiesPerHr());
// };

//new stores
var PP = new Store('Pike Place Market',88,17,5.2);
var STA = new Store('Sea Tac Airport',44,6,1.2);
var SCM = new Store('Southcenter Mall',38,11,1.9);
var BS = new Store('Bellevue Square Mall',48,20,3.3);
var ALK = new Store('Alki',24,3,2.6);

//Total Cookies Per Hr Array
PP.totalCookiesPerHr();
STA.totalCookiesPerHr();
SCM.totalCookiesPerHr();
BS.totalCookiesPerHr();
ALK.totalCookiesPerHr();






