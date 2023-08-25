let c = 0;
let f = 1;
let s = '';

for (let i = 0; i < 25; i++) {
    if (c <= 3) {

        if (f % 2 != 0) {
            for (let j = 0; j < 17; j++) {

                s += 'o'
            }
            console.log(s);
            s = ''
            c++;
        }
        else {
            if (f != 2) {
                for (let k = 0; k < f * 2; k++) {
                    s += '  '
                }
            }
            for (let j = 0; j < 4; j++) {

                s += 'o'
            }
            console.log(s);
            s = ''
            c++;
        }
        if (c == 3) {

            c = 0;
            f++;
            s = ''

        }





    }







}




// output:

// ooooooooooooooooo                                                       
// ooooooooooooooooo
// ooooooooooooooooo                                                       
// oooo                                                                    
// oooo                                                                    
// oooo
// ooooooooooooooooo                                                       
// ooooooooooooooooo                                                       
// ooooooooooooooooo                                                       
//         oooo
//         oooo
//         oooo
// ooooooooooooooooo
// ooooooooooooooooo                                                       
// ooooooooooooooooo                    