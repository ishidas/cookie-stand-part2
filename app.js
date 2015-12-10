var allStores = [];
var totalCookies = [];
var hoursOfOp = ['Store Name','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
// var trow = document.createElement('tr');
// var tdata = document.createElement('td');

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
  for( var j = 1; j < hoursOfOp.length; j++ ){
    for( var i = 0; i < allStores.length; i++ ){
      var aveCookies = parseInt(allStores[i].aveCookiePerHr);
      var totalC = randomNumOfCust * aveCookies;
    }
      randomNumOfCust = randomNum();
      totalCookies.push(totalC);

  }
} totalCookiesPerHr()

//Creating Table
  var tableEl = document.getElementById('salestable');
  var thead = document.createElement('th');
  var trow = document.createElement('tr');
//creating Table head
function createTableHead() {
  for( var i = 0; i < hoursOfOp.length; i++ ){
    var tdata = document.createElement('td');
    tdata.textContent = hoursOfOp[i];
    trow.appendChild(tdata);
  }
    thead.appendChild(trow);
    tableEl.appendChild(thead);
} createTableHead();

// Creating Table rows with sales data and store name
function createTableRows() {
    for( var i = 0; i < allStores.length; i++ ){
      var trow2 = document.createElement('tr');
      trow2.setAttribute('id','row'+[i]);
      var tdata2 = document.createElement('td');
      tdata2.textContent = allStores[i].storeName;
      trow2.appendChild(tdata2);
      tableEl.appendChild(trow2);

    for( var j = 0; j < hoursOfOp.length; j++ ){
    var rowEl = document.getElementById('row'+[i]);
    var tdata3 = document.createElement('td');
    tdata3.textContent = totalCookies[j];
    rowEl.appendChild(tdata3);
    tableEl.appendChild(rowEl);
    // break;
    }
  }
} createTableRows();









