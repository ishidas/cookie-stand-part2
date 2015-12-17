var allStores = [];
var hoursOfOp = ['Store Name','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
var cookiesTotal = ['Total',];
var newStoreArray = [];
var table;
var tableRow;
var tableRow2;
var tabledata;
var storeIndex = 0;
//store object
function Store(storeName,maxCustmrPerHr,minCustmrPerHr,aveCookiePerHr) {
  this.storeName = storeName;
  this.maxCustmrPerHr = maxCustmrPerHr;
  this.minCustmrPerHr = minCustmrPerHr;
  this.aveCookiePerHr = aveCookiePerHr;
  allStores.push(this);
  this.hourlyCookies = [];
  this.totalSales = 0;
  cookiesTotal.push(this.totalSales);

}

Store.prototype.randomNum = function () {
  return Math.floor(Math.random() * (this.maxCustmrPerHr - this.minCustmrPerHr + 1)) + this.minCustmrPerHr;

};

// cookied per hr creatig function
Store.prototype.cookiesPerHr = function() {
  return Math.round(this.aveCookiePerHr * this.randomNum());
  console.log(totalCookiesPerHr());
};

Store.prototype.hourlyCookiesOfThisStore = function (){
  for(var i = 1; i < hoursOfOp.length; i++ ){
    this.hourlyCookies.push(this.cookiesPerHr());
    console.log();
  }
    console.log(this.totalSales += this.cookiesPerHr());
};

Store.prototype.createTableDataSet = function (){
  var rows = document.getElementsByClassName('storeRow');
  for(var i = 0; i < this.hourlyCookies.length; i++){
    var dataCell = document.createElement('td');
    dataCell.textContent = this.hourlyCookies[i];
    rows[storeIndex].appendChild(dataCell);
  }
};

// Store.prototype.createTotalColumn = function(){
//   var rows = document.getElementsByClassName('storeRow');
//   for(var i = 0; i < allStores.length; i++){
//     for(var j = 0; j < ){

//     }
//   }
// };
// //new stores
var PP = new Store('Pike Place Market',88,17,5.2);
var STA = new Store('Sea Tac Airport',44,6,1.2);
var SCM = new Store('Southcenter Mall',38,11,1.9);
var BS = new Store('Bellevue Square Mall',48,20,3.3);
var ALK = new Store('Alki',24,3,2.6);

//Creating Table with Hours of Ops in it
function createTable (){
  table = document.getElementById('salestable');
  tableRow = document.createElement('tr');
  tableRow.setAttribute('id','hoursHead');
  for(var i = 0; i < hoursOfOp.length; i++){
    var tableHead = document.createElement('th');
    tableHead.textContent = hoursOfOp[i];
    tableRow.appendChild(tableHead);
  }
  table.appendChild(tableRow);
} createTable();

function createTableStoreName (){
  for(var i = 0; i < allStores.length; i++){
    tableRow2 = document.createElement('tr');
    tableRow2.setAttribute('class','storeRow');
    tabledata = document.createElement('td');
    tabledata.textContent = allStores[i].storeName;
    tableRow2.appendChild(tabledata);
    table.appendChild(tableRow2);
  }
} createTableStoreName();


//adding data to this.hourlyCookies array
PP.hourlyCookiesOfThisStore();
STA.hourlyCookiesOfThisStore();
SCM.hourlyCookiesOfThisStore();
BS.hourlyCookiesOfThisStore();
ALK.hourlyCookiesOfThisStore();

PP.createTableDataSet();
storeIndex += 1;
STA.createTableDataSet();
storeIndex += 1;
SCM.createTableDataSet();
storeIndex += 1;
BS.createTableDataSet();
storeIndex += 1;
ALK.createTableDataSet();
























