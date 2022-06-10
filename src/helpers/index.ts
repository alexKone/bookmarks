export function msToReadableTime(time: number): string {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;

  let hours = Math.floor((time / hour) % 24);
  let minutes = Math.floor((time / minute) % 60);
  let seconds = Math.floor((time / second) % 60);

  return hours + ':' + minutes + ':' + seconds;
}

export const parseDate = (date: string) => {
  let d = new Date(date)
  return d.toLocaleDateString()
}


export const timeago = (ms: number) => {
  var ago = Math.floor(ms / 1000);
  var part = 0;

  // if (ago < 2) {
  //   return 'a moment ago';
  // }
  if (ago < 5) {
    return 'à l\'instant';
  }
  if (ago < 60) {
    // return `il y a ${ago} secondes`;
    return `à l'instant`;
  }

  if (ago < 120) {
    return 'il y a une minute';
  }
  if (ago < 3600) {
    while (ago >= 60) {
      ago -= 60;
      part += 1;
    }
    return `il y a ${part} minutes`;
  }

  if (ago < 7200) {
    return 'il y a une heure...';
  }
  if (ago < 86400) {
    while (ago >= 3600) {
      ago -= 3600;
      part += 1;
    }
    return `il y a ${part} heures...`;
  }

  if (ago < 172800) {
    return 'il y a un jour';
  }
  if (ago < 604800) {
    while (ago >= 172800) {
      ago -= 172800;
      part += 1;
    }
    return `il y a ${part} jours`;
  }

  if (ago < 1209600) {
    return `il y a une semaine`;
  }
  if (ago < 2592000) {
    while (ago >= 604800) {
      ago -= 604800;
      part += 1;
    }
    return `il y a ${part} semaines`;
  }

  if (ago < 5184000) {
    return 'il y a un mois';
  }
  if (ago < 31536000) {
    while (ago >= 2592000) {
      ago -= 2592000;
      part += 1;
    }
    return `il y a ${part} mois`;
  }

  if (ago < 1419120000) {
    // 45 years, approximately the epoch
    return `il y a plus d\'1 an`;
  }

  // TODO pass in Date.now() and ms to check for 0 as never
  return 'à l\'instant';
}

export const beautifyDate = (timestamp: number) => {
  const rtf = new Intl.RelativeTimeFormat('fr', {
    numeric: 'auto',
  });
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const daysDifference = Math.round(
    (timestamp - new Date().getTime()) / oneDayInMs
  );

  return rtf.format(daysDifference, 'second');
}

export const urlValidator = (url: string): boolean => {
  const res = /(http(s).?:\/\/|(www.)?(vimeo|flickr).com)\/.+/g;
  return res.test(url);
}