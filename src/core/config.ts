import { injectable, inject } from 'inversify'

@injectable()
export class Config {
   private apiUrl = 'https://api.logicroom.co/secure-api/wftitterton@gmail.com/';

   public getApiUrl():string {
    return this.apiUrl;
   }

}