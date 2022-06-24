import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../dto/note";
import {InputComponent} from "../input/input.component";
import {NoteService} from "../service/note.service";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input()
  note!: Note;           //inputs the notes from app component to this

  constructor(private noteService:NoteService) {
  }

  ngOnInit(): void {
  }

  deleteNote() {
   this.noteService.deleteNote(this.note).subscribe();
  }
}
