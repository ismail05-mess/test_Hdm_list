import {
  require_dayjs_min
} from "./chunk-DPLKJ6H7.js";
import {
  __commonJS
} from "./chunk-G3PMV62Z.js";

// node_modules/dayjs/locale/fr.js
var require_fr = __commonJS({
  "node_modules/dayjs/locale/fr.js"(exports, module) {
    !function(e, n) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = n(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_fr = n(e.dayjs);
    }(exports, function(e) {
      "use strict";
      function n(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var t = n(e), i = { name: "fr", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinal: function(e2) {
        return "" + e2 + (1 === e2 ? "er" : "");
      } };
      return t.default.locale(i, null, true), i;
    });
  }
});
export default require_fr();
//# sourceMappingURL=dayjs_locale_fr.js.map
