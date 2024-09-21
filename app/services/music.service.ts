import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio('assets/Musica/Viento-Caifanes.mp3');
    this.audio.loop = true; // Repetir la música indefinidamente
    this.audio.volume = 0.2;
    this.audio.play(); // Reproducir automáticamente al iniciar la aplicación
  }
}
