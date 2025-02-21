import { Component } from '@angular/core';
import { MaterialDetailsComponent } from '../../components/material-details/material-details.component';
import { CertificateComponent } from '../../components/certificate/certificate.component';

@Component({
  selector: 'app-create-token',
  standalone: true,
  imports: [MaterialDetailsComponent,CertificateComponent],
  templateUrl: './create-token.component.html',
  styleUrl: './create-token.component.css',
})
export class CreateTokenComponent {}
