import Locale from '../types/Locale';

const locale: Locale = {
    name: 'en_gb',
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
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY N',
        LLLL: 'dddd, Do MMMM YYYY N',
    },
    ordinal: (n: number) => {
        const s = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;

        return s[v] || s[0];
    },
};

export default locale;

