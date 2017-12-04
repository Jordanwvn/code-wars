function validatePIN (pin) {
  return /^[\d]{4}$/g.test(pin) ? true : /^[\d]{6}$/g.test(pin)
}
