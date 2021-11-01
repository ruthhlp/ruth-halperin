import { Component, OnInit } from '@angular/core';
import { Subscription, interval  }   from 'rxjs';
import { MatDialog, MatDialogRef} from "@angular/material/dialog";
import { IssLocation } from './iss-location';
import { NoteComponent } from './note/note.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [NoteComponent]
})
export class AppComponent implements OnInit{
  issPosition: any = {};
  dialogRef!: MatDialogRef<NoteComponent>;
  notesList: Array<any> = [];

  constructor(protected srvIssLocation: IssLocation,
    private dialog: MatDialog ) {
   }

  ngOnInit(): void {
    interval(2000).subscribe(x => 
      this.getData()
    )
    
  }

  getData() {
    this.srvIssLocation.getData().subscribe(res => {
      if (res?.iss_position) {
        this.issPosition = res.iss_position;
      }
    });
  }

  openDialog() {
    this.dialogRef = this.dialog.open(NoteComponent, {'data': this.issPosition});
    this.dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult) {
        this.notesList.push(dialogResult);
      }
      
    });
}

}
