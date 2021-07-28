export const sortAlphaNum = (a, b) => {
    const reA = /[^a-zA-Z]/g;
    const reN = /[^0-9]/g;

    const aA = a.title.replace(reA, "");
    const bA = b.title.replace(reA, "");

    if (aA === bA) {
        const aN = parseInt(a.title.replace(reN, ""), 10);
        const bN = parseInt(b.title.replace(reN, ""), 10);
        return aN === bN ? 0 : aN > bN ? 1 : -1;
    } else {
        return aA > bA ? 1 : -1;
    }
}

export const greaterAndEqual2010 = (item) => item.releaseYear >= 2010;
