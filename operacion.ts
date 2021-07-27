const operacion = async (
    number1: number,
    number2: number,
    operacion: string
  ) => {
    const { Operaciones } = await import("./Operaciones");
  
    try {
      let resultado = await new Operaciones(number1, number2, operacion);
      return resultado.resultado();
    } catch (error) {
      return error;
    }
  };
  
  operacion(5, 2, "sumar")
    .then((value) => console.log(value))
    .catch((e) => console.log(e));
  
  operacion(8, 7, "restar")
    .then((value) => console.log(value))
    .catch((e) => console.log(e));
  
  operacion(3, 1, "rand")
    .then((value) => console.log(value))
    .catch((e) => console.log(e));
