import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule,MatButtonModule],
})
export class ButtonComponent {
  @Input() label: any;
  @Input() isOutlined: boolean = false;
  @Input() color: 'primary'|'accent'|'warn'='primary';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() iconColor = '';
  @Input() icon!: string;
  @Input() class: any = 'cust-button';
  @Output() clickAction = new EventEmitter();
}
