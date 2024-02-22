import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'ads' },
      { id: 2, name: 'kek' },
    ];
    this._brands = [
      { id: 1, name: 'sample' },
      { id: 2, name: 'example' },
    ];
    this._devices = [
      { id: 1, name: 'sample', price: 1337, rating: 4 },
      { id: 2, name: 'sample2', price: 228, rating: 3 },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
