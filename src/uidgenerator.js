export default class UniqueID {
  static generate() {
    const uniqueID = Math.random().toString(36).replace('0.', '');
    console.log(uniqueID);
    return uniqueID;
  }
}
