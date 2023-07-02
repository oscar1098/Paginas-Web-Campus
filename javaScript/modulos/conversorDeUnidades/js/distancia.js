

export const distancia = { 
    
    km : {

        m   :   (km) => km * 1000 ,
        cm  :   (km) => km * 100000,  
        mm  :   (km) => km * 1000000,  
        mi  :   (km) => km * 0.621371,  
        yd  :   (km) => km * 1093.61,  
        ft  :   (km) => km * 3280.84,  
        in  :   (km) => km * 39370.1  

    },

    m : {

        km   :  (m) => m * 0.001 ,
        cm  :   (m) => m * 100,  
        mm  :   (m) => m * 1000,  
        mi  :   (m) => m * 0.000621371,  
        yd  :   (m) => m * 1.09361,  
        ft  :   (m) => m * 3.28084,  
        in  :   (m) => m * 39.3701  

    },


    mm : {

        m   :   (mm) => mm * 0.001 ,
        cm  :   (mm) => mm * 0.1,  
        km  :   (mm) => mm * 0.000001,  
        mi  :   (mm) => mm * 6.2137,  
        yd  :   (mm) => mm * 0.00109361,  
        ft  :   (mm) => mm * 0.00328084,  
        in  :   (mm) => mm * 0.0393701  

    },

    yd : {

        m   :   (yd) => yd * 0.9144 ,
        cm  :   (yd) => yd * 91.44,  
        km  :   (yd) => yd * 0.0009144 ,  
        mi  :   (yd) => yd * 0.000568182,  
        mm  :   (yd) => yd * 914.4,  
        ft  :   (yd) => yd * 3,  
        in  :   (yd) => yd * 0.000568182  

    },

    ft : {

        m   :   (ft) => ft * 0.3048 ,
        cm  :   (ft) => ft * 30.48,  
        mm  :   (ft) => ft * 304.8,  
        mi  :   (ft) => ft * 0.000189394,  
        yd  :   (ft) => ft * 0.333333,  
        km  :   (ft) => ft * 0.0003048,  
        in  :   (ft) => ft * 12

    },

    in : {

        m   :   (iN) => iN * 0.0254 ,
        cm  :   (iN) => iN * 2.54,  
        mm  :   (iN) => iN * 25.4,  
        mi  :   (iN) => iN * 0.000015783,  
        yd  :   (iN) => iN * 0.0277778,  
        ft  :   (iN) => iN * 0.0833333,  
        km  :   (iN) => iN * 0.0000254  

    }
}















