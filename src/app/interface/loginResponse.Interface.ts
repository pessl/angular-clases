export interface LoginResponsei {
    mensaje: string;
    token: string;
    response: UserResponse[];
  }

  export interface UserResponse {
    nIdUser: number;
    sUser: string;
    sCorreo: string;
    fFechaRegistro: string;
    estado: number;
  }