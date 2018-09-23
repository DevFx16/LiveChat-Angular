export class UsuarioRegistro {
    constructor(
        public Nombre: string,
        public Email: string,
        public Password: string,
        public Foto: string
    ) { }
}

export class UsuarioLogin {
    constructor(
        public Email: string,
        public Password: string,
    ) { }
}

export class UsuarioLocal {
    constructor(
        public Nombre: string,
        public Email: string,
        public Password: string,
        public Foto: string,
        public Token: string,
        public Seguidos: number,
        public Seguidores: number
    ) { }
}
