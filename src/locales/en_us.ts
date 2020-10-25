import Locale from '../types/Locale';
import ordinal from '../helpers/ordinal';

const locale: Locale = {
    name: 'en_us',
    weekdays: 'Firstday_Secondday_Thirdday_Fourthday_Fifthday_Sixthday_Seventhday_Eighthday_Ninthday_Tenthday'.split('_'),
    weekdaysShort: '1st_Sec_Thi_For_Fif_Six_Sev_Eig_Nin_Ten'.split('_'),
    weekdaysMin: 'Fi_Se_Th_Fo_Fi_Si_Se_Ei_Ni_Te'.split('_'),
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    additionals: 'Midwinter_Greengrass_Midsummer_Highharvestide_Feast of the Moon_Shieldmeet'.split('_'),
    additionalsShort: 'MW_GG_MS_HH_FM_SM'.split('_'),
    era: 'Dale Reckoning',
    eraShort: 'DR',
    formats: {
        L: 'MM/DD/YYYY',
        LL: 'MMMM D YYYY',
        LLL: 'MMMM D YYYY N',
        LLLL: 'dddd, MMMM Do YYYY N',
    },
    ordinal,
};

export default locale;
