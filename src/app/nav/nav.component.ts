import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { TokenService } from './shared/token.service';
// import { AuthStateService } from './shared/auth-state.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  
})

export class NavComponent {

  isSignedIn: boolean;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,public router: Router) { }
  // ngOnInit() {
  //   this.auth.userAuthState.subscribe(val => {
  //       this.isSignedIn = val;
  //   });
  // }

  // Signout
  signOut() {
    // this.auth.setAuthState(false);
    // this.token.removeToken();
    this.router.navigate(['login']);
  }
 
  

}
