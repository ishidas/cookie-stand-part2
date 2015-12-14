var allStores = [];
var totalCookies = [];
var hoursOfOp = ['Store Name','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','Total'];
var table;
var tableRow;
//store object
function Store(storeName,maxCustmrPerHr,minCustmrPerHr,aveCookiePerHr) {
  this.storeName = storeName;
  this.maxCustmrPerHr = maxCustmrPerHr;
  this.minCustmrPerHr = minCustmrPerHr;
  this.aveCookiePerHr = aveCookiePerHr;
  this.hourlyCookies = [];
  allStores.push(this);
  this.storeIndex = 0;
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
  var hrCookiesSum = hrCookies1 + hrCookies2 + hrCookies3 + hrCookies4 + hrCookies5 + hrCookies6 + hrCookies7 + hrCookies8;
  return this.hourlyCookies.push(hrCookies1,hrCookies2,hrCookies3,hrCookies4,hrCookies5,hrCookies6,hrCookies7,hrCookies8, hrCookiesSum);
  console.log(totalCookiesPerHr());
};

Store.prototype.dataCells = function () {
  for( var j = 0; j < this.hourlyCookies.length; j ++){
  var rowEl = document.getElementById('storeRow'+this.storeIndex);
  console.log(rowEl);
  var dataEl = document.createElement('td');
  dataEl.setAttribute('class','dataSet');
  dataEl.textContent = this.hourlyCookies[j]
  rowEl.appendChild(dataEl);
  }
};

function createStoreNameColumn () {
  for( var i = 0; i < allStores.length; i++){
    var rowEl = document.createElement('tr');
    rowEl.setAttribute('id','storeRow'+[i]);
    var dataEl = document.createElement('td');
    dataEl.setAttribute('class','nameRow');
    dataEl.textContent = allStores[i].storeName;
    rowEl.appendChild(dataEl);
    table.appendChild(rowEl);
  }

}

//Create Table and Table Head with store hours
function createTable() {
  table = document.getElementById('salestable');
  tableRow = document.createElement('tr');
    for( var j = 0; j < hoursOfOp.length; j++){
      var tableHead = document.createElement('th');
      tableHead.setAttribute('id','hours'+[j]);
      tableHead.textContent = hoursOfOp[j];
      tableRow.appendChild(tableHead);
    }
  table.appendChild(tableRow);
}


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

createTable();
createStoreNameColumn();

PP.dataCells();
STA.storeIndex += 1;
STA.dataCells();
SCM.storeIndex += 2;
SCM.dataCells();
BS.storeIndex += 3;
BS.dataCells();
ALK.storeIndex += 4;
ALK.dataCells();



