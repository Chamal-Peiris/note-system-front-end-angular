import { Component, OnInit } from '@angular/core';
import {NoteService, USER_ID} from "../service/note.service";
import {Note} from "../dto/note";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }

  addNewNote(txtNote: HTMLInputElement) {
    this.noteService.saveNote(new Note(null,txtNote.value,USER_ID)).subscribe({
      next:value=>{
        txtNote.value='',
          txtNote.focus();
      }
    })
    txtNote.value='';
    txtNote.focus();
  }
}
