import { Component, HostListener } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'tdangular';
  synth = new Tone.Synth().toDestination();

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const note = this.getNoteFromKey(event.key);
    if (note) {
      this.synth.triggerAttackRelease(note, '8n');
    }
  }

  getNoteFromKey(key: string): string | null {
    const keyMap: { [key: string]: string } = {
      'a': 'C4',
      's': 'D4',
      'd': 'E4',
      'f': 'F4',
      'g': 'G4',
      'h': 'A4',
      'j': 'B4'
    };
    return keyMap[key] || null;
  }
}
