export class Cursos {
  static cursos = [
    {
      id: "1",
      nombre: "Baile entretenido fusion oriental presencial",
      dias: "Lunes, miércoles y viernes",
      horarios: "De 19:00 a 20:00 horas",
      cupos: 30,
      descripcion: "Van a disfrutar de una clase de baile entretenido fusion oriental presencial,con toda la energia",
      valor: 18000,
      imagen: require('@/assets/presencial.jpg'),
    },
    {
      id: "2",
      nombre: "Baile entretenido fusion oriental online",
      dias: "Martes y jueves",
      horarios: "De 8:00 a 9:00 horas",
      cupos: 20,
      descripcion: "Ven a disfrutar de una clase de baile entretenido fusion oriental online, desde cualquier parte del mundo",
      valor: 15000,
      imagen: require('@/assets/1.jpg'),
    },
  ];

  static getAllCursos() {
    return this.cursos;
  }
}