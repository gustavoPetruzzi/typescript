export namespace empleadoAjax{
    type ajaxExito = (data:any)=> any;
    type ajaxError = (error:any)=> any;
    class empleado {
        private id:number;
        public usuario:string;
        private _pass:string;
        public activo:Boolean;
        constructor(id:number, usuario:string, activo:Boolean, pass?:string){
            this.id = id;
            this.usuario = usuario;
            this.activo = activo;
            if(pass){
                this._pass = pass;
            }
        }

        public guardar(guardado:ajaxExito, error:ajaxError):void{

        }
    }
}