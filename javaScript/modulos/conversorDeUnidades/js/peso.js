
export const peso =   {
    
    kg :  {

        g  : (kg) => (kg * 1000),
        lb : (kg) => ( kg *  2.20462 ),
        oz : (kg) => ( kg * 35.27396 )

    },

    lb : {

        g  : (lb) => ( lb * 453.592 ),
        kg : (lb) => ( lb * 0.453592 ),
        oz : (lb) => ( lb * 16 )

    },

    oz : {

        g  : (oz) => ( oz * 28.3495 ),
        kg : (oz) => ( oz * 0.0283495 ),
        lb : (oz) => ( oz * 0.0625 )

    },

    g : {

        oz  : (g) => ( g * 0.03527396 ),
        kg : (g) => ( g * 0.001 ),
        lb : (g) => ( g * 0.00220462 )

    }
}


