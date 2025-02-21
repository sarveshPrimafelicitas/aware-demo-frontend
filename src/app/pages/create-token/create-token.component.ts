import { Component, inject } from '@angular/core';
import { MaterialDetailsComponent } from '../../components/material-details/material-details.component';
import { CertificateComponent } from '../../components/certificate/certificate.component';
import { SVG_ICONS } from '../../utils/svg.constants';

@Component({
  selector: 'app-create-token',
  standalone: true,
  imports: [MaterialDetailsComponent, CertificateComponent],
  templateUrl: './create-token.component.html',
  styleUrl: './create-token.component.css',
})
export class CreateTokenComponent {
  homeSvg: string = SVG_ICONS['homeSvg'];
  forwardSvg: string = SVG_ICONS['forwardSvg'];
  editSvg: string = SVG_ICONS['editSvg'];
}
