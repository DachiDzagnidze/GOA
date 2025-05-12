function vampireTest(a, b) {
    let product = a * b;
    let combined = (a + '' + b);
    let productStr = product.toString();

    if (combined.length !== productStr.length) return false;

    for (let i = 0; i < combined.length; i++) {
        if (!productStr.includes(combined[i])) return false;
        productStr = productStr.replace(combined[i], '');
    }


    return true;
}