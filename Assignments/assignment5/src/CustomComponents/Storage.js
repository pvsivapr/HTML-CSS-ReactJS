var sessionDataStore = {
  set: function(key, value) {
    sessionStorage.setItem(key, value);
  },
  get: function(key) {
    var value = sessionStorage.getItem(key);
    return value;
  },
  clearData: function() {
    sessionStorage.clear();
  }
};

var localDataStore = {
  set: function(key, value) {
    localStorage.setItem(key, value);
  },
  get: function(key) {
    var value = localStorage.getItem(key);
    return value;
  },
  clearData: function() {
    localStorage.clear();
  }
};

export { sessionDataStore, localDataStore };
