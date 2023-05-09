export class Cursos {
  static cursos = [
    {
      id: "A01",
      nombre: "Baile entretenido fusion oriental presencial",
      dias: "Lunes, miércoles y viernes",
      horarios: "De 19:00 a 20:00 horas",
      cupos: 30,
      descripcion: "jsjhsjdjhsjhsdjhsufytdsifeu",
      valor: 15000,
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_114245689_945294_1?wid=800&hei=800&qlt=70",
    },
    {
      id: "A02",
      nombre: "Yoga en línea",
      dias: "Martes y jueves",
      horarios: "De 8:00 a 9:00 horas",
      cupos: 20,
      descripcion: "Lorem ipsum dolor sit aet, consectetur adipiscing elit. Mauris eu sapien vitae risus bibendum euismod.",
      valor: 12000,
      imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_114245689_945294_1?wid=800&hei=800&qlt=70",
    },
  ];

  static getAllCursos() {
    return this.cursos;
  }
}