export class Wrestler {
  constructor({
    name,
    brand,
    rating,
    agility,
    stamina,
    strength,
    weight,
    company,
    status,
    otherInfo,
  }) {
    this._name = name;
    this._brand = brand;
    this._rating = rating;
    this._agility = agility;
    this._stamina = stamina;
    this._strength = strength;
    this._weight = weight;
    this._company = company;
    this._status = status;
    this._otherInfo = otherInfo;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    this._brand = brand;
  }

  get rating() {
    return this._rating;
  }

  set rating(rating) {
    this._rating = rating;
  }

  get agility() {
    return this._agility;
  }

  set agility(agility) {
    this._agility = agility;
  }

  get stamina() {
    return this._stamina;
  }

  set stamina(stamina) {
    this._stamina = stamina;
  }

  get strength() {
    return this._strength;
  }

  set strength(strength) {
    this._strength = strength;
  }

  get weight() {
    return this._weight;
  }

  set weight(weight) {
    this._weight = weight;
  }

  get company() {
    return this._company;
  }

  set company(company) {
    this._company = company;
  }

  get status() {
    return this._status;
  }

  set status(status) {
    this._status = status;
  }

  get otherInfo() {
    return this._otherInfo;
  }

  set otherInfo(otherInfo) {
    this._otherInfo = otherInfo;
  }
}
