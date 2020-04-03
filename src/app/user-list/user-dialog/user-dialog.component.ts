import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SKILLS } from '../userConstants';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  form: FormGroup;
  title: string;
  skillList: string[] = []

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.title = data.title;
    this.skillList = SKILLS;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:  ['', Validators.required],
      designation: ['', [Validators.required]],
      skills: [],
    });

  }

  save() {
    console.log(this.form);
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close(null);
  }

}
