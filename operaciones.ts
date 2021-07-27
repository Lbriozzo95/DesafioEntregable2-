export class Operaciones {
    private n1: number;
    private n2: number;
    private operation: string;
  
    constructor(n1: number, n2: number, operation: string) {
      this.n1 = n1;
      this.n2 = n2;
      this.operation = operation;
    }
  
    resultado() {
      return new Promise((res, rej) => {
        switch (this.operation) {
          case "sumar":
            res(this.n1 + this.n2);
            break;
          case "restar":
            res(this.n1 - this.n2);
          default:
            rej("Por Favor introduzca la operacion que desea realizar");
            break;
        }
      });
    }
  }
