import Locale from '../types/Locale';

const locale: Locale = {
    name: 'harptos_gb',
    weekdays: 'Firstday_Secondday_Thirdday_Fourthday_Fifthday_Sixthday_Seventhday_Eighthday_Ninthday_Tenthday'.split('_'),
    weekdaysShort: '1st_Sec_Thi_For_Fif_Six_Sev_Eig_Nin_Ten'.split('_'),
    weekdaysMin: 'Fi_Se_Th_Fo_Fi_Si_Se_Ei_Ni_Te'.split('_'),
    months: 'Hammer_Alturiak_Ches_Tarsakh_Mirtul_Kythorn_Flamerule_Eleasis_Eleint_Marpenoth_Uktar_Nightal'.split('_'),
    monthsShort: 'Ham_Alt_Che_Tar_Mir_Kyt_Fla_Els_Elt_Mar_Ukt_Nig'.split('_'),
    additionals: 'Midwinter_Greengrass_Midsummer_Shieldmeet_Highharvestide_Feast of the Moon'.split('_'),
    additionalsShort: 'MW_GG_MS_SM_HH_FM'.split('_'),
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



