import { Component, inject } from '@angular/core';
import { Reservation } from 'src/app/core/interfaces/reservation.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { JwtServicesService } from 'src/app/core/services/jwt-services.service';
import { ReservationsService } from 'src/app/core/services/reservations.service';

@Component({
  selector: 'reservation-list-user',
  templateUrl: './reservation-list-user.component.html',
  styleUrls: ['./reservation-list-user.component.css']
})
export class ReservationListUserComponent {

  reservationsService = inject(ReservationsService)
  arrUserRes!: Reservation[]
  jwtservices = inject(JwtServicesService);
  token: string = "";
  loggedUser!: any

  async ngOnInit() {

    this.token = await localStorage.getItem('token')!;
    this.loggedUser = await this.jwtservices.DecodeToken(this.token)
    this.arrUserRes = await this.reservationsService.getByUserId(this.loggedUser.user_id)
    console.log(this.arrUserRes);

  }
}
