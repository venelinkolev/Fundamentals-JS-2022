function winningTicket(string) {
  let patternTicket = /[^, ]+/g;
  let tickets = string.match(patternTicket);

  for (let i of tickets) {
    let patternValidTicket = /(?<matches>[@#$\^\w]{20})/g;
    let patternSymbols = /[@#$\^]{6,}/g;

    let currentTicket = i.match(patternValidTicket);

    if (i.length === 20) {
      if (currentTicket) {
        let validTicket = currentTicket[0].match(patternSymbols);

        if (validTicket.length === 1) {
          console.log(`ticket "${i}" - 10${validTicket[0].charAt(0)} Jackpot!`);
        } else if (
          validTicket[0].length === validTicket[1].length &&
          validTicket[0].charAt(0) === validTicket[1].charAt(0)
        ) {
          console.log(
            `ticket "${i}" - ${validTicket[0].length}${validTicket[0].charAt(
              0
            )}`
          );
        }
        //console.log(validTicket);
      } else {
        console.log(`ticket "${i}" - no match`);
      }
    } else {
      console.log(`invalid ticket`);
    }
  }
  //console.log(tickets);
}

winningTicket('Cash$$$$$$Ca$$$$$$sh');
winningTicket('^^^^^^^^^^^^^^^^^^^^, aabb , th@@@@@@eemo@@@@@@ey');
winningTicket('validticketnomatch:(');
