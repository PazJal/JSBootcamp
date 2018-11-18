const data = {
  locations :[],
  get location() {
    return this._location;
  },
  set location(value) {
    this._location = value.trim();
    this.locations.push(this.location);
  }
};

//code that uses the data object:
data.location = '  Haifa  ';
data.location = 'New York';
console.log(data);

