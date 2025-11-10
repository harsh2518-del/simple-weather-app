let i = document.querySelector('.haha');
const sec = document.querySelector('button');
const thi = document.querySelector('.ph1');
const fo = document.querySelector('.ph2');
const ha = document.querySelector('h2');
sec.addEventListener('click', () => {
    let fin;
    let fin1;
    let fin2;
    let val = i.value;
    let part = val.trim().split(/\s+/);
    const fora = () => {
        const url = `https://open-weather13.p.rapidapi.com/city?city=${fin2}&lang=EN`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '295b84369dmsh5b74790de313b12p183101jsnd460c9a2330f',
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
        };
        (async () => {
            const response = await fetch(url, options);
            const result = await response.json();
            let for1 = result.weather[0].description;
            let for2 = result.main.temp;
            let for3 = result.sys.country;
            let for4 = result.wind.speed;
            thi.textContent = `The overall discription is ${for1} and The temparature is ${for2}`;
            fo.textContent = `It it about country ${for3} and the wind speed is ${for4} right now`;
        })();
    };
    if ((part.length) === 1) {
        fin2 = val;
        fora();
    }
    else {
        fin = part[0];
        fin1 = part[1];
        fin2 = `${fin}%20${fin1}`;
        fora();
    }
});