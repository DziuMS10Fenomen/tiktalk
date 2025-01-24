import { Component, inject } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfileCardComponent } from '../../profile/profile-card/profile-card.component';


@Component({
  selector: 'app-search-page',
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
    title = 'TIKTALK';
    profileService = inject(ProfileService);
  
    profiles: Profile[] = []; // Коректна типізація
  
    constructor() {
       this.profileService.getTestAccounts().subscribe((data: Profile[]) => {
        console.log('gjiotkrpo',data);
         this.profiles = data;
       });
    }
}
