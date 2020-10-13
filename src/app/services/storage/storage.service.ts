import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private prefix = 'storage_'

  public removeItem(key: string) {
    return new Promise(async (resolve, reject): Promise<void> => {
      localStorage.removeItem(this.prefix + key)
      resolve()
    })
  }

  public setItem(key: string, value: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      localStorage.setItem(this.prefix + key, value)
      resolve()
    })
  }

  public getString(key: string, def: string = null): Promise<string> {
    return new Promise(async (resolve, reject) => {
      let loaded = await localStorage.getItem(this.prefix + key)
      if (def != null && loaded == null) {
        resolve(def)
      } else {
        resolve(loaded)
      }
    })
  }

  public getDate(key: string, def: Date = null): Promise<Date> {
    return new Promise(async (resolve, reject) => {
      let loaded = await this.getString(key)
      if (def != null && loaded == null) {
        resolve(def)
      } else {
        resolve(new Date(loaded))
      }
    })
  }

  public getNumber(key: string, def: number = null): Promise<number> {
    return new Promise(async (resolve, reject) => {
      let loaded = await this.getString(key)
      if (def != null && loaded == null) {
        resolve(def)
      } else {
        resolve(parseFloat(loaded))
      }
    })
  }

  public getBoolean(key: string, def: boolean = null): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      let loaded = await this.getString(key)
      if (def != null && loaded == null) {
        resolve(def)
      } else {
        resolve(loaded === 'true')
      }
    })
  }

}
