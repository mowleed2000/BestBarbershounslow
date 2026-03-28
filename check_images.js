const https = require('https');

const urls = [
    'https://lh3.googleusercontent.com/aida/ADBb0uhQmBB0349qNGanYsmrZ-sIDh5COyNTI_axvKuQao1PP3Z7Xexosx0dSG3brtMKkFb0p6YbNN0RVNWa8PMa6KPCk-oKDB37xMgrY6OjmKBRkHrqIqMuasgmSpfsSfinNwgIwKMZryFwTZiDCtuVQzb45dWovUznyYa-gj4X-2WARyDnAbLzhXGcC-OM6FPR0k7CFehngI1sNHAUE1WhrRT-CSiYYNmKCX-SrOtHrLMd1lHJJDqnTAYHWzGpLf6EmETILJhvVRfYuH0',
    'https://lh3.googleusercontent.com/aida/ADBb0uhPxHVpeXiVzql9EpoB44Ri7WAXXLxgopEqvJhcmXfV8y50FKTaDjhlEE4bRs2zFIfE-wNulMZsDbjBjGFErrhp2gs84mwU-efjvNCTrdMAPi_TsSfEMt-GI6wUUhskSWHboTe6FK8ZSsFbdqdML4q9UCzImF424i7mWFcRvFwdAh3NM60PZPMY_mmX5y6lamakbkDuBySNmylPm92EJEi3F9CFU3X86n1vwpS0MrUzBp-valySy4crzjeb_EO0wQdG1X5ilrOP1w',
    'https://lh3.googleusercontent.com/aida/ADBb0ugP-SxXx-VffMVmizjUXDnecjiCSro8JDASq_3sK5vV44MaHNK4j4BafsohsZLZAf91fGgg-p03N1J5JY-fvfk7CjJQrujy-xE-jB8GNOet8tTzimmQEW2MR61H7wSrOLkFWyVqk_-9EVIetB94Vt6DXSWpNc8IC0-DqRLewdgbwWMCKDX8VNeCKTAmPpdg4L3PWXBkU7NxRaiz2ulIX5-DXkvbYm7igBH56pidmitQyxMbYdsoYHWmPN__FuGM6gtBBjCwZRkTR6g',
    'https://lh3.googleusercontent.com/aida/ADBb0ugAegAR5Ir3wQ1KaERFB5qg_h67hzaGBP_IfLgQSsqXR1UXU3uP6ppgSEHkOp-pivlLD1gPXN28iA3H3IBQRjjRctRAqpFZIJzJxdAa5Xje6hToX_dytysrQIlZx_TvY9pQwb3pOilHZMDlhjA4Mw7sKfKq3da-cpdQLmBV55y9sv2MgIP3TILg4w4pZaHEdQpLYKjNkwqEeogkDagsRgFLS9sOrH3mhzK-Ubty6w4s-4W8wOFOIPpxDZaM4xqgk3oUp7DrDkcXh_c',
    'https://lh3.googleusercontent.com/aida/ADBb0ujnrnYtOClGPzuCyplu7S6WwSelZtGrlFP2MTCYf43bBp2kzgJ9LS-rdxDYrlV2cu8luPbM6-4PnWfMU2r228vLFrNTdbQUNDsNQhHZ_pwO_uIOZ3_yHBinyaMGtbD6chRcVZ1c4nSJ8ZoXB2GG9cj7nkkVlEwgjeqlqRVEIbBJxiY9YCsWPEemQ36lUtMyiFX1F9Ea9qrkLvExP5VUoDwCBGnAqYXxVWKHGBSSRoPQby4k_Y74Reo7Z9EOCF7Ft-chTYuz869Zgzk',
    'https://lh3.googleusercontent.com/aida/ADBb0uj2I9fO-1wmMBw5s1pb6L9v59mQrMDG4SqpPezORRjTTh16EJCCsvqpqeM4cplsb7vNbsQAV63XNfCbIunc9lKMzRIaGOOtsuOQ4_Cb01xgAxdQSFQIBn3XTZoDSbs_yDRBcEuXsTXSFqN349YP4gcxSxCbNi6u0td7BVt4nqYVz11ontUtiq97Qmt3ksMJPFiK-DcpJoLJ_LqzAh9zZ251JWtJM8GQxBxsr5gEsurNKo-htggkudhTOSYPrxOvrTnJR86hD36b-qw'
];

function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            console.log(`${url}: ${res.statusCode}`);
            resolve(res.statusCode === 200);
        }).on('error', (e) => {
            console.log(`${url}: Error ${e.message}`);
            resolve(false);
        });
    });
}

(async () => {
    for (const url of urls) {
        await checkUrl(url);
    }
})();
