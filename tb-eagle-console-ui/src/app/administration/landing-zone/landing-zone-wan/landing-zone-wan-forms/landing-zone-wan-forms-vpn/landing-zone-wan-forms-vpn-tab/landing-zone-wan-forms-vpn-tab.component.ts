import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing-zone-wan-forms-vpn-tab',
  templateUrl: './landing-zone-wan-forms-vpn-tab.component.html',
  styleUrls: ['./landing-zone-wan-forms-vpn-tab.component.scss']
})
export class LandingZoneWanFormsVpnTabComponent implements OnInit {
  @Input() formGroup: FormGroup;

  constructor() {}

  ngOnInit() {}
}
