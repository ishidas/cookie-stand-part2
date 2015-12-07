var allStores = [];
var totalCookies = [];
var storeHours = ['Store Name','10am','11am','12noon','1pm','2pm','3pm','4pm','5pm'];

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
  for( var i = 0; i < storeHours.length; i++ ){
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
} totalCookiesPerHr()

//Creating Table
var tableEl = document.getElementById('salestable');
var thead = document.createElement('th');
    thead.setAttribute('id','thead');
var trowForHead = document.createElement('tr');

function createTable() {
  for( var i = 0; i < storeHours.length; i++ ){
    //store hours table head
    var dataCell = document.createElement('td');
    dataCell.textContent = storeHours[i];
    trowForHead.appendChild(dataCell);
    thead.appendChild(trowForHead);
    tableEl.appendChild(thead);
  }
} createTable();

for( var j = 0; j < allStores.length; j++ ) {
    // store names
    var rowEl = document.createElement('tr');
    rowEl.setAttribute('id','trow'+[j]);

    var dataCell2 = document.createElement('td');
    dataCell2.textContent = allStores[j].storeName;
    rowEl.appendChild(dataCell2);
    tableEl.appendChild(rowEl);
}






