import { Component, Input } from '@angular/core';
import { ImgUrlPipe } from '../../helpers/pipes/imgurl.pipe';
import { Profile } from '../../data/interfaces/profile.interface';







@Component({
  selector: 'app-profile-card',
  imports: [ImgUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input()
  profile!: Profile;

}

export type { Profile };

