var allStores = [];
var totalCookies = [];

var trow = document.createElement('tr');
var tdata = document.createElement('td');

//store object
function Store(storeName,maxCustmrPerHr,minCustmrPerHr,aveCookiePerHr) {
  this.storeName = storeName;
  this.maxCustmrPerHr = maxCustmrPerHr;
  this.minCustmrPerHr = minCustmrPerHr;
  this.aveCookiePerHr = aveCookiePerHr;
}

//new stores
function storesCreated() {
  var PP = new Store('Pike Place Market','88','17','5.2');
  var STA = new Store('Sea Tac Airport','44','6','1.2');
  var SCM = new Store('Southcenter Mall','38','11','1.9');
  var BS = new Store('Bellevue Square Mall','48','20','3.3');
  var ALK = new Store('Alki','24','3','2.6');
  allStores.push(PP,STA,SCM,BS,ALK);
} storesCreated();

//random number generator
function randomNum() {
  for( var i = 0; i < allStores.length; i++ ){
    var maxCust = parseInt(allStores[i].maxCustmrPerHr);
    var minCust = parseInt(allStores[i].minCustmrPerHr);
    return Math.floor(Math.random() * (maxCust- minCust)) + minCust
  }
}
var randomNumOfCust = randomNum();

//Total Cookies per Hour
function totalCookiesPerHr() {
  for( var j = 0; j < allStores.length; j++ ){
  var aveCookies = parseInt(allStores[j].aveCookiePerHr);
  var totalC = randomNumOfCust * aveCookies;
  totalCookies.push(totalC);
  }
}
totalCookiesPerHr()

//Creating Table
function createTable() {
  var tableEl = document.getElementById('salestable');
  var thead = document.createElement('th');

  tableEl.appendChild(thead);

} createTable();










