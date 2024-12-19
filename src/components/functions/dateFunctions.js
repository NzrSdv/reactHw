export default function isDateEven() {
  if (+new Date().getDate() % 2 == 0) {
    return `mesyac:${
      new Date().getMonth() + 1
    } \ngod:${new Date().getFullYear()}`;
  } else {
    return `den nedeli:${new Date().getUTCDay()} \nden mesyaca:${new Date().getDate()}`;
  }
}
