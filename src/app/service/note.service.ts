import { Injectable } from '@angular/core';
import {Note as NoteDTO} from "../dto/note";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes:Array<NoteDTO>=[];
  constructor(private httpService:HttpClient) {

  }
  getAllNotes():Observable<Array<NoteDTO>>{

  }
  saveNote(note:NoteDTO):Observable<Array<NoteDTO>>{

  }
  deleteNote(noteId:number):Observable<Array<NoteDTO>>{

  }
}
