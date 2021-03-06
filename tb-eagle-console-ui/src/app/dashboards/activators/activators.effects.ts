import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActivatorsService } from './activators.service';
import { tap, first } from 'rxjs/operators';
import { setDeprecated, setLocked, denyAccess, grantAccess, requestAccess } from './activators.actions';
import { Store, select } from '@ngrx/store';
import { selectUser } from '@app/login/login.reducer';
import { User } from '@app/login/login.model';

@Injectable()
export class ActivatorsEffects {
  constructor(private store: Store<any>, private actions$: Actions, private service: ActivatorsService) {}

  setDeprecated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setDeprecated),
        tap(({ id }) => this.service.setDeprecated(id))
      ),
    { dispatch: false }
  );

  setLocked$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setLocked),
        tap(({ id }) => this.service.setLocked(id))
      ),
    { dispatch: false }
  );

  denyAccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(denyAccess),
        tap(({ activatorId, teamId }) => this.service.denyAccess(activatorId, teamId))
      ),
    { dispatch: false }
  );

  grantAccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(grantAccess),
        tap(({ activatorId, teamId }) => this.service.grantAccess(activatorId, teamId))
      ),
    { dispatch: false }
  );

  requestAccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(requestAccess),
        tap(({ id }) => {
          this.store
            .pipe(select(selectUser))
            .pipe(first())
            .subscribe((user: User) => this.service.requestAccess(id, user));
        })
      ),
    { dispatch: false }
  );
}
