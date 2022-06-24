import {Injectable} from '@angular/core';
import {Note as NoteDTO} from "../dto/note";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private readonly USER_ID = "448333d0-66df-46b5-b37d-b85ec4af84f7";
  private readonly NOTE_API_ENDPOINT = `http://localhost:8080/notes/api/v1/users/${this.USER_ID}`;
  private notes: Array<NoteDTO> = [];

  constructor(private httpService: HttpClient) {

  }

  getAllNotes(): Observable<Array<NoteDTO>> {

    return this.httpService.get<Array<NoteDTO>>(this.NOTE_API_ENDPOINT).pipe(map(notes=>this.notes=notes));
  }

  saveNote(note: NoteDTO): Observable<Array<NoteDTO>> {

   return  this.httpService.post<NoteDTO>(this.NOTE_API_ENDPOINT,note).pipe(map(n=>{
      this.notes.push(n);
      return this.notes;
    }))
  }

  deleteNote(note: NoteDTO): Observable<Array<NoteDTO>> {

   return  this.httpService.delete(`${this.NOTE_API_ENDPOINT}/${note.id}`).pipe(map(n=>{
      const index=this.notes.indexOf(note);
      this.notes.splice(index,1);
      return this.notes;
    }))
  }
}
