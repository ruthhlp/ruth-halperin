import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

export interface dialogData {
  data: any
}

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  form!: FormGroup ;
  issPosition;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<dialogData>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
      this.issPosition = data;
  }

  ngOnInit() {
      this.form = this.fb.group({
        latitude: [this.issPosition.latitude , [Validators.required]],
        longitude: [this.issPosition.longitude, [Validators.required]],
        note: ['']
      });
  }

  save() {
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

}
