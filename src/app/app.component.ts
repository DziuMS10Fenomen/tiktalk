import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './profile/profile-card/profile-card.component';
// import { ProfileService } from './data/services/profile.service';
// import { Profile } from './data/interfaces/profile.interface'; // Імпорт інтерфейсу

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Імпортуємо RouterOutlet і ProfileCardComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Виправлено styleUrls
})
export class AppComponent {
  // title = 'TIKTALK';
  // profileService = inject(ProfileService);

  // profiles: Profile[] = []; // Коректна типізація

  // constructor() {
  //    this.profileService.getTestAccounts().subscribe((data: Profile[]) => {
  //     console.log('gjiotkrpo',data);
  //      this.profiles = data;
  //    });
  // }
}

