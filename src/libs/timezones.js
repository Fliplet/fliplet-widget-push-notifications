var DEFAULT_TIMEZONE = 'Europe/London';

export const timezones = [
  {
    value: 'Etc/GMT+12',
    label: 'International Date Line West'
  },
  {
    value: 'Pacific/Midway',
    label: 'Midway Island, Samoa'
  },
  {
    value: 'Pacific/Honolulu',
    label: 'Hawaii'
  },
  {
    value: 'US/Alaska',
    label: 'Alaska'
  },
  {
    value: 'America/Los_Angeles',
    label: 'Pacific Time (US & Canada)'
  },
  {
    value: 'America/Tijuana',
    label: 'Tijuana, Baja California'
  },
  {
    value: 'US/Arizona',
    label: 'Arizona'
  },
  {
    value: 'America/Chihuahua',
    label: 'Chihuahua, La Paz, Mazatlan'
  },
  {
    value: 'US/Mountain',
    label: 'Mountain Time (US & Canada)'
  },
  {
    value: 'America/Managua',
    label: 'Central America'
  },
  {
    value: 'US/Central',
    label: 'Central Time (US & Canada)'
  },
  {
    value: 'America/Mexico_City',
    label: 'Guadalajara, Mexico City, Monterrey'
  },
  {
    value: 'Canada/Saskatchewan',
    label: 'Saskatchewan'
  },
  {
    value: 'America/Bogota',
    label: 'Bogota, Lima, Quito, Rio Branco'
  },
  {
    value: 'US/Eastern',
    label: 'Eastern Time (US & Canada)'
  },
  {
    value: 'US/East-Indiana',
    label: 'Indiana (East)'
  },
  {
    value: 'Canada/Atlantic',
    label: 'Atlantic Time (Canada)'
  },
  {
    value: 'America/Caracas',
    label: 'Caracas, La Paz'
  },
  {
    value: 'America/Manaus',
    label: 'Manaus'
  },
  {
    value: 'America/Santiago',
    label: 'Santiago'
  },
  {
    value: 'Canada/Newfoundland',
    label: 'Newfoundland'
  },
  {
    value: 'America/Sao_Paulo',
    label: 'Brasilia'
  },
  {
    value: 'America/Argentina/Buenos_Aires',
    label: 'Buenos Aires, Georgetown'
  },
  {
    value: 'America/Godthab',
    label: 'Greenland'
  },
  {
    value: 'America/Montevideo',
    label: 'Montevideo'
  },
  {
    value: 'America/Noronha',
    label: 'Mid-Atlantic'
  },
  {
    value: 'Atlantic/Cape_Verde',
    label: 'Cape Verde Is.'
  },
  {
    value: 'Atlantic/Azores',
    label: 'Azores'
  },
  {
    value: 'Europe/London',
    label: 'Greenwich Mean Time: Dublin, Edinburgh, Lisbon, London'
  },
  {
    value: 'Iceland',
    label: 'Reykjavik'
  },
  {
    value: 'Europe/Brussels',
    label: 'Brussels, Copenhagen, Madrid, Paris'
  },
  {
    value: 'Europe/Amsterdam',
    label: 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna'
  },
  {
    value: 'Europe/Belgrade',
    label: 'Belgrade, Bratislava, Budapest, Ljubljana, Prague'
  },
  {
    value: 'Europe/Sarajevo',
    label: 'Sarajevo, Skopje, Warsaw, Zagreb'
  },
  {
    value: 'Africa/Lagos',
    label: 'West Central Africa'
  },
  {
    value: 'Asia/Amman',
    label: 'Amman'
  },
  {
    value: 'Europe/Athens',
    label: 'Athens, Bucharest, Istanbul'
  },
  {
    value: 'Asia/Beirut',
    label: 'Beirut'
  },
  {
    value: 'Africa/Cairo',
    label: 'Cairo'
  },
  {
    value: 'Africa/Harare',
    label: 'Harare, Pretoria'
  },
  {
    value: 'Europe/Helsinki',
    label: 'Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius'
  },
  {
    value: 'Asia/Jerusalem',
    label: 'Jerusalem'
  },
  {
    value: 'Europe/Minsk',
    label: 'Minsk'
  },
  {
    value: 'Africa/Windhoek',
    label: 'Windhoek'
  },
  {
    value: 'Asia/Kuwait',
    label: 'Kuwait, Riyadh, Baghdad'
  },
  {
    value: 'Europe/Moscow',
    label: 'Moscow, St. Petersburg, Volgograd'
  },
  {
    value: 'Africa/Nairobi',
    label: 'Nairobi'
  },
  {
    value: 'Asia/Tbilisi',
    label: 'Tbilisi'
  },
  {
    value: 'Asia/Tehran',
    label: 'Tehran'
  },
  {
    value: 'Asia/Muscat',
    label: 'Abu Dhabi, Muscat'
  },
  {
    value: 'Asia/Baku',
    label: 'Baku'
  },
  {
    value: 'Asia/Yerevan',
    label: 'Yerevan'
  },
  {
    value: 'Asia/Kabul',
    label: 'Kabul'
  },
  {
    value: 'Asia/Yekaterinburg',
    label: 'Yekaterinburg'
  },
  {
    value: 'Asia/Karachi',
    label: 'Islamabad, Karachi, Tashkent'
  },
  {
    value: 'Asia/Calcutta',
    label: 'Chennai, Kolkata, Mumbai, New Delhi'
  },
  {
    value: 'Asia/Calcutta',
    label: 'Sri Jayawardenapura'
  },
  {
    value: 'Asia/Katmandu',
    label: 'Kathmandu'
  },
  {
    value: 'Asia/Almaty',
    label: 'Almaty, Novosibirsk'
  },
  {
    value: 'Asia/Dhaka',
    label: 'Astana, Dhaka'
  },
  {
    value: 'Asia/Rangoon',
    label: 'Yangon (Rangoon)'
  },
  {
    value: 'Asia/Bangkok',
    label: 'Bangkok, Hanoi, Jakarta'
  },
  {
    value: 'Asia/Krasnoyarsk',
    label: 'Krasnoyarsk'
  },
  {
    value: 'Asia/Hong_Kong',
    label: 'Beijing, Chongqing, Hong Kong, Urumqi'
  },
  {
    value: 'Asia/Kuala_Lumpur',
    label: 'Kuala Lumpur, Singapore'
  },
  {
    value: 'Asia/Irkutsk',
    label: 'Irkutsk, Ulaan Bataar'
  },
  {
    value: 'Australia/Perth',
    label: 'Perth'
  },
  {
    value: 'Asia/Taipei',
    label: 'Taipei'
  },
  {
    value: 'Asia/Tokyo',
    label: 'Osaka, Sapporo, Tokyo'
  },
  {
    value: 'Asia/Seoul',
    label: 'Seoul'
  },
  {
    value: 'Asia/Yakutsk',
    label: 'Yakutsk'
  },
  {
    value: 'Australia/Adelaide',
    label: 'Adelaide'
  },
  {
    value: 'Australia/Darwin',
    label: 'Darwin'
  },
  {
    value: 'Australia/Brisbane',
    label: 'Brisbane'
  },
  {
    value: 'Australia/Canberra',
    label: 'Canberra, Melbourne, Sydney'
  },
  {
    value: 'Australia/Hobart',
    label: 'Hobart'
  },
  {
    value: 'Pacific/Guam',
    label: 'Guam, Port Moresby'
  },
  {
    value: 'Asia/Vladivostok',
    label: 'Vladivostok'
  },
  {
    value: 'Asia/Magadan',
    label: 'Magadan, Solomon Is., New Caledonia'
  },
  {
    value: 'Pacific/Auckland',
    label: 'Auckland, Wellington'
  },
  {
    value: 'Pacific/Fiji',
    label: 'Fiji, Kamchatka, Marshall Is.'
  },
  {
    value: 'Pacific/Tongatapu',
    label: 'Nuku\'alofa'
  }
];

