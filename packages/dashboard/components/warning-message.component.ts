import {Component} from "@angular/core";

// todo(ccliu): 待删除

@Component({
  template: `
    <nz-alert nzShowIcon [nzType]="type" [nzMessage]="message" [nzDescription]="description"></nz-alert>
  `
})
export class WarningMessageComponent {
  type;
  message;
  description;
}
