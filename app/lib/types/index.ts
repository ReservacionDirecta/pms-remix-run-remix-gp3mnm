export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: 'admin' | 'staff' | 'recepcion';
}

export interface Hotel {
  id: string;
  nombre: string;
  direccion: string;
  configuracion: {
    checkInTime: string;
    checkOutTime: string;
    politicaCancelacion: string;
  };
} 