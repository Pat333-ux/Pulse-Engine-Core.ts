export class PulseEngine {
  constructor() {
    this.pulses = [];
    this.counter = 0;
  }

  addPulse(fn) {
    this.pulses.push(fn);
  }

  emit(context) {
    if (this.pulses.length === 0) return "No pulses defined";
    const pulse = this.pulses[this.counter];
    this.counter = (this.counter + 1) % this.pulses.length;
    return pulse(context);
  }
}
