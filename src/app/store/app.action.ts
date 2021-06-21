import { Action } from '@ngrx/store';
import { CurrentUser } from '../interface/current-user';

export const LOG_IN = 'LOG_IN';

export class LogIn implements Action {
    readonly type = LOG_IN;
    payload: CurrentUser;
}
