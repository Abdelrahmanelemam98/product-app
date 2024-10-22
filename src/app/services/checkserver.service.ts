import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckserverService {
  private componentAvailabilitySubject = new BehaviorSubject<boolean>(true);
  componentAvailable$ = this.componentAvailabilitySubject.asObservable();

  setComponentAvailability(isAvailable: boolean) {
    this.componentAvailabilitySubject.next(isAvailable);
  }
}
