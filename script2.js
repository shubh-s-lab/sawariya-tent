function calc2() {
    document.getElementById('output').innerHTML = "";
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let i = document.getElementById('i').value;
    let h = document.getElementById('h').value;
    let ans1 = [];
    let ans2 = [];
    let diff1 = (a - i) / 2;
    let diff2 = (b - i) / 2;
    if (diff1 != 0 && diff2 != 0) {
        let add1 = h * h + diff2 * diff2;
        let add2 = h * h + diff1 * diff1;
        let param1 = diff1;
        while (param1 >= 3) {
            let temp = param1 * param1 + add1;
            ans1.push(Math.sqrt(temp));
            param1 -= 3;
        }
        ans1.push(Math.sqrt(add1));
        let param2 = diff2;
        while (param2 >= 3) {
            let temp = param2 * param2 + add2;
            ans2.push(Math.sqrt(temp));
            param2 -= 3;
        }
        ans2.push(Math.sqrt(add2));
        document.getElementById('output').innerHTML += (`For side ${a}: <br>`);
        for (let k = 0; k < ans1.length; ++k) {
            let x = ans1[k];
            let intPart = Math.floor(x);
            let fracPart = x - intPart;
            let nw = fracPart * 12;
            let nwinp, nwfp;
            nwinp = Math.floor(nw);
            nwfp = nw - nwinp;
            if (nwfp >= 0.5) {
                document.getElementById('output').innerHTML += (`${intPart} ${nwinp} <br>`);
            } else {
                nwinp = nwinp + 1;
                document.getElementById('output').innerHTML += (`${intPart} ${nwinp} <br>`);
            }
        }
        document.getElementById('output').innerHTML += (`<br>For side ${b}: <br>`);
        for (let k = 0; k < ans2.length; ++k) {
            let x = ans2[k];
            let intPart = Math.floor(x);
            let fracPart = x - intPart;
            let nw = fracPart * 12;
            let nwinp, nwfp;
            nwinp = Math.floor(nw);
            nwfp = nw - nwinp;
            if (nwfp >= 0.5) {
                document.getElementById('output').innerHTML += (`${intPart} ${nwinp} <br>`);
            } else {
                nwinp = nwinp + 1;
                document.getElementById('output').innerHTML += (`${intPart} ${nwinp} <br>`);
            }
        }
    }
}