

export const temperatura = {
c : {
    f : (c) =>  ( c * 9/5 ) + 32,
    k : (c) =>  ( c + 273.15 ),
},

f : {
    c :  (f) => (f - 32) * 5/9,
    k : (f) => (f + 459.67) * 5/9,
},

k : {
    c : (k) =>  k - 273.15,
    f : (k) =>  (k * 9/5) - 459.67
}
}
