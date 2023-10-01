//for selection
const table = document.querySelector('table');
const currency = document.getElementById('currency')
const count = document.getElementById('count')
const givenAmount = document.getElementById('gamount')
const totalAmount = document.getElementById('tamount')
const addButton = document.querySelector('div').children[5];
const calculateButton = document.querySelector('div').children[9];
const maindiv = document.querySelector('div');


let tableObj = {}
let sr = 0

//Add buttton onClick operation
const addButtonHandler = () => {

    let total;
    let currencyValue = parseInt(currency.value);
    let countValue = parseInt(count.value);

    if (currency.value.length != 0 && count.value.length != 0) {
        total = currencyValue * countValue;
        sr++;
        
        tableObj[`${sr}`] = {
            id: `${sr}`,
            currencyValue: `${currencyValue}`,
            countValue: `${countValue}`,
            total: `${total}`

        }
        console.log(tableObj)
        //for display values on table
        displayRow(tableObj[`${sr}`]['id'],
            tableObj[`${sr}`]['currencyValue'],
            tableObj[`${sr}`]['countValue'],
            tableObj[`${sr}`]['total']);


    }
    else {
        alert('please Enter the currency and count!')
    }
}

//display Rows on Table
const displayRow = (id, currency, count, total, modifie = false) => {

    const tr = document.createElement('tr')
    const th = document.createElement('th')
    th.textContent = `${id}`;
    tr.append(th);
    let arr = [currency, count, total];
    for (let i of arr) {
        const td = document.createElement('td');
        td.textContent = i;
        tr.append(td);
    }
    tr.setAttribute('id', id)
    table.append(tr);
    console.log(id)

}

//update operation
const modifieContent = (id, total, count) => {
    table.querySelectorAll('tr')[id].children[2].textContent = count
    table.querySelectorAll('tr')[id].children[3].textContent = total
}

//Calcute amount operation
const displaycalculation = (calcValue) => {
    temArr = [];
    for (let i in tableObj) {
       if(parseInt(tableObj[i]['currencyValue'])<= calcValue){

        tempObject = {}; //for storing id,cumOfNotes for getting min notes from all summ
        sumOfNote = 0 //getting total of all notes
        tamount = 0  //get total of all currency

        let currencyValue = parseInt(tableObj[i]['currencyValue']);
        let requirenote = parseInt(tableObj[i]['requirenote']);
        let total = requirenote * currencyValue;

        if (total == calcValue) {

            const creatdiv = document.createElement('div');
            creatdiv.textContent = `${currencyValue} x ${requirenote} = ${total}`;
            maindiv.append(creatdiv);
            tempObject[tableObj[i]['id']] = requirenote

            sumOfNote += requirenote;
            tamount += total
        }
        else {

            const creatdiv2 = document.createElement('div');
            creatdiv2.textContent = `${currencyValue} x ${requirenote} = ${total}`;
            tempObject[tableObj[i]['id']] = requirenote

            sumOfNote += requirenote
            tamount += total
            temp = calcValue - total;

            let div, mul;
            for (let j in tableObj) {

                    if (temp < calcValue && temp >= parseInt(tableObj[j]['currencyValue'])) {

                        div = parseInt(temp / parseInt(tableObj[j]['currencyValue']))
                        mul = div * parseInt(tableObj[j]['currencyValue'])
                        temp = temp - mul;
                        creatdiv2.textContent += `+ ${parseInt(tableObj[j]['currencyValue'])} x ${div} = ${mul}`;
                        tempObject[tableObj[j]['id']] = div

                        sumOfNote += div
                        tamount += mul
                        
                    }
                    maindiv.append(creatdiv2)
                
            }

        }
        
        console.log(tamount)
       
        if (tamount == calcValue) {
            tempObject.sumOfNote = sumOfNote
            temArr.push(tempObject)
        }
        console.log(temArr)
       }

    }

    let getsum = [];

    for (let i of temArr) {
        for (let j in i) {
            if (j == 'sumOfNote') {
                getsum.push(i[j])
            }
        }
    }
    console.log(getsum)

    //find the least number of notes  
    let getValue = getsum.sort((a, b) => a - b)[0];

    for (let i of temArr) {
        for (let j in i) {
            if (i['sumOfNote'] == getValue) {
                console.log('----')
                console.log(i);
                for (let k in i) {
                    if (k != 'sumOfNote') {
                        for (let r in tableObj) {
                            let id, tvalue, cvalue;
                            console.log('****')
                            if (k == r) {
                                id = tableObj[r]['id'];
                                console.log(parseInt(i[j] * tableObj[r]['currencyValue'])
                                )
                                console.log(parseInt(i[k]))
                                tvalue = parseInt(tableObj[r]['total']) - parseInt(i[k] * tableObj[r]['currencyValue'])
                                cvalue = parseInt(tableObj[r]['countValue']) - parseInt(i[k])
                                tableObj[r]['total'] = tvalue;
                                tableObj[r]['countValue'] = cvalue
                                //for modification
                                modifieContent(id, tvalue, cvalue)
                                console.log(tableObj[r])
                            }
                        }
                    }
                }
            }
            break
        }
    }



}

const calculateButtonHandler = () => {

    let givenAmountValue = parseInt(givenAmount.value);
    let totalAmountValue = parseInt(totalAmount.value);

    let calcValue = givenAmountValue - totalAmountValue;


    if (givenAmountValue > totalAmountValue) {
        for (let i in tableObj) {
            let currencyValue = parseInt(tableObj[i]['currencyValue']);
            let currencyCount = parseInt(tableObj[i]['countValue']);

            if (currencyValue <= calcValue) {
                let tcount;
                tcount = calcValue / currencyValue;
                console.log(tcount)
                if (tcount == 1) {
                    tcount = 1

                }
                if (tcount >= currencyCount) {
                    tcount = currencyCount
                }


                tableObj[i].requirenote = tcount
            }

        }
        console.log(tableObj)

        displaycalculation(calcValue)
    }

}

addButton.addEventListener('click', addButtonHandler)
calculateButton.addEventListener('click', calculateButtonHandler)
