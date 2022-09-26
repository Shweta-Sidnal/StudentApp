import Dexie from 'dexie';
export var db = new Dexie("MyDatabase");

// Define Database Schema
db.version(7).stores({
  userdata: "++id, Name,Email,PhoneNo,Gender,Password,ConfirmPassword",

});

// Interact With Database
