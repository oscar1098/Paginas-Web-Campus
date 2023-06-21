class CuentaBancaria {
  // #saldo = 0;
    constructor(saldoInicial) {
      this.#saldo += saldoInicial;
    }
  
    get saldo() {
      return this.#saldo;
    }
  
    depositar(cantidad) {
      this.#saldo += cantidad;
    }
  
    retirar(cantidad) {
      if (cantidad <= this.#saldo) {
        this.#saldo -= cantidad;
      } else {
        console.log("Saldo insuficiente");
      }
    }
  }
  
  const cuenta = new CuentaBancaria(100);
  console.log(cuenta.saldo); // Output: 100
  cuenta.depositar(50);
  console.log(cuenta.saldo); // Output: 150
  cuenta.retirar(30);
  console.log(cuenta.saldo); // Output: 120

  cuenta._saldo = 500;

  console.log(cuenta.saldo);


  