import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-flor',
  templateUrl: './flor.component.html',
  styleUrls: ['./flor.component.scss']
})
export class FlorComponent implements OnInit {
  petals = Array(12).fill(0); // 12 pétalos
  selectedPetal: number | null = null;
  images: string[][] = []; // Cambiar a un arreglo de arreglos
  texts: string[][] = [];
  currentImageIndex = 0;

  constructor(private musicService: MusicService) {
    // Inicializa las imágenes y textos para cada pétalo
    this.images = [
      ['assets/images/img1.jpg', 'assets/images/img2.jpg', 'assets/images/img3.jpg'], // Pétalo 1
      ['assets/images/img4.jpg', 'assets/images/img5.jpg', 'assets/images/img6.jpg', 'assets/images/img7.jpg', 'assets/images/img8.jpg'], // Pétalo 2
      ['assets/images/img9.jpg', 'assets/images/img10.jpg', 'assets/images/img11.jpg', 'assets/images/img12.jpg'], // Pétalo 3
      ['assets/images/img13.jpg', 'assets/images/img14.jpg', 'assets/images/img15.jpg', 'assets/images/img16.jpg'], // Pétalo 5
      ['assets/images/img17.jpg', 'assets/images/img18.jpg', 'assets/images/img19.jpg', 'assets/images/img20.jpg', 'assets/images/img21.jpg', 'assets/images/img22.jpg'], // Pétalo 6
      ['assets/images/img23.jpg', 'assets/images/img24.jpg', 'assets/images/img25.jpg', 'assets/images/img26.jpg'], // Pétalo 7
      ['assets/images/img27.jpg', 'assets/images/img28.jpg', 'assets/images/img29.jpg', 'assets/images/img30.jpg'], // Pétalo 8
      ['assets/images/img31.jpg', 'assets/images/img32.jpg', 'assets/images/img33.jpg'], // Pétalo 9
      ['assets/images/img34.jpg', 'assets/images/img35.jpg', 'assets/images/img36.jpg'], // Pétalo 10
      ['assets/images/img37.jpg', 'assets/images/img38.jpg'], // Pétalo 11
      ['assets/images/img39.jpg', 'assets/images/img40.jpg', 'assets/images/img41.jpg', 'assets/images/img42.jpg'], // Pétalo 12
      ['assets/images/img43.png'], // Pétalo 4 contiene un video en un array de un solo elemento
    ];
    
    this.texts = [
      ['Heeh la primera fotito que tengo de ti', 'Y bueno esta por consecuente es la segunda aa, tan bonita, Kirara se volvió de mis favoritos por una razón', 'Recuerdas tu primera main, tu primer 5*, qué recuerdos.'], // Textos para pétalo 1
      ['Pues un día, mirando a los nuevos seguidores, baje en la lista, y me fije que nos agregamos un 12, no lo sé, es un bonito número', 'eee nuestro primer contacto por wasap', 'No sé, simplemente fue tierno', 'Mira quien vino por primera vez eee, mala', 'Tu primera arma 5*, y a tan temprana edad, suertuda >:['], // 2
      ["Aquí algunas panorámicas: Venciendo Espinadragón", "Sin duda es el diseño de tetera que más me gusta, es la única foto q repetiré de antes", "Uno de los golems gigantes, donde tu honesta reacción fue: ¿Qué miro?", "Fotos, fotos y muchos recuerdos"],//3
      ["Aja, la primera aparición de Nieves de Invierno, aunque no se en que orden veas los pétalos eee", "Y tu contraataque de ternura con otro bunny, cute", "¿Y esa?, sobreviviendo al abismo y a los hermanos pequeños con 1 de vida", "Puede sonarte tonto, pero desde que mi último llavero me abandonó (se rompió) no quize tener otro hasta este momento (y claro luego también me abandono)"],//4
      ["Unos cuantos momentos randoms ee: El fear de la primera vez que te di mi cuenta expresada en una imagen", "o.0 Un uso eficiente de la resina sin duda michita ee", "El inicio de un buen meme y forma de hacerte bullying, pero del bueno <3", "Y pensar que ese todos tambien incluía machos xd", "Just Genshin Impact", "CPU, borrachita desde el inicio"],//5
      ["Aw mira ese primer pony, la vez y dices, sip es michi", "Un buen descanso luego de chambear en la casa, que tiempos", "Su primera partida conmigo de Mikus, no le fue tan mal", "Su primer equipo, un poco feito, pero no le iba a decir nada para no desanimarla c:"],//6
      ["Y bueno, aqui empieza uno de los días claves eee, inicio del día normal, con michis como siempre, sin saber que día es", "Un regalo un poco raro, pero lo acepto con todo gusto", "Espero poder darte siempre ese regalo", "o.o qe emmh ok, vamos. (pues lo demas ya te conte)"],//7
      ["Pero michita, no siempre se me hizo fácil mantener tu amistad, pocas veces te decía algo porque bueno, no tenia ningun derecho a reclamar nada", "Y siempre me sentía mal por tratarte así, despues de todo solo éramos amigos de genshito, perdón, y, si volviste ese día", "Y, también, tuve muchas veces miedo de las respuestas, y aqui tambien se engloba lo que te pregunte el 24/08/24"],//8
      ["Y con ellos también, tantos buenos momentos: una gran amenaza", "La primera vez que te comente algo más personal, y pos a esa es a la q le preste mi calculadora y aun no me devuelve dx", "Nostalgia, mucha nostalgia, recuerdo mucho ese día, lo que hacía, lo que comí y lo q paso, pero bueno, ahora se ve bien"],//9
      ["A veces eres la michita mas distraída de todas ee, vez que si te dije, también te dije mi cumple, pero de ninguno te acordaste xd", "Pos la primera vez que admití que te extrañaba"],//10
      ["Ahora mas momentos randoms (repito, no se en q orden los verás aa) pos si se me hacia algo raro, en ese entoncs preferia starlaig dx", "El primer Chi (trata de desviar la conversación)", "Tan afectuoso como siempre", "En ese entoncs dije, ah esta loca xdd, perdón por eso, pero ya luego eso cambio"],//11
      ["Si no me equivoco, este fue el primer TikTok que subiste de nosotros"]//12
    ];
  }

