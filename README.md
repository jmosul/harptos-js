# HarptosJS

> **Early Development**: HarptosJS's features are very limited at the moment and a build has not yet been released.

HarptosJS is an attempt to implement a [MomentJS](https://momentjs.com/)-esque date library for Dungeon and Dragon's [Harptos Calender](https://forgottenrealms.fandom.com/wiki/Calendar_of_Harptos).

It is being built out of need for my own personal project, but presented separately in case it helps another.

```js
import harptos from 'path/to/harptosjs';

const date = harpotos('1000-10-01');

const tomorrow = harptos.add(1); // 1000-01-01
```

Harptos follows the structure of:
* 12 months a year
* 30 days a month
* 5 additional days between months
* 365 days a year
* Leap year every 4 years with an extra day (Shieldmeet) on the 7th month

## Planned Features:

#### Format date into string

Display your Harptos dates using common date parser formats.
```js
date.format('Do MMMM YYYY'); // 1st Marpenoth 1000
date.format('DD/MM/YYYY'); // 01/10/1000
```

The additional days between months will be treated as special cases.

As an example, though Midsummer is presented as the 31st day of Flamerule (1000-07-31), this is purely to allow dates to be stored in common formats.
The string parser however will display Midsummer as its own unique entity. I.e `Midsummer 1000`.

#### Locales for different built in formats
 * Switch between British and US date formats
     * 1st Marpenoth 1000 v Marpenoth 1st, 1000
 * Switch between Harptos and Common names
     * Marpenoth v Leafall
 * Switch to Gregorian month names
     * Marpenoth v October
 * Custom Locales
     * Use your own homebrew month names

### More date calculations
In its current form HarptosJS can only handle add/subtract x days.
It will be extended to match MomentJS's api.  For example: `harpos.add(3, months)`

### Tendays
Implement counting by Tendays. With tendays starting on the 1st of every month as defined in the Harptos calendar.

#### Customise calendar structure
HarptosJS follows the structure of twelve months of 30 days, with 5 inbetween days and a leap year every 4 years.
I will aim to allow HarptosJS to be highly configurable allowing the date structure to be changed.  This will include custom week lengths (tendays).


## Timeless
Currently Harptos does not implement time (hours, minutes, etc...).

Dates are calculated from "daystamps"; days since the start of epoc, 1st Hammer 1 DR
