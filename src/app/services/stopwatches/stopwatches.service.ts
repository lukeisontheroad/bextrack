import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { DEFAULTS, STORAGE } from 'src/app/models/constants';
import { Stopwatch } from 'src/app/models/stopwatch';
import { StorageService } from '../storage/storage.service';


@Injectable({
  providedIn: 'root'
})
export class StopwatchesService {

  private internalStopwatches = []
  public stopwatches = new ReplaySubject<Stopwatch[]>()
  private currentStopwatch = new Subject<Stopwatch>();

  constructor(
    private storage: StorageService
  ) {
    this.init()
  }

  public async init() {
    this.internalStopwatches = JSON.parse(await this.storage.getString(STORAGE.STOPWATCHES, DEFAULTS.STOPWATCHES))
    this.sendUpdate()
  }

  public setCurrentStopwatch(stopwatch: Stopwatch){
    this.currentStopwatch.next(stopwatch);
  }

  getCurrentStopwatch(): Observable<Stopwatch>{
      return this.currentStopwatch
  }
  
  private sendUpdate() {
    this.internalStopwatches = this.internalStopwatches.sort((a, b) => (a.title > b.title) ? 1 : -1)
    this.stopwatches.next(this.internalStopwatches)
  }

  public async add(stopwatch: Stopwatch) {
    return new Promise<void>(async resolve => {
      await this.delete(stopwatch, false)
      this.internalStopwatches.push(stopwatch)
      await this.storage.setItem(STORAGE.STOPWATCHES, JSON.stringify(this.internalStopwatches))
      this.sendUpdate()
      resolve()
    })
  }

  public async get(id: string): Promise<Stopwatch> {
    return new Promise(async resolve => {
      let filtered = this.internalStopwatches.filter(stopwatch => stopwatch.id === id)
      if (filtered.length === 1) {
        let stopwatch = filtered[0]
        for (var i = 0; i < STORAGE.STOPWATCHES_FIELDS.length; i++) {
          stopwatch[STORAGE.STOPWATCHES_FIELDS[i]] = await this.storage.getString(stopwatch.id + '_' + STORAGE.STOPWATCHES_FIELDS[i])
        }
        resolve(stopwatch)
      }else{
        resolve(null);
      }
    })
  }

  public async delete(stopwatch: Stopwatch, cleanTimeState = true) {
    return new Promise<void>(async resolve => {
      this.internalStopwatches = this.internalStopwatches.filter(obj => obj.id !== stopwatch.id)
      await this.storage.setItem(STORAGE.STOPWATCHES, JSON.stringify(this.internalStopwatches))
      if (cleanTimeState) {
        for (var i = 0; i < STORAGE.STOPWATCHES_FIELDS.length; i++) {
          let field = stopwatch.id + '_' + STORAGE.STOPWATCHES_FIELDS[i]
          this.storage.removeItem(field)
        }
      }
      this.sendUpdate()
      resolve()
    })
  }

}
