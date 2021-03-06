class Spaceship {
  constructor(name, crew = [], phasers, shields) {
    this.name = name;
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'

    if (this.crew.length > 0) {
      this.docked = false
      for (const member of crew) {
        member.currentShip = this
      }
    } else {
      this.docked = true
    }

  }
}
