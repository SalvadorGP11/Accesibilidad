import {Component, EventEmitter, Output} from '@angular/core';

import {NgIf} from '@angular/common';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';

import {MatRadioModule} from '@angular/material/radio';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent {

  mode = new FormControl('over' as MatDrawerMode);

  @Output() fontSizeChanged = new EventEmitter<number>();


   //API de síntesis de voz del navegador (Web Speech API)
  speechSynthesis: SpeechSynthesis;
  speechUtterance: SpeechSynthesisUtterance;

  isCursorIncreased: boolean = false;
  originalCursor: string = '';

  isGuideVisible: boolean = false;
  guidePositionX: number = 0;
  guidePositionY: number = 0;

  constructor() {
    this.speechSynthesis = window.speechSynthesis;
    this.speechUtterance = new SpeechSynthesisUtterance();
  }

  startReading(): void {
    const textToRead = document.documentElement.innerText;
    this.speechUtterance.text = textToRead;
    this.speechSynthesis.speak(this.speechUtterance);
  }

  pauseReading(): void {
    this.speechSynthesis.pause();
  }

  resumeReading(): void {
    this.speechSynthesis.resume();
  }

  stopReading(): void {
    this.speechSynthesis.cancel();
  }

  increaseFontSize() {
    this.fontSizeChanged.emit(15); // Aumenta el tamaño de fuente en 2 píxeles
  }

  decreaseFontSize() {
    this.fontSizeChanged.emit(-15); // Disminuye el tamaño de fuente en 2 píxeles
  }

}
