import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  private router = inject(Router);
  usersService = inject(UsersService)


  onClickReservation() {
    Swal.fire(
      "Please login to make a reservation"
    )
    this.router.navigate(['/login']);
  }

  onClickLogout() {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token')
        this.router.navigate(['/']);
        Swal.fire({
          text: "Succesfully logged out",
          icon: "success"
        });
      }
    });



  }

}
