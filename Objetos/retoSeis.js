const contador = {}
   /* contador.max = 10;
    contador.min = -10;
    contador.inicial = 0;
    let acum=[],b=0;
    contador.aumentadisminuye = function (){
        //let option = parseInt(prompt("1 para disminuir / 2 para aumentar"));
        let option=1;
        //if (option === 1){            
            for (let i = this.inicial; i >= this.min; i--){
                acum[b]=i;
                b+=1;
            }
       /* } else if (option === 2){
            for (let i = this.inicial; i <= this.min; i++){
                
            }
            return acum;
        }
    contador.actual = console.log(this.aumentadisminuye);   */

   /* const contador = {}
    contador.max = 20;
    contador.min = 1;
    contador.inicial = parseInt(prompt("Ingrese un numero"));
    contador.accion = ()=>{
        let option = parseInt(prompt("Desea que el numero 1.Aumente, 2.Disminuya?"));
        if (option === 1){
            for (let i = this.inicial; i <- this.max; i++){
                console.log("El valor inicial es ",this.inicial," y el valor actual es ",i)
            }
        } else if (option === 2){
            for (let i = this.inicial; i <- this.min; i--){
                console.log("El valor inicial es ",this.inicial," y el valor actual es ",i)
            }
        }
    }*/

    const contador={
        valor_inicial:0,
        valor_maximo:10,
        valor_actual:0,
        valor_mínimo:0,
        aumentar_valor:+1 ,
        disminuir_valor:-1,
    }
    contador.aumentar = function() {
        this.valor_actual = this.valor_actual+this.aumentar_valor;
        return this.valor_actual;
    }
    console.log(contador.aumentar());
    contador.disminuir = function() {
        this.valor_actual= this.valor_actual+this.disminuir_valor;
        return this.valor_actual;
    }
    console.log(contador.disminuir());
    contador.restablecer = function() {
           this.valor_actual= 0;
        return this.valor_actual;
    }
    console.log(contador.restablecer());
    
    
    
    
    
    