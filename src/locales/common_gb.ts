import Locale from '../types/Locale';
import ordinal from '../helpers/ordinal';

const locale: Locale = {
    name: 'common_gb',
    weekdays: 'Firstday_Secondday_Thirdday_Fourthday_Fifthday_Sixthday_Seventhday_Eighthday_Ninthday_Tenthday'.split('_'),
    weekdaysShort: '1st_Sec_Thi_For_Fif_Six_Sev_Eig_Nin_Ten'.split('_'),
    weekdaysMin: 'Fi_Se_Th_Fo_Fi_Si_Se_Ei_Ni_Te'.split('_'),
    months: 'Deepwinter_Claw of Winter_Claw of Sunsets_Claw of Storms_Meltin_Time of Flowers_Summertide_Highsun_Fading_Leaffall_Rotting_Drawing Down'.split('_'),
    monthsShort: 'Dwi_CWi_CSu_CSt_Mel_Flo_Sum_Hig_Fad_Lea_Rot_Dra'.split('_'),
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
    ordinal,
};

export default locale;
