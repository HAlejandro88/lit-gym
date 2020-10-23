        let arregloUno = [
            {nombre:'Alejandro', edad: 25, apellidos: 'Soto Garcia', carrera: 'Mecatronica', img:'', checked:false},
            {nombre:'Carina', edad: 25, apellidos: 'torres palcaios', carrera: 'PYMES', img:'', checked:false},
            {nombre:'leonardo', edad: 28, apellidos: 'Bravo kunkel', carrera: 'Mecatronica', img:'', checked:false},
            {nombre:'damian', edad: 31, apellidos: 'Islas Dias', carrera: 'Mecatronica', img:'', checked:false},
            {nombre:'ariadna', edad: 27, apellidos: 'Soto Garcia', carrera: 'Medicina', img:'', checked:false}
        ];

        function repasoMap() {
            const newarray = [];
            arregloUno.map(item => {
                if(item.carrera === 'Mecatronica') {
                    return newarray.push(item.apellidos);
                }
            });
        console.log(newarray)
        } 

    const repasoMap2 = (indice) => {
            arregloUno = arregloUno.map((item, index) => {
                return index === indice ? { ...item, checked: !item.checked } : item
            });
            console.log(arregloUno);
    }

    function eliminar(position) {
        arregloUno = arregloUno.splice(position, 1);
    }

    console.log(repasoMap2(2));