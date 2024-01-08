function getCellSize(length: number): number {
  switch (true) {
    case length < 10:
      return 60;
    case length < 20:
      return 40;
    case length < 50:
      return 30;
    default:
      return 15;
  }
}

export default getCellSize;
