function Filter(data, beers, cb) {
    const filteredBeers = [];
    if (data.name === 'abv') {
        let minRange = parseInt(data.value.split('-')[0]);
        let maxRange = parseInt(data.value.split('-')[1]);
        beers.forEach((beer) => {
            if (beer.hasOwnProperty(data.name) && beer[data.name] >= minRange && beer[data.name] < maxRange) {
                filteredBeers.push(beer);
            }
        });
        cb(filteredBeers);
    } else if (data.name === 'sort') {
        if (data.value === 'name') {
            cb(beers.sort(function(a, b) {
                let nameA = a[data.value].toUpperCase();
                let nameB = b[data.value].toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }));
        } else {
            cb(beers.sort(function(a, b) {
                return a[data.value] - b[data.value];
            }));
        }
    } else {
        beers.forEach((beer) => {
            if (beer.hasOwnProperty(data.name) && beer[data.name] === data.value) {
                filteredBeers.push(beer);
            }
        });
        cb(filteredBeers);
    }
}

export default Filter
