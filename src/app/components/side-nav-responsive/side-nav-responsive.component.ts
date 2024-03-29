import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-side-nav-responsive',
  templateUrl: './side-nav-responsive.component.html',
  styleUrls: ['./side-nav-responsive.component.scss']
})
export class SideNavResponsiveComponent {
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  shouldRun = true;
}
