const fazOq = (idade, em, facool) => {
    
    if (idade >= 18) {
        console.log('A pessoa é maior de idade')
    } else {
        console.log('A pessoa é menor de idade')
    }
    if (em) {
        console.log('A pessoa tem EM concluído')
    } else {
        console.log('A pessoa não tem EM concluído')
    }
    if (facool) {
        console.log('A pessoa tem facool concluído')
    } else {
        console.log('A pessoa não tem facool concluído')
    }
}

fazOq(31, true, false)

