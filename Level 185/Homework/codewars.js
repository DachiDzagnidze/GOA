function countLonelyLetters(text) {
  // keep only letters + lowercase
  const letters = text.toLowerCase().replace(/[^a-z]/g, "");

  const freq = {};

  // count frequency
  for (const ch of letters) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  let count = 0;

  for (const ch in freq) {
    if (freq[ch] === 1) {
      const code = ch.charCodeAt(0);

      const prev = code > 97 ? String.fromCharCode(code - 1) : null; // a=97
      const next = code < 122 ? String.fromCharCode(code + 1) : null; // z=122

      const prevExists = prev && freq[prev];
      const nextExists = next && freq[next];

      if (!prevExists && !nextExists) {
        count++;
      }
    }
  }

  return count;
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode === correctCode &&
         new Date(currentDate) <= new Date(expirationDate);
}

function identifyMonster(observedWeaknesses, bestiary) {
  for (const monster in bestiary) {
    const weaknesses = bestiary[monster];

    const match = observedWeaknesses.every(w =>
      weaknesses.includes(w)
    );

    if (match) return monster;
  }

  return "Unknown monster";
}

function seven(m) {
  let steps = 0;

  while (m > 99) {
    let lastDigit = m % 10;
    let rest = Math.floor(m / 10);

    m = rest - 2 * lastDigit;
    steps++;
  }

  return [m, steps];
}

function movie(card, ticket, perc) {
  let n = 0;
  let systemA = 0;
  let systemB = card;
  let currentTicket = ticket * perc;

  while (Math.ceil(systemB) >= systemA) {
    n++;
    systemA += ticket;
    systemB += currentTicket;
    currentTicket *= perc;
  }

  return n;
}