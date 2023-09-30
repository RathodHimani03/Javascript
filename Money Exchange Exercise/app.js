//for selection
const table = document.querySelector('table');
const currency = document.getElementById('currency')
const count = document.getElementById('count')
const givenAmount = document.getElementById('gamount')
const totalAmount = document.getElementById('tamount')
const addButton = document.querySelector('div').children[5];
const calculateButton = document.querySelector('div').children[9];
const maindiv = document.querySelector('div');



//for adding the new record


let arrCurrency = [];
let arrcount = [];
let arrtotal = [];

const addButtonHandler = () => {

    let total;
    let currencyValue = parseInt(currency.value);
    let countValue = parseInt(count.value);

    if (currency.value.length != 0 && count.value.length != 0) {
        total = currencyValue * countValue;
        displayRow(currencyValue, countValue, total);
        arrCurrency.push(currencyValue);
        arrcount.push(countValue);
        arrtotal.push(total);

    }
    else {
        alert('please Enter the currency and count!')
    }
}

let sr = 1;
const displayRow = (currency, count, total, modifimod = false) => {

    const tr = document.createElement('tr')
    const th = document.createElement('th')
    th.textContent = `${sr++}`;
    tr.append(th);
    let arr = [currency, count, total];
    for (let i of arr) {
        const td = document.createElement('td');
        td.textContent = i;
        tr.append(td);
    }
    tr.setAttribute('id', sr)
    table.append(tr);

}

const displaycalculation = (countObj, calcValue) => {
    const sorted = Object.keys(countObj).sort((a, b) => a - b)
    
    for (let i of sorted) {
        let sum;
     
        let total = i * countObj[i];

        if (total == calcValue) {
            const creatdiv = document.createElement('div');
            creatdiv.textContent = `${countObj[i]} x ${i} = ${total}`;
            maindiv.append(creatdiv);
            sum = total;
            
           

        }
        else {
            let temp;
            let subobj = {}
            const creatdiv2 = document.createElement('div');
            creatdiv2.textContent = `${countObj[i]} x ${i} = ${total}`;
            // let find = parseInt(calcValue/total);
            subobj[i] = countObj[sorted[i]]
            temp = calcValue - total;
            sum = total; //for checking that totall wil been calcvalue

            let div, mul;
            for (let j = sorted.indexOf(i) + 1; j < sorted.length; j++) {

                if (temp <= calcValue && temp >= countObj[sorted[j]]) {
                    console.log(countObj[sorted[j]])
                    div = parseInt(temp / countObj[sorted[j]])
                    mul = div * countObj[sorted[j]]
                    temp = temp - mul;
                    creatdiv2.textContent += `+ ${countObj[sorted[j]]} x ${div} = ${mul}`;
                    sum += mul
                   
                    subobj[div] = countObj[sorted[j]]
                }
                maindiv.append(creatdiv2)
            }

         

        }

    }
  

}

const calculateButtonHandler = () => {

    let givenAmountValue = parseInt(givenAmount.value);
    let totalAmountValue = parseInt(totalAmount.value);

    let calcValue = givenAmountValue - totalAmountValue;
    let tcountObj = {};

    if (givenAmountValue > totalAmountValue) {
        for (let i = 0; i < arrCurrency.length; i++) {
            if (arrCurrency[i] < calcValue) {
                let tcount;
                tcount = calcValue / arrCurrency[i];
                if (tcount > arrcount[i]) {
                    tcount = arrcount[i]
                }
                // const creatdiv = document.createElement('div');
                // creatdiv.textContent = `${arrCurrency[i]} x ${tcount} = ${arrCurrency[i]*tcount}`;
                // maindiv.append(creatdiv);
                tcountObj[tcount] = arrCurrency[i];
            }

        }
        //     let returnVal = Object.keys(tcountObj).sort((a,b)=>a-b)[0]
        //    console.log(returnVal)
        console.log(tcountObj)
        displaycalculation(tcountObj, calcValue)

    }

}

addButton.addEventListener('click', addButtonHandler)
calculateButton.addEventListener('click', calculateButtonHandler)