export function validate(name) {
  if (!name) {
    name = DEFAULT_TIMEZONE;
  }

  let zone = Fliplet.Utils.find(timezones, { value: name });

  if (zone) {
    return name;
  }

  zone = moment.tz.zone(name);

  if (!zone) {
    throw new Error(`Timezone ${name} not found`);
  }

  const now = moment();
  const timezoneOffset = zone.utcOffset(now);

  return Fliplet.Utils.get(Fliplet.Utils.find(timezones, (tz) => {
    return moment.tz.zone(tz.value).utcOffset(now) === timezoneOffset;
  }), 'value');
}

export function getOffset(timezone, date) {
  const zone = moment.tz.zone(timezone);

  if (date instanceof moment && date.isValid()) {
    date = date.toDate();
  }

  if (!(date instanceof Date)) {
    date = new Date();
  }

  date.setHours(12);

  if (!zone) {
    // Timezone name invalid
    // Default to UTC time
    return 0;
  }

  return zone.utcOffset(moment(date));
}

export function getOffsetString(timezone, date) {
  const offset = getOffset(timezone, date);
  const hh = `0${Math.floor(Math.abs(offset) / 60)}`.slice(-2);
  const mm = `0${Math.round(Math.abs(offset) % 60)}`.slice(-2);
  const sign = offset > 0 ? '-' : '+';

  return `GMT${sign}${hh}:${mm}`;
}

export function getOffsetObject(timezone, date) {
  return {
    value: getOffset(timezone, date),
    label: getOffsetString(timezone, date)
  };
}
