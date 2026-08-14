 import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApplicationService } from '../../core/services/application.service';
import { Application } from '../../core/models/application.model';

@Component({
  selector: 'app-track-status',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './track-status.html',
  styleUrl: './track-status.css'
})
export class TrackStatusComponent {
  searchId: string = '';
  foundApp: Application | undefined = undefined;
  hasSearched: boolean = false;

  constructor(private appService: ApplicationService) {}

  onSearch(): void {
    if (!this.searchId.trim()) return;
    this.hasSearched = true;
    this.foundApp = this.appService.getApplicationById(this.searchId.trim());
  }
}