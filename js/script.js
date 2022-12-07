"use strict";

const buildDefinitionList = (coll) => {
    if (coll.length === 0) {
        console.log('');
    }

    const definitionList = [];
    
    for (const item of coll) {
        const name = item[0];
        const description = item[1];
        definitionList.push(`<dt>${name}</dt><dd>${description}</dd>`);
    }
    // console.log(definitionList);
    const innerValue = definitionList.join('');
    const result = `<dl>${innerValue}</dl>`;
    
    console.log(result);
};

const definitions = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
];

buildDefinitionList(definitions);
  // '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';
