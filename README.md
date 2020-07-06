# HarptosJS

> **Early Development**: HarptosJS's features are very limited and only an alpha release version is avaliable

HarptosJS is an attempt to implement a [MomentJS](https://momentjs.com/)-esque date library for Dungeon and Dragon's [Harptos Calender](https://forgottenrealms.fandom.com/wiki/Calendar_of_Harptos).

It is being built out of need for my own personal project, but presented separately in case it helps another.

```js
import harptos from 'harptosjs';

const date = harptos('1000-10-01');

const tomorrow = date.add(1); // 1000-01-01

const pretty = date.format('LLL') // 1st Marpenoth 1000
```

**Note** Harptos date objects can currently be built from YYYY-MM-DD formats and daystamps (days since start of epoch.  Example: `5 => 5th Hammer 0001`).

**Recommend**: It is recommended to store dates as integer daystamps as the most reliable format. `harptos.daystamp()` outputs integer daystamps.

Harptos follows the structure of:
* 12 months a year
* 30 days a month
* 5 additional days between months
* 365 days a year
* Leap year every 4 years with an extra day (Shieldmeet) on the 7th month

## Displaying
Harptos offers a number of formats for displaying dates using the same notation as MomentJS.

|           | Token              | Output                   |
|----------:|--------------------|--------------------------|
| **Month** | M                  | 1 2 ... 11 12           |
|           | MM                 | 01 02 ... 11 12         |
|           | MMM                | Ham Alt ... Ukt Nig      |
|           | MMMM               | Hammer Alturiak ... Uktar Nightal |
| **Day of the Month** | D        | 1 2 ... 29 30 |
|                     | DD       | 01 02 ... 29 30 |
| **Year** | y                   | 1 2 ... 1495 1496 |
|          | YYYY                | 0001 0002 ... 1495 1496 |
| **Era**  | N                   | DR |
|          | NN                  | DR |
|          | NNN                 | Dale Reckoning |

### Additional Days
The Harptos Calendar includes 5 named additional days between months and an extra day every leap year (4 years).

Displaying these is included in the Tokens given for months:

| Token | Output              |
|-------|---------------------|
| M     | MW GG MS HH FM SM   |
| MM    | MW GG MS HH FM SM   |
| MMM   | MW GG MS HH FM SM   |
| MMMM  | Midwinter, Greengrass, Midsummer, Highharvestide, Feast of the Moon, Shieldmeet |

### Localised formats
A few predefined formats are available based on the set locale (see below for changing local).

| Token | Output              |
|-------|---------------------|
| L     | 01/01/1000          |
| LL    | 1 Hammer 1000       |
| LLL   | 1 Hammer 1000 DR    |

## Locales
The default locale for HarptosJS is `harptos_gb` (Day, Month Year).  This is format commonly associated with Harptos.  It is however possible to choose a different locale.

To reduce distribution sixes of your project locales are not imported by default.  But you can add any of the provided as below.
```js
import harptos from 'harptosjs';
import harptos_us from 'harptosjs/build/locales/harptos_us';

// add locale
harptos.addLocale(harptos_us);
```

Once a locale has been loaded as above, you can choose to use it in different ways:

**Setting a global locale**
```js
import harptos from 'harptosjs';

// set default locale
harptos.locale(harptos_us);
```

**Set locale on single date**
```js
import harptos from 'harptosjs';

// set locale on creation
const date = harptos('1000-01-01', 'harptos_gb');

// set locale on existing date
date.locale('harptos_us');

// format as locale
date.format('L', 'common_gb');
```

### Available locales

| Locale | Description | Example |
|----|----|----|
| harptos_gb _default_ | Standard Harptos date format | 1 Hammer 1000 |
| harptos_us | Harptos dates formatted using American date structure | Hammer 1, 1000 |
| common_gb | Same as harptos_gb, but months are given their common name | 1 Deepwinter 1000 |
| common_gb | Same as harptos_us, but months are given their common name | Deepwinter 1, 1000 |
| en_gb | Months are converted to English Gregorian names | 1 January 1000 |
| en_us | Months are converted to English Gregorian names | January 1, 1000 |


### Custom locales
It is possible to add your own custom locales by following the same format as shown in [https://github.com/jmosul/harptos-js/blob/master/src/locales/harptos_gb.ts](src/locales/harptos_gb.ts).
Be sure to give it a unique name, then you can import it like any of the provided locales as show above.

## Planned Features:

### More date calculations
In its current form HarptosJS can only handle add/subtract x days.
It will be extended to match MomentJS's api.  For example: `harpos.add(3, months)`

### Tendays
Implement counting by Tendays. With tendays starting on the 1st of every month as defined in the Harptos calendar.

### Customise calendar structure
HarptosJS follows the structure of twelve months of 30 days, with 5 inbetween days and a leap year every 4 years.
I will aim to allow HarptosJS to be highly configurable allowing the date structure to be changed.  This will include custom week lengths (tendays).

### Negative dates
Aim to be able to handle negative Dale Reckoning dates.

## Timeless
Currently Harptos does not implement time (hours, minutes, etc...).

Dates are calculated from "daystamps"; days since the start of epoc, 1st Hammer 1 DR
