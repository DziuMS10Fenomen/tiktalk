import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileService } from '../../data/services/profile.service';


@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  providers:[ProfileService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  
   profileService= inject(ProfileService)

   ngOnInit(){
     this.profileService.getMe().subscribe({

     })

    
  }
}

