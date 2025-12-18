let items = [
{name: "iphone X", Price: 200, Qty: 5, Total: (1000)},
{name: "iphone 11", Price: 300, Qty: 3, Total: (900)},
{name: "iphine 12", Price: 350, Qty: 4, Total: (1400)},
];
let tbody = document.querySelector(`tbody`);
 let itemName = document.querySelector(`#itemName`)
let itemPrice = document.querySelector(`#itemPrice`)
let itemQty = document.querySelector(`#itemQty`)

let showdata = () => {
    tbody.innerHTML = ``;
    items.forEach ((el, index) =>{
    tbody.innerHTML += `
    <tr>
    <td>${index+1}</td>
    <td>${el.name}</td>
    <td>${el.Price}</td>
    <td>${el.Qty}</td>
    <td>${el.Price * el.Qty}</td>
    <td><button onclick="editItem(${index})" class="btn btn-warning">Edit</button>
    <button onclick="deleteItem(${index})" class="btn btn-danger">Del</button></td>
<td>
<div class="heart-container" title="Like">
            <input type="checkbox" class="checkbox" id="Give-It-An-Id">
            <div class="svg-container">
                <svg viewBox="0 0 24 24" class="svg-outline" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                    </path>
                </svg>
                <svg viewBox="0 0 24 24" class="svg-filled" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                    </path>
                </svg>
                <svg class="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                </svg>
            </div>
        </div>
        </td>

    
    
    </tr>
    
    
    `;
    });
}
showdata();
let addNewitem = () => {
let newItemOpj = {
    name: itemName.value,
    Price: itemPrice.value,
    Qty: itemQty.value,
};



    items.push(newItemOpj);
    showdata();


}



let deleteItem = (index) => {
    let confirmDel = confirm(`are you sure to delete ${items[index].name}?`);
    if (confirmDel== true) {
    items.splice(index, 1);
    showdata();
}
}
let editItem = (index) => {
let confirmEdit =  confirm(`are you sure to edit ${items[index].name} ?`);
    if (confirmEdit == true) {
        let newName = prompt("enter new name", items[index].name);
        let newPrice = prompt("enter new price", items[index].Price);
        let newQty = prompt("enter new Qty", items[index].Qty);
        items[index].name = newName;
        items[index].Price = newPrice;
        items[index].Qty = newQty;
        showdata();
}



}