  ngOnInit(): void {
    // Inicializamos el array de seguimiento de imágenes mostradas (si se requiere para otra lógica)
  }

  showImageAndText(petal: number) {
    this.selectedPetal = petal;
    this.currentImageIndex = 0; // Reinicia el índice de la imagen al seleccionar un pétalo
  }

  get currentImage(): string {
    if (this.selectedPetal !== null) {
      return this.images[this.selectedPetal - 1][this.currentImageIndex]; // Devuelve la imagen actual
    }
    return ''; // Devuelve una cadena vacía si no hay imagen seleccionada
  }

  get currentVideo(): string {
    if (this.selectedPetal !== null) {
      const content = this.images[this.selectedPetal - 1];
      if (typeof content === 'string') {
        return content; // Devuelve la URL del video si es un string
      }
    }
    return ''; // Devuelve una cadena vacía si no es un video
  }

  get currentText(): string {
    if (this.selectedPetal !== null) {
      return this.texts[this.selectedPetal - 1][this.currentImageIndex]; // Devuelve el texto correspondiente a la imagen actual
    }
    return ''; // Devuelve una cadena vacía si no hay texto seleccionado
  }

  get currentContent(): string {
    if (this.selectedPetal !== null) {
      const content = this.images[this.selectedPetal - 1];
      return content[this.currentImageIndex]; // Esto funcionará tanto para imágenes como para videos
    }
    return '';
  }

  isVideo(content: string): boolean {
    return content.endsWith('.mp4'); // Revisa si el contenido actual es un video
  }

  closeImage(event: Event) {
    this.selectedPetal = null; // Cierra la imagen y oculta el contenido
  }

  nextImage() {
    if (this.selectedPetal !== null) {
      const totalImages = this.images[this.selectedPetal - 1].length; // Total de imágenes del pétalo seleccionado
      if (this.currentImageIndex < totalImages - 1) {
        this.currentImageIndex++; // Avanza al siguiente índice de imagen y texto
      }
    }
  }

  previousImage() {
    if (this.selectedPetal !== null) {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--; // Retrocede al índice anterior de imagen y texto
      }
    }
  }
}
