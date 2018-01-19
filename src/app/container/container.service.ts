import { HttpService } from "../shared/http.service";

import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContainerService {

    private baseRoute: string = "http://localhost:8808";

    constructor(private httpService: HttpService) { }

    public listImages(): Observable<any> {
        let listUrl = this.baseRoute + '/listcontainer';
        return this.httpService.get(listUrl);
    }
}