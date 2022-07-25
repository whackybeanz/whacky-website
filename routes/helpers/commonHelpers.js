function sortByName(a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }

    if (nameA > nameB) {
        return 1;
    }

    return 0;
}

function sortListByStringValue(list, keyName) {
    return list.sort((a, b) => {
        const valueA = a[keyName].toUpperCase();
        const valueB = b[keyName].toUpperCase();

        if(valueA < valueB) { 
            return -1; 
        }

        if(valueA > valueB) { 
            return 1; 
        }

        return 0;
    });
}

module.exports = { sortByName, sortListByStringValue };