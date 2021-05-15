function secureTemplate(originFrags, ...tmplates) {
    let data = '';

    tmplates.forEach((tmp, index) => {
        data += originFrags[index];
        data += tmp.replace(/</g, '&lt')
            .replace(/>/g, '&gt');
    })
    data += originFrags[originFrags.length - 1];
    return data;
}


