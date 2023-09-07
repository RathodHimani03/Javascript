// number method convert into number

let x = '99'
typeof(x) //string

Number(x) //0
typeof(Number(x)) //number

Number(false) //0
Number('false') //NaN
Number('0')//0

Number(true) //1
Number('true') //NaN
Number('1') //1

Number(undefined) //NaN
Number(null) //0

Number(undefined) == Number('true')
